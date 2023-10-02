import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersProviders } from "./users.providers";
import { DatabaseModule } from "../../database/database.module";
import { AuthModule } from "../auth/auth.module";
import { GroupService } from "../group/group.service";
import { RoleService } from "../permissions/roles.service";

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [...UsersProviders, UsersService, GroupService, RoleService],
  exports: [UsersService],
})
export class UsersModule {}
