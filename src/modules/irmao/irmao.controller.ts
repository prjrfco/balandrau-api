import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IrmaoService } from './irmao.service';
import { CreateIrmaoDto } from './dto/create-irmao.dto';
import { UpdateIrmaoDto } from './dto/update-irmao.dto';

@Controller('irmao')
export class IrmaoController {
  constructor(private readonly irmaoService: IrmaoService) {}

  @Post()
  create(@Body() createIrmaoDto: CreateIrmaoDto) {
    return this.irmaoService.create(createIrmaoDto);
  }

  @Get()
  findAll() {
    return this.irmaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irmaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIrmaoDto: UpdateIrmaoDto) {
    return this.irmaoService.update(+id, updateIrmaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irmaoService.remove(+id);
  }
}
