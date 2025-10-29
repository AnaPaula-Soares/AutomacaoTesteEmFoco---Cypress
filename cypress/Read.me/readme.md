Passo a passo para criar um SETUP de instalação e utilização do CYPRESS.
Comando de instalação e de inicio da IDE do Cypress


1 -  Instalar Node.JS
https://nodejs.org/pt/download
Marcar instalação automatica das pastas - phyton e chocolate.

2 - Validar instalação > abrir CMD e digitar - ver versôes instaladas.
node -v e npm -v


3 - baixar o VS Code - editor de código. Pode ser a IA TRAE também.


4 - Criar pasta na raiz do computador C:
Nome do projeto

5 - Instalar Cypress
saber as versões do cypress  npm show cypress versions --json
Acessa a pasta do projeto no editor de código conforme abaixo. Iniciar o npm:
C:\PastadoProjeto > npm init -y

Após iniciar npm, instalar cypress
C:\PastadoProjeto > npm install cypress@14.0.1 --save-dev   

[serve para registrar o pacote(cypress) como uma dependência de desenvolvimento no arquivo package.json do seu projeto. 
Isso significa que o Cypress é necessário apenas para o desenvolvimento e testes do projeto,
 mas não para a execução da aplicação em produção.    ]



6 - Abrir a pasta do projeto no editor de codigo - acessar o package.json e inserir  o comando: < "cypress:open": "cypress open", > dentro da sessão Scripts,
assim:

 "scripts": {
    "cypress:open": "cypress open",
    "test": "echo \"Error: no test specified\" && exit 1"
    
  },




7 - Criar pasta Pages na raiz da pasta Cypress
  7.1 - Criar o arquivo nomedafuncionalidade.js

OBS.: se o a pasta CYPRESS nao for criada, pode-se digitar o comando npx cypress open, forçando ele a abrir e criar a pasta. Depois feche tudo e recomece.



8 - ir no terminal e digitar "npx cypress open" para abrir o Test Runner do cypress

Continue > E2E Testing> > Selecionar Browser > Start > Clicar em Specs no menu > clicar em Criar Specs e nomear o arquivo Cy, exemplo:
"cadastro.cy.js"  continuar.. 
É criada automaticamente a pasta E2E com o arquivo de acesso a aplicação no formato informado acima,



9 - ir no arquivo cypress.config.js e inserir a URL da aplicacão, assim:

module.exports = defineConfig{
  e2e: {
    baseUrl: 'https://cursotesteemfoco.wixsite.com/testeemfoco/automacaocomia',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
}




10 -  Ir no e2e > no arquivo .cy.js e deixar p describe dessa forma:
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/') // Aqui, o visit vai na baseURL informada no config.js
  })
})
