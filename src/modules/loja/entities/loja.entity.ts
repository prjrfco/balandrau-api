import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Inspetoria } from '../../inspetoria/entities/inspetoria.entity';
import { Cargo } from '../../cargo/entities/cargo.entity';

@Entity({ name: 'loja' })
export class Loja {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @ManyToOne(() => Inspetoria, (inspetoria) => inspetoria.id, {
    orphanedRowAction: 'soft-delete',
    cascade: false,
  })
  @JoinColumn({ name: 'inspetoria_id' })
  inspetoria: Inspetoria;

  @JoinTable({
    name: 'loja_cargo',
    joinColumn: {
      name: 'loja_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'cargo_id',
      referencedColumnName: 'id',
    },
  })
  @ManyToMany(() => Cargo, (cargo: Cargo) => cargo.lojas, {
    cascade: false,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  })
  cargos: Cargo[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
