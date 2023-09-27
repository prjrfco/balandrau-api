import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableNominata1695668139588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'nominata',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'irmao_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'loja_cargo_id',
            type: 'int',
            isNullable: false,
          },
          { name: 'periodo', type: 'varchar', isUnique: true },
          { name: 'dt_inicio', type: 'date', isNullable: true },
          { name: 'dt_fim', type: 'date', isNullable: true },
          { name: 'ativo', type: 'boolean', default: true },
          {
            name: 'apagado',
            type: 'boolean',
            default: false,
          },
          { name: 'criado_em', type: 'timestamp', default: 'now()' },
          { name: 'modificado_em', type: 'timestamp' },
          { name: 'criado_por', type: 'varchar' },
          { name: 'modificado_por', type: 'varchar' },
          {
            name: 'uuid',
            type: 'uuid',
            isPrimary: false,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'loja_nominata_fk',
            referencedTableName: 'loja_cargo',
            referencedColumnNames: ['id'],
            columnNames: ['loja_cargo_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('nominata', 'loja_nominata_fk');
    await queryRunner.dropTable('nominata');
  }
}
