import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Inspetoria } from '../../inspetoria/entities/inspetoria.entity';
import { Cargo } from '../../cargo/entities/cargo.entity';
import { Endereco } from "../../pessoa/entities/endereco.entity";
import { LojaCargo } from "../../loja-cargo/entities/loja-cargo.entity";

@Entity({ name: 'loja' })
export class Loja {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @ManyToOne(() => Inspetoria, (inspetoria) => inspetoria.id, {
    cascade: false,
  })
  @JoinColumn({ name: 'inspetoria_id' })
  inspetoria: Inspetoria;

  @OneToMany(() => LojaCargo, (lojaCargo: LojaCargo) => lojaCargo.loja, {
    cascade: true,
  })
  cargos: LojaCargo[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
