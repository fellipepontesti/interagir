import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum EnumUserTipo {
  ROOT = 0,
  ALUNO = 1,
  PROFESSOR = 2,
  COORDENADOR = 3,
  DIRETOR = 4,
}

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public nome_da_mae: string

  @column()
  public nome_do_pai: string

  @column()
  public observacoes: string

  @column()
  public contato_principal: string

  @column()
  public contato_secundario: string

  @column()
  public usuario: string

  @column()
  public tipo: EnumUserTipo

  @column()
  public password: string

  @column()
  public email: string

  @column()
  public endereco: string

  @column()
  public data_de_nascimento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
