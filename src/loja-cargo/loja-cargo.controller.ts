import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LojaCargoService } from './loja-cargo.service';
import { CreateLojaCargoDto } from './dto/create-loja-cargo.dto';
import { UpdateLojaCargoDto } from './dto/update-loja-cargo.dto';

@Controller('loja-cargo')
export class LojaCargoController {
  constructor(private readonly lojaCargoService: LojaCargoService) {}

  @Post()
  create(@Body() createLojaCargoDto: CreateLojaCargoDto) {
    return this.lojaCargoService.create(createLojaCargoDto);
  }

  @Get()
  findAll() {
    return this.lojaCargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojaCargoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLojaCargoDto: UpdateLojaCargoDto) {
    return this.lojaCargoService.update(+id, updateLojaCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lojaCargoService.remove(+id);
  }
}
