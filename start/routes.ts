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
import CriarAlunoController from 'App/Controllers/Http/Alunos/CriarAlunoController/CriarAlunoController'
import ListarTodosAlunosController from 'App/Controllers/Http/Alunos/ListagemAlunosController/ListarTodosAlunosController'

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('Usuario/criarUsuario')
  })

  // Alunos
  Route.get('/alunos', new ListarTodosAlunosController().call)
  Route.post('/alunos', new CriarAlunoController().call)
})
