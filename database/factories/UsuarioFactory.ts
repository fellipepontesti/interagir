import Usuario from 'App/Models/Usuario'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Usuario, ({ faker }) => {
  return {
    nome: faker.person.fullName(),
    nome_da_mae: faker.person.fullName(),
    nome_do_pai: faker.person.fullName(),
    observacoes: faker.lorem.lines(),
    senha: faker.internet.password(),
    email: faker.internet.email(),
    contato_principal: faker.phone.number(),
    contato_secundario: faker.phone.number(),
    data_de_nascimento: faker.date.birthdate().toString(),
    endereco: faker.lorem.lines(),
  }
}).build()
