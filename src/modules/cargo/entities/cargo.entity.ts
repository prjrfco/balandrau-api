import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Loja } from '../../loja/entities/loja.entity';
import { LojaCargo } from '../../loja-cargo/entities/loja-cargo.entity';

@Entity({ name: 'cargo' })
export class Cargo {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'apelido', nullable: true })
  brasao: string;

  @OneToMany(() => LojaCargo, (lojaCargo: LojaCargo) => lojaCargo.cargo, {
    cascade: true,
  })
  lojas: Loja[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
