import { Module } from '@nestjs/common';
import { InspetoriaService } from './inspetoria.service';
import { InspetoriaController } from './inspetoria.controller';

@Module({
  controllers: [InspetoriaController],
  providers: [InspetoriaService],
})
export class InspetoriaModule {}
