// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import errorResponse from 'App/helpers/errorResponse'
// import { schemaUsuario } from './validacao'
// import dataResponse from 'App/helpers/dataResponse'

// export default class CriarUsuarioController {
//   public async call(context: HttpContextContract) {
//     try {
//       await context.request.validate({ schema: schemaUsuario })
//       const data = context.request.body()
//       data.tipo = parseInt(data.tipo as string)
//       delete data.confirmarSenha
//       const aluno: Usuario = await Usuario.create(data)

//       return dataResponse(context, 200, aluno)
//     } catch (error) {
//       console.log('----> LOUD', error)
//       return errorResponse(context, error)
//     }
//   }
// }
