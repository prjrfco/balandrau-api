import { Module } from '@nestjs/common';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { IrmaoModule } from './modules/irmao/irmao.module';

@Module({
  imports: [PessoaModule, IrmaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
