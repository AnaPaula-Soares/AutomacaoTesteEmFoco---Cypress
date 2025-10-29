const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://cursotesteemfoco.wixsite.com/testeemfoco/automacaocomia',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
