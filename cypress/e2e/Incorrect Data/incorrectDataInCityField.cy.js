  /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


  describe('Empty field in the name of the City in the registration form', () => {
    it('ID 5.1', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron01", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "City is required.")
    })
  });

  describe('A space is entered in the CITY field in the registration form', () => {
    it('ID 5.2', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity(" ")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron2", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Сity registration form, enter a word with a space in the front', () => {
    it('ID 5.3', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity(" Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron3", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Сity registration form, enter a word with a space in the end', () => {
    it('ID 5.4', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City  ")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron4", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Сity registration form, enter the numbers', () => {
    it('ID 5.5', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("12569")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron5", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Сity registration form, enter the special characters', () => {
    it('ID 5.6', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("<&^")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron6", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe(' In the registration form, non-ASCII characters are entered in the City field', () => {
    it('ID 5.7', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("♣☺")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron7", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, in the City field, symbols, numbers, letters and a space are entered', () => {
    it('ID 5.8', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity(" 1.5tB>&'Q~d")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron8", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('sspan[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field City entered the word in Cyrillic', () => {
    it('ID 3.9', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Нью Йорк")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Iron9", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.city.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });