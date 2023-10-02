import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from '../decorators/role.decorator';
import { GroupService } from '../modules/acesso/group/group.service';
import { GroupsEntity } from '../modules/acesso/group/entities/group.entity';
import { RoleService } from '../modules/acesso/role/role.service';
import { UsersService } from '../modules/acesso/user/user.service';
import { RoleEntity } from '../modules/acesso/role/entities/role.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly groupService: GroupService,
    private readonly usersService: UsersService,
    private readonly roleService: RoleService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userGroup: GroupsEntity[] = await this.getGroupsByUser(
      request.user.id,
    );

    const groupRoles = await this.getRolesForGroup(userGroup);

    const rolesFilted = requiredRoles.filter((reqRoles) => {
      return groupRoles.map((gp) => gp.name).includes(reqRoles);
    });
    return rolesFilted.length > 0;
  }

  async getRolesForGroup(groups: GroupsEntity[]): Promise<RoleEntity[]> {
    if (groups.some((e) => e.admin)) {
      return await this.roleService.findAll();
    } else {
      const findGroups = await this.groupService.findGroupsAndRelations(groups);
      const roles: RoleEntity[] = [];
      for (const group of findGroups) {
        roles.push(...group.role);
      }
      return roles;
    }
  }

  async getGroupsByUser(id: string): Promise<GroupsEntity[]> {
    return await this.usersService.findGroupsByUserUuid(id);
  }
}
