import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.string('nome', 255).notNullable()
      table.integer('tipo').notNullable()
      table.string('endereco', 255).notNullable()
      table.string('contato_principal', 255).notNullable()
      table.string('nome_da_mae', 255)
      table.string('nome_do_pai', 255)
      table.string('observacoes', 255)
      table.string('contato_secundario', 255)
      table.string('data_de_nascimento', 10)
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
