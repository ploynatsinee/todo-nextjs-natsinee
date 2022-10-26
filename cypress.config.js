const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://web:3000",
    specPattern: [
      "cypress/e2e/spec.cy.ts",
      "cypress/e2e/email.cy.ts"
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