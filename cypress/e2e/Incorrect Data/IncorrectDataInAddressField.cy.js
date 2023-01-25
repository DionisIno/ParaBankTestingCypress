    /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


  describe('Empty Address in the registration form', () => {
    it('ID 4.1', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor1", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "Address is required.")
    })
  });

  describe('A space was entered in the Address field in the registration form', () => {
    it('ID 4.2', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress(" ")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor2", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Address registration form, enter a word with a space in front', () => {
    it('ID 4.3', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress(" 4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor3", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Address registration form, enter a word with a space in the end', () => {
    it('ID 4.4', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive  ")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor4", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Address registration form, enter the numbers', () => {
    it('ID 4.5', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("12345891")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor5", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the Address registration form, enter the special characters', () => {
    it('ID 4.6', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("<&^):(}~?")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor6", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, non-ASCII characters are entered in the Address field', () => {
    it('ID 4.7', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("♣☺♂")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor7", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, in the Address field, symbols, numbers, letters and a space are entered', () => {
    it('ID 4.8', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress(" 1.5-3!rt(>&'Q~d")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor8", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field Address entered the word in Arabic', () => {
    it('ID 4.9', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("محرك حوافر الريش4412")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("18293816407")
      validData.typeSSN("078051120")
      validData.typeUserNameAndPassword("Tor9", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('span[id="customer.address.street.errors"]')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });
