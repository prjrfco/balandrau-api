import { Module } from '@nestjs/common';
import { NominataService } from './nominata.service';
import { NominataController } from './nominata.controller';

@Module({
  controllers: [NominataController],
  providers: [NominataService],
})
export class NominataModule {}
