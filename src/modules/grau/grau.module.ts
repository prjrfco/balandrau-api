import { Module } from '@nestjs/common';
import { GrauService } from './grau.service';
import { GrauController } from './grau.controller';

@Module({
  controllers: [GrauController],
  providers: [GrauService],
})
export class GrauModule {}
