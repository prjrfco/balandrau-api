import { Module } from '@nestjs/common';
import { IrmaoService } from './irmao.service';
import { IrmaoController } from './irmao.controller';

@Module({
  controllers: [IrmaoController],
  providers: [IrmaoService],
})
export class IrmaoModule {}
