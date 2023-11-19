import Aluno from 'App/Models/Aluno'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import errorResponse from 'App/helpers/errorResponse'
import dataResponse from 'App/helpers/dataResponse'

export default class ListarTodosAlunosController {
  public async call(context: HttpContextContract) {
    try {
      const alunos: Aluno[] = await Aluno.all()

      return dataResponse(context, 200, alunos)
    } catch (error) {
      return errorResponse(context, error)
    }
  }
}
