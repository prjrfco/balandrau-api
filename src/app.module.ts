import { Module } from '@nestjs/common';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { IrmaoModule } from './modules/irmao/irmao.module';
import { AuthModule } from './modules/acesso/auth/auth.module';
import { ApplicationModule } from './modules/acesso/application/application.module';
import { ApplicationGroupModule } from './modules/acesso/application_group/application_group.module';
import { FeatureModule } from './modules/acesso/feature/feature.module';
import { GroupModule } from './modules/acesso/group/group.module';
import { RolesModule } from './modules/acesso/permissions/roles.module';
import { TenantModule } from './modules/acesso/tenant/tenant.module';
import { UsersModule } from './modules/acesso/users/users.module';
import { CargoModule } from './modules/cargo/cargo.module';
import { LojaModule } from './modules/loja/loja.module';
import { LojaCargoModule } from './modules/loja-cargo/loja-cargo.module';

@Module({
  imports: [
    PessoaModule,
    IrmaoModule,
    CargoModule,
    LojaModule,
    LojaCargoModule,
    AuthModule,
    ApplicationModule,
    ApplicationGroupModule,
    FeatureModule,
    GroupModule,
    RolesModule,
    TenantModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
