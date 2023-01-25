    /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


  describe('Empty Last Name in the registration form', () => {
    it('ID 3.1', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider1", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "Last name is required.")
    })
  });

  describe('A space was entered in the Last Name field in the registration form', () => {
    it('ID 3.2', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName(" ")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider2", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Last Name registration form, enter a word with a space in front ', () => {
    it('ID 3.3', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName(" Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider3", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Last Name registration form, enter a word with a space in the middle', () => {
    it('ID 3.4', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Sm ith")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider4", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Last Name registration form, enter a word with a space in the end', () => {
    it('ID 3.5', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown  ")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider5", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Last Name registration form, enter the numbers', () => {
    it('ID 3.6', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("1234891")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider6", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Last Name registration form, enter the special characters', () => {
    it('ID 3.7', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("<&^):(}~?")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider7", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, non-ASCII characters are entered in the Last Name field', () => {
    it('ID 3.8', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("♣☺♂")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider8", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, in the Last Name field, symbols, numbers, letters and a space are entered', () => {
    it('ID 3.9', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName(" 1.5-3!rt(>&'Q~d")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider9", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field Last Name entered the word in Cyrillic', () => {
    it('ID 2.10', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Смит")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Spider10", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.lastName.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });
