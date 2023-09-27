import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableEndereco1695655637032 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pessoa_id',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
          { name: 'cep', type: 'varchar' },
          { name: 'logradouro', type: 'varchar' },
          { name: 'numero', type: 'varchar' },
          { name: 'complemento', type: 'varchar' },
          { name: 'bairro', type: 'varchar' },
          { name: 'cidade', type: 'varchar' },
          { name: 'estado', type: 'varchar' },
          { name: 'descricao', type: 'varchar' },
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
            name: 'pessoa_endereco_fk',
            referencedTableName: 'pessoa',
            referencedColumnNames: ['id'],
            columnNames: ['pessoa_id'],
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('endereco', 'pessoa_endereco_fk');
    await queryRunner.dropTable('endereco');
  }
}
