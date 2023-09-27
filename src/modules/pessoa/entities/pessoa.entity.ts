import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Endereco } from './endereco.entity';
import { Irmao } from '../../irmao/entities/irmao.entity';

@Entity({ name: 'pessoa' })
export class Pessoa {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'apelido', nullable: true })
  apelido: string;

  @Column({ name: 'dt_nascimento', nullable: true })
  dtNascimento: Date;

  @Column({ name: 'naturalidade', nullable: true })
  naturalidade: string;

  @Column({ name: 'naturalidade_uf', nullable: true })
  naturalidadeUf: string;

  @Column({ name: 'naturalidade_pais', nullable: true })
  naturalidadePais: string;

  @Column({ name: 'estado_civil', nullable: true })
  estadoCivil: string;

  @Column({ name: 'escolaridade', nullable: true })
  escolaridade: string;

  @Column({ name: 'rg', nullable: true })
  rg: string;

  @Column({ name: 'rg_orgao_expedidor', nullable: true })
  rgOrgaoExpedidor: string;

  @Column({ name: 'rg_uf', nullable: true })
  rgUf: string;

  @Column({ name: 'rg_dt_emissao', nullable: true })
  rgDtEmissao: string;

  @Column({ name: 'cpf', nullable: true })
  cpf: string;

  @Column({ name: 'celular1', nullable: true })
  celular: string;

  @Column({ name: 'telefone1', nullable: true })
  telefone: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'trab_profissao', nullable: true })
  trabProfissao: string;

  @Column({ name: 'religiao', nullable: true })
  religiao: string;

  @OneToOne(() => Irmao, (irmao: Irmao) => irmao.pessoa, {
    cascade: true,
  })
  irmao: Irmao;

  @OneToMany(() => Endereco, (endereco: Endereco) => endereco.pessoa, {
    cascade: true,
  })
  enderecos: Endereco[];

  @Column({ name: 'foto', nullable: true })
  foto: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
