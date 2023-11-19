import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationError from 'App/helpers/ErroValidacao'

export const schemaAluno = schema.create({
  nome: schema.string(),
  email: schema.string(),
  data_de_nascimento: schema.string(),
  tipo: schema.enum([0, 1, 2, 3, 4]),
  usuario: schema.string(),
  password: schema.string(),
  endereco: schema.string(),
  contato_principal: schema.string(),
})

export async function validator({ request }: HttpContextContract) {
  try {
    await request.validate({ schema: schemaAluno })
  } catch (error: any) {
    throw new ValidationError(error.message)
  }
}
