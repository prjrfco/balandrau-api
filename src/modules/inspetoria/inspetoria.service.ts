import { Injectable } from '@nestjs/common';
import { CreateInspetoriaDto } from './dto/create-inspetoria.dto';
import { UpdateInspetoriaDto } from './dto/update-inspetoria.dto';

@Injectable()
export class InspetoriaService {
  create(createInspetoriaDto: CreateInspetoriaDto) {
    return 'This action adds a new inspetoria';
  }

  findAll() {
    return `This action returns all inspetoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inspetoria`;
  }

  update(id: number, updateInspetoriaDto: UpdateInspetoriaDto) {
    return `This action updates a #${id} inspetoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} inspetoria`;
  }
}
