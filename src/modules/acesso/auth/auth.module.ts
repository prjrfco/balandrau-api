import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthProviders } from './auth.providers';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersService } from '../user/user.service';
import { RoleService } from '../role/role.service';
import { DatabaseModule } from '../../../database/database.module';
import { envs } from '../../../common/env-values';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: String(envs.JWT_SECRET),
    }),
  ],
  controllers: [AuthController],
  providers: [
    ...AuthProviders,
    JwtStrategy,
    AuthService,
    UsersService,
    RoleService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
