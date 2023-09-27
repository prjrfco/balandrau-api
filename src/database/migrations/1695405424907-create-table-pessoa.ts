import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePessoa1695405424907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoa',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nome', type: 'varchar' },
          { name: 'apelido', type: 'varchar', isNullable: true },
          { name: 'dt_nascimento', type: 'date', isNullable: true },
          { name: 'naturalidade', type: 'varchar', isNullable: true },
          { name: 'naturalidade_uf', type: 'varchar', isNullable: true },
          { name: 'naturalidade_pais', type: 'varchar', isNullable: true },
          { name: 'estado_civil', type: 'varchar', isNullable: true },
          { name: 'escolaridade', type: 'varchar', isNullable: true },
          { name: 'rg', type: 'varchar', isNullable: true },
          { name: 'rg_orgao_expedidor', type: 'varchar', isNullable: true },
          { name: 'rg_uf', type: 'varchar', isNullable: true },
          { name: 'rg_dt_emissao', type: 'date', isNullable: true },
          { name: 'cpf', type: 'varchar', isNullable: true },
          { name: 'celular1', type: 'varchar', isNullable: true },
          { name: 'telefone1', type: 'varchar', isNullable: true },
          { name: 'email', type: 'varchar', isNullable: true },
          { name: 'trab_profissao', type: 'varchar', isNullable: true },
          { name: 'religiao', type: 'varchar', isNullable: true },
          { name: 'foto', type: 'varchar', isNullable: true },
          { name: 'ativo', type: 'boolean', default: true },
          {
            name: 'apagado',
            type: 'boolean',
            default: false,
          },
          {
            name: 'deleted_at',
            type: 'datetimeoffset',
            default: null,
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'datetimeoffset',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetimeoffset',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'uuid',
            type: 'uuid',
            isPrimary: false,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pessoa');
  }
}
