import { DataSource } from 'typeorm';
import { Irmao } from './entities/irmao.entity';

export const IrmaoProviders = [
  {
    provide: 'IRMAO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Irmao),
    inject: ['DATA_SOURCE'],
  },
];
