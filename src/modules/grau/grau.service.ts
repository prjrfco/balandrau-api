import { Injectable } from '@nestjs/common';
import { CreateGrauDto } from './dto/create-grau.dto';
import { UpdateGrauDto } from './dto/update-grau.dto';

@Injectable()
export class GrauService {
  create(createGrauDto: CreateGrauDto) {
    return 'This action adds a new grau';
  }

  findAll() {
    return `This action returns all grau`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grau`;
  }

  update(id: number, updateGrauDto: UpdateGrauDto) {
    return `This action updates a #${id} grau`;
  }

  remove(id: number) {
    return `This action removes a #${id} grau`;
  }
}
