class Cadastro{ 

    cadastroform() {                        
        cy.visit('/')
         //validar titulo
         cy.get('[style="font-family:georgia,palatino,book antiqua,palatino linotype,serif;"] > .wixui-rich-text__text')
         .should('have.text' , 'Faça seu Cadastro')

         //preencher campos
         cy.get('#input_comp-julaffzj')
         .type('Ana', {delay: 70}) //delay é para digitar devagar. 70 milisegundos.

         cy.get('#input_comp-julafg6w')
         .type('apcs@outlook.com', {delay: 70})

         cy.get('#input_comp-julafg72')
         .type('1199345-6789', {delay: 70})

         cy.get('#input_comp-julao4rw')
         .type('26127-380', {delay: 70})

         cy.get('#input_comp-julakw0e')
         .type('teste de endereço', {delay: 70})

         cy.get('#textarea_comp-julalkyh')
         .type('teste teste teste', {delay: 70})

         cy.get('[data-testid="input"]')
         .click()

         cy.wait(1000)
        
         cy.get('[data-testid="buttonElement"]')
         .click()

         cy.get('[class="wixui-rich-text__text"]')
         .contains('Cadastro feito com sucesso!')


         cy.wait(2000) //espera fde 5 segundos
         

    }

}
export default new Cadastro