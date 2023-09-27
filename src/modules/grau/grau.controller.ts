import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GrauService } from './grau.service';
import { CreateGrauDto } from './dto/create-grau.dto';
import { UpdateGrauDto } from './dto/update-grau.dto';

@Controller('grau')
export class GrauController {
  constructor(private readonly grauService: GrauService) {}

  @Post()
  create(@Body() createGrauDto: CreateGrauDto) {
    return this.grauService.create(createGrauDto);
  }

  @Get()
  findAll() {
    return this.grauService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grauService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrauDto: UpdateGrauDto) {
    return this.grauService.update(+id, updateGrauDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grauService.remove(+id);
  }
}
