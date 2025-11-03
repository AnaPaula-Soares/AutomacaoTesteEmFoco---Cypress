# 🧪 Automação de Testes E2E com Cypress - Projeto TesteFoco

## 🎯 Visão Geral do Projeto

Este projeto é um portfólio de automação de testes End-to-End (E2E) desenvolvido com **Cypress**, focado em demonstrar a aplicação de boas práticas de desenvolvimento de testes, como o padrão **Page Object Model (POM)**. O objetivo principal é garantir a qualidade e a funcionalidade de um fluxo de cadastro (CAD) em uma aplicação web.

O projeto foi estruturado para ser um *showcase* de habilidades em automação, cobrindo desde a configuração do ambiente até a execução e manutenção dos testes.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **Cypress** | `^14.4.1` | Framework de testes E2E moderno e rápido. |
| **JavaScript** | ES6+ | Linguagem de programação principal para escrita dos testes. |
| **Node.js** | - | Ambiente de execução para o Cypress e gerenciamento de pacotes. |
| **Page Object Model (POM)** | - | Padrão de design para organização e manutenção do código de teste. |

## ⚙️ Estrutura do Projeto

A organização do projeto segue a convenção do Cypress, com a adição de uma camada de abstração para o Page Object Model:

```
cypress-project/
├── cypress/
│   ├── e2e/             # Arquivos de especificação dos testes (Test Specs)
│   │   └── Cad.cy.js    # Teste de fluxo de Cadastro
│   ├── fixtures/        # Dados estáticos externos (ex: massas de teste)
│   │   └── example.json
│   ├── pages/           # Implementação do Page Object Model (POM)
│   │   └── Cad.js       # Page Object para a tela de Cadastro
│   └── support/         # Comandos customizados e configurações globais
│       ├── commands.js
│       └── e2e.js
├── node_modules/        # Dependências do projeto
├── package.json         # Metadados e scripts do projeto
└── README_PORTFOLIO.md  # Este arquivo
```

## 💡 Padrão de Design: Page Object Model (POM)

O projeto adota o **Page Object Model (POM)** para:

1.  **Reutilização de Código:** Centralizar os seletores e métodos de interação com a página em classes dedicadas (`Cad.js`).
2.  **Manutenção Simplificada:** Alterações na interface do usuário (UI) exigem modificações apenas no arquivo do Page Object, sem impactar a lógica do teste (`Cad.cy.js`).
3.  **Legibilidade:** Os testes se tornam mais limpos e focados na lógica de negócio, utilizando métodos de alto nível (ex: `cadastroPage.preencherFormulario()`).

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar os testes em sua máquina local.

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/AnaPaula-Soares/AutomacaoTesteEmFoco---Cypress.git
    cd AutomacaoTesteEmFoco---Cypress
    ```

2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Execução dos Testes

O Cypress oferece duas formas principais de execução: via interface gráfica (Test Runner) e via linha de comando (Headless).

#### 1. Execução via Test Runner (Interface Gráfica)

Este método é ideal para desenvolvimento e *debugging*.

```bash
npm run cypress:open
```

Ao executar o comando, o Test Runner do Cypress será aberto. Selecione o arquivo `Cad.cy.js` para iniciar a execução interativa.

#### 2. Execução via Linha de Comando (Headless)

Este método é recomendado para integração contínua (CI) e execução rápida.

O script padrão de execução via linha de comando pode ser adicionado ao `package.json` para facilitar:

```json
"scripts": {
  "test": "cypress run"
}
```

Com o script acima, você pode executar:

```bash
npm test
```

## 📈 Resultados e Relatórios

Após a execução dos testes, o Cypress gera artefatos importantes:

*   **Screenshots:** Capturas de tela são salvas automaticamente em `cypress/screenshots/` em caso de falha no teste.
*   **Vídeos:** Um vídeo da execução do teste é gravado por padrão e salvo em `cypress/videos/`.

Estes artefatos são cruciais para a análise de falhas e para a comprovação da execução dos testes.

## ✍️ Contribuição

Sinta-se à vontade para fazer *fork* deste projeto, sugerir melhorias ou adicionar novos cenários de teste.

1.  Faça o *fork* do projeto.
2.  Crie uma *branch* para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3.  Faça o *commit* de suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`).
4.  Faça o *push* para a *branch* (`git push origin feature/nova-funcionalidade`).
5.  Abra um *Pull Request*.

## 🧑‍💻 Autor

**Ana Paula Soares**

*   GitHub https://github.com/AnaPaula-Soares
*   LinkedIn (https://www.linkedin.com/in/anapaulacostasoares/

---






Este README foi gerado para fins de portfólio, destacando as melhores práticas de automação de testes.

