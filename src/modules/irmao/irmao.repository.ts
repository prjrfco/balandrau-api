import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Irmao } from './entities/irmao.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('IRMAO_REPOSITORY')
    private repository: Repository<Irmao>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.repository.find();
  }
}
