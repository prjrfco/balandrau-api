import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../../pessoa/entities/pessoa.entity';

@Entity({ name: 'irmao' })
export class Irmao {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @OneToOne(() => Pessoa, (pessoa: Pessoa) => pessoa.irmao, {
    cascade: true,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'pretty_name', nullable: false })
  prettyName: string;

  @Column({ name: 'cnpj', nullable: false })
  cnpj: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'address', nullable: false })
  address: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
