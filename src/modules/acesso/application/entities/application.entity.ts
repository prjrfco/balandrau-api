import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "../../../decorators/base.entity";
import { ApplicationGroupEntity } from "../../application_group/entities/application_groups.entity";

@Entity({ name: "application", schema: "acesso" })
export class ApplicationEntity extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  name: string;

  @OneToMany(() => ApplicationGroupEntity, (application_group) => application_group.application, {
    cascade: true,
  })
  name_group?: ApplicationGroupEntity[];
}
