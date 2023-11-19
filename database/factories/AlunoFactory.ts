import Aluno from 'App/Models/Aluno'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Aluno, ({ faker }) => {
  return {
    nome: faker.person.fullName(),
    nome_da_mae: faker.person.fullName(),
    nome_do_pai: faker.person.fullName(),
    observacoes: faker.lorem.lines(),
    password: faker.internet.password(),
    usuario: faker.internet.userName(),
    contato_principal: faker.phone.number(),
    contato_secundario: faker.phone.number(),
    data_de_nascimento: faker.date.birthdate().toString(),
    endereco: faker.lorem.lines(),
  }
}).build()
