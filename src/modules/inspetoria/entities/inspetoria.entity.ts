import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grau } from '../../grau/entities/grau.entity';
import { Loja } from "../../loja/entities/loja.entity";

@Entity({ name: 'inspetoria' })
export class Inspetoria {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'apelido', nullable: true })
  sigla: string;

  @OneToMany(() => Grau, (grau: Grau) => grau.inspetoria, {
    cascade: true,
  })
  graus: Grau[];

  @OneToMany(() => Loja, (loja: Loja) => loja.inspetoria, {
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
