import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Irmao } from '../../irmao/entities/irmao.entity';
import { LojaCargo } from '../../loja-cargo/entities/loja-cargo.entity';

@Entity({ name: 'nominata' })
export class Nominata {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @JoinColumn({ name: 'irmao_id' })
  @ManyToOne(() => Irmao, (irmao: Irmao) => irmao.id, {
    cascade: true,
  })
  irmao: Irmao;

  @JoinColumn({ name: 'loja_cargo_id' })
  @ManyToOne(() => LojaCargo, (lojaCargo: LojaCargo) => lojaCargo.id, {
    cascade: true,
  })
  lojaCargo: LojaCargo;

  @Column({ name: 'periodo', nullable: false })
  periodo: string;

  @Column({ name: 'dt_inicio', nullable: true })
  dtInicio: Date;

  @Column({ name: 'dt_fim', nullable: true })
  dtFim: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
