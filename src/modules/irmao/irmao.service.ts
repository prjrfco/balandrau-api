import { Injectable } from '@nestjs/common';
import { CreateIrmaoDto } from './dto/create-irmao.dto';
import { UpdateIrmaoDto } from './dto/update-irmao.dto';

@Injectable()
export class IrmaoService {
  create(createIrmaoDto: CreateIrmaoDto) {
    return 'This action adds a new irmao';
  }

  findAll() {
    return `This action returns all irmao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irmao`;
  }

  update(id: number, updateIrmaoDto: UpdateIrmaoDto) {
    return `This action updates a #${id} irmao`;
  }

  remove(id: number) {
    return `This action removes a #${id} irmao`;
  }
}
