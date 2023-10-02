import { DataSource } from "typeorm";
import { GroupsEntity } from "./entities/group.entity";
import { RoleEntity } from "../permissions/entities/roles.entity";
import { UsersEntity } from "../users/entities/users.entity";
import { PessoaEntity } from "../pessoa/entities/pessoa.entity";

export const GroupProviders = [
  {
    provide: "GROUP_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GroupsEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "ROLE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RoleEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "USERS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "PESSOA_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PessoaEntity),
    inject: ["DATA_SOURCE"],
  },
];
