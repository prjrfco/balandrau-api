import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableLoja1695655592481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'loja',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nome', type: 'varchar' },
          { name: 'numero', type: 'integer', isNullable: true },
          { name: 'dia_reuniao', type: 'varchar', isNullable: true },
          { name: 'horario_reuniao', type: 'varchar', isNullable: true },
          { name: 'titulo', type: 'varchar', isNullable: true },
          { name: 'titulo_sigla', type: 'varchar', isNullable: true },
          { name: 'cod_potencia', type: 'integer', isNullable: true },
          { name: 'dt_fundacao', type: 'date', isNullable: true },
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
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('loja');
  }
}
