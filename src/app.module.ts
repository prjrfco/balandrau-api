import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { IrmaoModule } from './modules/irmao/irmao.module';

@Module({
  imports: [DatabaseModule, PessoaModule, IrmaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
