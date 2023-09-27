import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTableLojaAndGrau1695759200846 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'loja',
      new TableColumn({
        name: 'inspetoria_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'loja',
      new TableForeignKey({
        name: 'inspetoria_loja_fk',
        columnNames: ['inspetoria_id'],
        referencedTableName: 'inspetoria',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.addColumn(
      'grau',
      new TableColumn({
        name: 'inspetoria_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'grau',
      new TableForeignKey({
        name: 'inspetoria_grau_fk',
        columnNames: ['inspetoria_id'],
        referencedTableName: 'inspetoria',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('loja', 'inspetoria_loja_fk');
    await queryRunner.dropColumn('loja', 'inspetoria_id');
    await queryRunner.dropForeignKey('grau', 'inspetoria_grau_fk');
    await queryRunner.dropColumn('grau', 'inspetoria_id');
  }
}
