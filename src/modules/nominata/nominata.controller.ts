import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NominataService } from './nominata.service';
import { CreateNominataDto } from './dto/create-nominata.dto';
import { UpdateNominataDto } from './dto/update-nominata.dto';

@Controller('nominata')
export class NominataController {
  constructor(private readonly nominataService: NominataService) {}

  @Post()
  create(@Body() createNominataDto: CreateNominataDto) {
    return this.nominataService.create(createNominataDto);
  }

  @Get()
  findAll() {
    return this.nominataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nominataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNominataDto: UpdateNominataDto) {
    return this.nominataService.update(+id, updateNominataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nominataService.remove(+id);
  }
}
