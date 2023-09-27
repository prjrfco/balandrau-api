import { Module } from '@nestjs/common';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { IrmaoModule } from './modules/irmao/irmao.module';
import { CargoModule } from './cargo/cargo.module';
import { LojaModule } from './loja/loja.module';
import { LojaCargoModule } from './loja-cargo/loja-cargo.module';

@Module({
  imports: [PessoaModule, IrmaoModule, CargoModule, LojaModule, LojaCargoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
