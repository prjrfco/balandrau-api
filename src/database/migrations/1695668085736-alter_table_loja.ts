import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTableLoja1695668085736 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'loja',
      new TableColumn({
        name: 'veneravel_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'loja',
      new TableForeignKey({
        name: 'irmao_veneravel_loja_fk',
        columnNames: ['veneravel_id'],
        referencedTableName: 'irmao',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('loja', 'irmao_veneravel_loja_fk');
    await queryRunner.dropColumn('loja', 'veneravel_id');
  }
}
