import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private repository: Repository<Pessoa>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.repository.find();
  }
}
