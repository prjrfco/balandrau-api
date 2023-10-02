import { forwardRef, Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupProviders } from './group.providers';
import { UsersService } from '../user/user.service';
import { RoleService } from '../role/role.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../../../database/database.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [GroupController],
  providers: [...GroupProviders, GroupService, UsersService, RoleService],
  exports: [GroupService],
})
export class GroupModule {}
