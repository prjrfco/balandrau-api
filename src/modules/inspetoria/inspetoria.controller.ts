import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InspetoriaService } from './inspetoria.service';
import { CreateInspetoriaDto } from './dto/create-inspetoria.dto';
import { UpdateInspetoriaDto } from './dto/update-inspetoria.dto';

@Controller('inspetoria')
export class InspetoriaController {
  constructor(private readonly inspetoriaService: InspetoriaService) {}

  @Post()
  create(@Body() createInspetoriaDto: CreateInspetoriaDto) {
    return this.inspetoriaService.create(createInspetoriaDto);
  }

  @Get()
  findAll() {
    return this.inspetoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inspetoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInspetoriaDto: UpdateInspetoriaDto) {
    return this.inspetoriaService.update(+id, updateInspetoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inspetoriaService.remove(+id);
  }
}
