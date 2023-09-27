import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { DatabaseModule } from '../../database/database.module';
import { PessoaProviders } from './pessoa.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PessoaController],
  providers: [...PessoaProviders, PessoaService],
})
export class PessoaModule {}
