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
import { Pessoa } from './pessoa.entity';

@Entity({ name: 'endereco' })
export class Endereco {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  cep: string;

  @Column({ name: 'apelido', nullable: true })
  logradouro: string;

  @Column({ name: 'dt_nascimento', nullable: true })
  numero: Date;

  @Column({ name: 'naturalidade', nullable: true })
  complemento: string;

  @Column({ name: 'naturalidade_uf', nullable: true })
  bairro: string;

  @Column({ name: 'naturalidade_pais', nullable: true })
  cidade: string;

  @Column({ name: 'estado_civil', nullable: true })
  estado: string;

  @Column({ name: 'escolaridade', nullable: true })
  descricao: string;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.id, {
    orphanedRowAction: 'soft-delete',
    cascade: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
