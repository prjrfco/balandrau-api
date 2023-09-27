import { Module } from '@nestjs/common';
import { LojaCargoService } from './loja-cargo.service';
import { LojaCargoController } from './loja-cargo.controller';

@Module({
  controllers: [LojaCargoController],
  providers: [LojaCargoService],
})
export class LojaCargoModule {}
