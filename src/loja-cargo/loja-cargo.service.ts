import { Injectable } from '@nestjs/common';
import { CreateLojaCargoDto } from './dto/create-loja-cargo.dto';
import { UpdateLojaCargoDto } from './dto/update-loja-cargo.dto';

@Injectable()
export class LojaCargoService {
  create(createLojaCargoDto: CreateLojaCargoDto) {
    return 'This action adds a new lojaCargo';
  }

  findAll() {
    return `This action returns all lojaCargo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lojaCargo`;
  }

  update(id: number, updateLojaCargoDto: UpdateLojaCargoDto) {
    return `This action updates a #${id} lojaCargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lojaCargo`;
  }
}
