import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableNominata1695668139588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'nominata_irmao',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nominata_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'irmao_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'cargo_id',
            type: 'int',
            isNullable: false,
          },
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
            referencedTableName: 'loja',
            referencedColumnNames: ['id'],
            columnNames: ['loja_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'loja_nominata_fk',
            referencedTableName: 'loja',
            referencedColumnNames: ['id'],
            columnNames: ['loja_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'loja_nominata_fk',
            referencedTableName: 'loja',
            referencedColumnNames: ['id'],
            columnNames: ['loja_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'loja_nominata_fk',
            referencedTableName: 'loja',
            referencedColumnNames: ['id'],
            columnNames: ['loja_id'],
            onDelete: 'SET NULL',
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
