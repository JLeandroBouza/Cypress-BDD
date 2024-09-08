const {
    Given,
    When,
    Then,
  } = require("@badeball/cypress-cucumber-preprocessor");

  const { loginPage } = require("../../../pageObjects/LoginPage");
  
  Given("I am on the login page", function () {
    loginPage.visit();
  
    loginPage.validatePageLogin();
  });
  
  
  When(
    `I fill in my email and password with {string} and {string}`,
    function (username, password) {
      loginPage.login(username, password);
    }
  );

  Then("I should validate that I am logged in", function () {
    loginPage.validateSuccessLogin();
  });