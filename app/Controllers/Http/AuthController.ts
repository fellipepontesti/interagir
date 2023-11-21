import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async registerShow({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async register({ request, response, auth, view }: HttpContextContract) {
    const schemaUser = schema.create({
      nome: schema.string({ trim: true }),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({
          table: 'users',
          column: 'email',
        }),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
      data_de_nascimento: schema.string({}, [rules.maxLength(10)]),
      tipo: schema.enum(['0', '1', '2', '3', '4']),
      endereco: schema.string(),
      contato_principal: schema.string(),
    })

    try {
      await request.validate({ schema: schemaUser })
      const input = request.body()
      input.tipo = parseInt(input.tipo)
      const user = await User.create(input)

      await auth.login(user)

      const data = await User.all()
      return view.render('Usuario/listagemUsuarios', { data })
    } catch (error) {
      return view.render('errors/erroView', { error })
    }
  }

  public async loginShow({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    // adicionar o remember me link: https://docs.adonisjs.com/guides/auth/web-guard

    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.attempt(email, password)
      response.status(200).json({ success: true })
    } catch (error) {
      session.flash('form', 'Dados incorretos')
      response.redirect().back()
    }
  }

  public async logout({ response, auth, view }: HttpContextContract) {
    await auth.logout()

    return view.render('auth/login')
  }
}
