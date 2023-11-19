import Aluno from 'App/Models/Aluno'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import errorResponse from 'App/helpers/errorResponse'
import { schemaAluno } from './validacao'
import dataResponse from 'App/helpers/dataResponse'

export default class CriarAlunoController {
  public async call(context: HttpContextContract) {
    try {
      const data = await context.request.validate({ schema: schemaAluno })
      const aluno: Aluno = await Aluno.create(data)

      return dataResponse(context, 200, aluno)
    } catch (error) {
      console.log('LOUD', error)
      return errorResponse(context, error)
    }
  }
}
