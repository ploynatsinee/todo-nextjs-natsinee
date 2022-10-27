const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://web:3000",
    // baseUrl: "http://localhost:3000", // for local development
    // smtpServer: "http://0.0.0.0:1080/", //not working
    smtpServer: "http://smtp-server:1080/",
    smtpPort: 1025,
    specPattern: [
      "cypress/e2e/signup-validate.cy.ts",
      "cypress/e2e/signin-validate.cy.ts",
      "cypress/e2e/notcomfirm.cy.ts",
      "cypress/e2e/spec.cy.ts",
      "cypress/e2e/email.cy.ts",
      "cypress/e2e/signin.cy.ts",
      "cypress/e2e/signout.cy.ts"
    ],
  },
  // output: {
  //   filename: "index.js",
  // },
  // module: {
  //   rules: [{ test: /\.txt$/, use: "raw-loader" }],
  // },
  mode: "production",
});