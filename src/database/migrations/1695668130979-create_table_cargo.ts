import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCargo1695668130979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cargo',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nome', type: 'varchar' },
          { name: 'brasao', type: 'varchar', isNullable: true },
          { name: 'ativo', type: 'boolean', default: true },
          {
            name: 'apagado',
            type: 'boolean',
            default: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
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
    await queryRunner.dropTable('cargo');
  }
}
