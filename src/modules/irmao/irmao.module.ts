import { Module } from '@nestjs/common';
import { IrmaoService } from './irmao.service';
import { IrmaoController } from './irmao.controller';
import { DatabaseModule } from '../../database/database.module';
import { PessoaProviders } from '../pessoa/pessoa.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [IrmaoController],
  providers: [...PessoaProviders, IrmaoService],
})
export class IrmaoModule {}
