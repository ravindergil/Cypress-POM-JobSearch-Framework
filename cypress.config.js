const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9v1mgk',
  retries: {
    runMode: 1,
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here  
      specPattern='cypress/e2e/testcases/*.js'
    },
  },
});
