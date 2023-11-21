import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export enum EnumTypeUser {
  ROOT = 0,
  ALUNO = 1,
  PROFESSOR = 2,
  COORDENADOR = 3,
  DIRETOR = 4,
}

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

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
  public tipo: EnumTypeUser

  @column()
  public endereco: string

  @column()
  public data_de_nascimento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
