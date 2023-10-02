import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cargo } from '../../cargo/entities/cargo.entity';
import { Loja } from '../../loja/entities/loja.entity';

@Entity({ name: 'loja' })
export class LojaCargo {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @ManyToOne(() => Loja, (loja) => loja.id, {
    cascade: false,
  })
  @JoinColumn({ name: 'loja_id' })
  loja: Loja;

  @ManyToOne(() => Cargo, (cargo) => cargo.id, {
    cascade: false,
  })
  @JoinColumn({ name: 'cargo_id' })
  cargo: Cargo;

  @Column({ name: 'nome', nullable: false })
  ordem: string;
}
