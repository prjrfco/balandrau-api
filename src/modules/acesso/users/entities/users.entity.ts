import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcrypt";
import { Base } from "../../../decorators/base.entity";
import { GroupsEntity } from "../../group/entities/group.entity";
import { PessoaEntity } from "../../pessoa/entities/pessoa.entity";
import { AnexoEntity } from "src/modules/anexo/entities/anexo.entity";

@Entity({ name: "user", schema: "acesso" })
export class UsersEntity extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @ManyToMany(() => GroupsEntity, (groupsEntity: GroupsEntity) => groupsEntity.users, {
    cascade: true,
    nullable: true,
  })
  @JoinTable({
    name: "groups_user",
    schema: "acesso",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "group_id",
      referencedColumnName: "id",
    },
  })
  groups: GroupsEntity[];

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 6);
  }

  @OneToMany(() => AnexoEntity, (anexoEntity) => anexoEntity.user, {
    cascade: true,
  })
  anexo?: AnexoEntity[];

  @OneToMany(() => PessoaEntity, (pessoa) => pessoa.user, {
    cascade: true,
  })
  pessoa?: PessoaEntity[];
}
