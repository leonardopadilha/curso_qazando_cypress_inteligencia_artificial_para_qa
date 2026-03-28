module.exports = {
  e2e: {
    //baseUrl: 'http://localhost:3000',
    allowCypressEnv: false, // Desabilitar acesso inseguro a Cypress.env()
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportDir: 'mochawesome-report',
      reportFilename: 'mochawesome',
      reportTitle: 'Cypress Test Report - Web Automation',
      overwrite: true,
      html: true,
      json: true,
      timestamp: 'longDate',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    setupNodeEvents(on, config) {
      // Importar plugin do reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
