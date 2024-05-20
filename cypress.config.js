const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ksufry',
  

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
