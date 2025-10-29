import Cadastro from '../pages/Cad'

describe('template spec', () => {
  //it('passes', () => {
    //cy.visit('teste.com.br/eu nao existp')
  //})

  it('preencher formulário', () => {
    cy.visit('/')
    Cadastro.cadastroform()

  })
})

