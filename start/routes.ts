/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import CriarUsuarioController from 'App/Controllers/Http/Usuario/CriarUsuarioController/CriarUsuarioController'
// import ListarTodosUsuariosController from 'App/Controllers/Http/Usuario/ListagemUsuariosController/ListagemUsuariosController'

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('login')
  })

  // Usuarios
  Route.get('/usuarios', 'UserController.listAllUsers').as('list.users').middleware('auth')

  // Route.post('/usuarios', new CriarUsuarioController().call)
  Route.get('/register', 'AuthController.registerShow').as('auth.register.show')
  Route.post('/register', 'AuthController.register').as('auth.register')
  Route.get('/login', 'AuthController.loginShow').as('auth.login.show')
  Route.post('/login', 'AuthController.login').as('auth.login')
  Route.get('/logout', 'AuthController.logout').as('auth.logout')
})
