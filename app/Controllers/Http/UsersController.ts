import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async listAllUsers(context: HttpContextContract): Promise<any> {
    try {
      const data: User[] = await User.all()

      return context.view.render('Usuario/listagemUsuarios', { data })
    } catch (error) {
      return context.view.render('errors/erroView', { error })
    }
  }
}
