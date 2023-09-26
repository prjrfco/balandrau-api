import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePessoa1695405424907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoa',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'nome', type: 'varchar' },
          { name: 'apelido', type: 'varchar', isNullable: true },
          { name: 'dt_nascimento', type: 'date', isNullable: true },
          { name: 'tipo_sanguineo', type: 'varchar', isNullable: true },
          { name: 'naturalidade', type: 'varchar', isNullable: true },
          { name: 'naturalidade_uf', type: 'varchar', isNullable: true },
          { name: 'naturalidade_pais', type: 'varchar', isNullable: true },
          { name: 'estado_civil', type: 'varchar', isNullable: true },
          { name: 'escolaridade', type: 'varchar', isNullable: true },
          { name: 'rg', type: 'varchar', isNullable: true },
          { name: 'rg_orgao_expedidor', type: 'varchar', isNullable: true },
          { name: 'rg_uf', type: 'varchar', isNullable: true },
          { name: 'rg_dt_emissao', type: 'date', isNullable: true },
          { name: 'cpf', type: 'varchar', isNullable: true },
          { name: 'celular1', type: 'varchar', isNullable: true },
          { name: 'telefone1', type: 'varchar', isNullable: true },
          { name: 'email', type: 'varchar', isNullable: true },
          { name: 'nome_mae', type: 'varchar', isNullable: true },
          { name: 'nome_pai', type: 'varchar', isNullable: true },
          { name: 'trab_empresa_orgao', type: 'varchar', isNullable: true },
          { name: 'trab_telefone', type: 'varchar', isNullable: true },
          { name: 'trab_ramal', type: 'varchar', isNullable: true },
          { name: 'trab_cargo_funcao', type: 'varchar', isNullable: true },
          { name: 'trab_tempo_trabalho', type: 'varchar', isNullable: true },
          { name: 'trab_profissao', type: 'varchar', isNullable: true },
          {
            name: 'trab_renda_mensal',
            type: 'numeric(10, 2)',
            isNullable: true,
          },
          {
            name: 'tempo_residencia_cidade',
            type: 'integer',
            isNullable: true,
          },
          { name: 'religiao', type: 'varchar', isNullable: true },
          { name: 'foto', type: 'varchar', isNullable: true },
          { name: 'foto2', type: 'varchar', isNullable: true },
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
    await queryRunner.dropTable('pessoa');
  }
}
