import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCargo1695668130979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'loja_cargo',
        columns: [
          {
            name: 'loja_id',
            type: 'int',
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'cargo_id',
            type: 'int',
            isPrimary: true,
            isGenerated: false,
          },
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('loja_cargo', 'loja_cargo_fk');
    await queryRunner.dropForeignKey('loja_cargo', 'cargo_loja_fk');
    await queryRunner.dropTable('cargo');
  }
}
