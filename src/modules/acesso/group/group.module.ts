import { forwardRef, Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { DatabaseModule } from "../../database/database.module";
import { GroupProviders } from "./group.providers";
import { UsersService } from "../users/users.service";
import { RoleService } from "../permissions/roles.service";
import { PessoaService } from "../pessoa/pessoa.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [GroupController],
  providers: [...GroupProviders, GroupService, UsersService, RoleService, PessoaService],
  exports: [GroupService],
})
export class GroupModule {}
