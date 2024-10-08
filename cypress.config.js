const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor")
const preprocessor = require ("@badeball/cypress-cucumber-preprocessor")


async function setupNodeEvents(on, config) {

  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config
}



module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature"
    
  },
});
