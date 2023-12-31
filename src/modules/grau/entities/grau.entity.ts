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
import { Inspetoria } from '../../inspetoria/entities/inspetoria.entity';

@Entity({ name: 'grau' })
export class Grau {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'naturalidade', nullable: true })
  nome: string;

  @ManyToOne(() => Inspetoria, (inspetoria) => inspetoria.id, {
    orphanedRowAction: 'soft-delete',
    cascade: false,
  })
  @JoinColumn({ name: 'inspetoria_id' })
  inspetoria: Inspetoria;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'uuid', generated: 'uuid' })
  uuid: string;
}
