import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableIrmao1695655637031 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'irmao',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pesssoa_id',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
          { name: 'loja_simbolica', type: 'varchar' },
          { name: 'cim', type: 'varchar', isUnique: true },
          { name: 'situacao', type: 'varchar' },
          { name: 'dt_falecimento', type: 'date', isNullable: true },
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
            name: 'pessoa_irmao_fk',
            referencedTableName: 'pessoa',
            referencedColumnNames: ['id'],
            columnNames: ['pessoa_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('irmao', 'pessoa_irmao_fk');
    await queryRunner.dropTable('irmao');
  }
}
