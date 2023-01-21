  /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


  describe('Empty First Name in the registration form', () => {
    it.skip('ID 2.1', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty1", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('span.error')
        .should('contain.text', "First name is required.")
    })
  });

  describe('A space was entered in the Name field in the registration form', () => {
    it.skip('ID 2.2', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName(" ")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty2", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field Name entered the word with a space in front', () => {
    it.skip('ID 2.3', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName(" Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty3", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field Name entered the word with a space in the middle', () => {
    it.skip('ID 2.4', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("De nis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty4", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form in the field Name entered the word with a space in the end', () => {
    it.skip('ID 2.5', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis  ")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty5", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, the numbers are entered in the Name field', () => {
    it.skip('ID 2.6', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("1234890")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty6", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, the special characters are entered in the Name field', () => {
    it.skip('ID 2.7', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("<&^):}~?")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty7", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, non-ASCII characters are entered in the Name field', () => {
    it.skip('ID 2.8', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("♣☺♂")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty8", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, in the Name field, symbols, numbers, letters and a space are entered', () => {
    it.skip('ID 2.9', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName(" 1.5-3!rt(>&'Q~c")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty9", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });

  describe('In the registration form, in the Name field, symbols, numbers, letters and a space are entered', () => {
    it.skip('ID 2.10', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Денис")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("Qwerty10", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('p.error')
        .should('contain.text', "An internal error has occurred and has been logged.")
    })
  });