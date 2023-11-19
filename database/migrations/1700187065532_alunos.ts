import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('nome', 255).notNullable()
      table.string('email', 50).notNullable().unique()
      table.string('password', 255).notNullable()
      table.integer('tipo').notNullable()
      table.string('endereco', 255).notNullable()
      table.string('contato_principal', 255).notNullable()
      table.string('usuario', 255).notNullable()
      table.string('nome_da_mae', 255)
      table.string('nome_do_pai', 255)
      table.string('observacoes', 255)
      table.string('contato_secundario', 255)
      table.timestamp('data_de_nascimento', { useTz: false })
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
