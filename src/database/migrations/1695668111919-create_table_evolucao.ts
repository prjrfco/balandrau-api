import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableEvolucao1695668111919 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'evolucao',
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
            name: 'grau_id',
            type: 'int',
            isNullable: false,
          },
          { name: 'dt_evolucao_grau', type: 'date' },
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
            name: 'irmao_evolucao_fk',
            referencedTableName: 'irmao',
            referencedColumnNames: ['id'],
            columnNames: ['irmao_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'grau_evolucao_fk',
            referencedTableName: 'grau',
            referencedColumnNames: ['id'],
            columnNames: ['grau_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('evolucao', 'irmao_evolucao_fk');
    await queryRunner.dropForeignKey('evolucao', 'grau_evolucao_fk');
    await queryRunner.dropTable('evolucao');
  }
}
