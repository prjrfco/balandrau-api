import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLojaCargo1695668130980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'loja_cargo',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'loja_id',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
          },
          {
            name: 'cargo_id',
            type: 'int',
            isPrimary: false,
            isGenerated: false,
          },
          { name: 'ordem', type: 'integer', isNullable: false, default: 1000 },
        ],
        foreignKeys: [
          {
            name: 'loja_cargo_fk',
            referencedTableName: 'loja',
            referencedColumnNames: ['id'],
            columnNames: ['loja_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'cargo_loja_fk',
            referencedTableName: 'pessoa',
            referencedColumnNames: ['id'],
            columnNames: ['cargo_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "loja_cargo_unique" ON loja_cargo(loja_id, cargo_id)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "loja_cargo_unique"`);
    await queryRunner.dropForeignKey('loja_cargo', 'cargo_loja_fk');
    await queryRunner.dropForeignKey('loja_cargo', 'loja_cargo_fk');
    await queryRunner.dropTable('cargo');
  }
}
