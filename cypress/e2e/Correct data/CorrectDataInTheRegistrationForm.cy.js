  /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


  describe('Enter the correct data in the registration form with a Zip Code consisting of 9 numbers and a password consisting of 7 characters', () => {
    it('ID 1.1', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Brown")
      validData.typeAdress("4454 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345-6789")
      validData.typePhone("+18293816408")
      validData.typeSSN("078-05-1120")
      validData.typeUserNameAndPassword("qwerty", "CZ40${8", "CZ40${8")
      cy.get('input[value="Register"]').click()
      cy.get('.title ~ p')
        .should('contain.text', "Your account was created successfully.")
    })
  });

  describe('Enter the correct data in the registration form with a Zip Code consisting of 5 numbers and a password consisting of 16 characters', () => {
    it('ID 1.2', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("Denis")
      validData.typeLastName("Smith")
      validData.typeAdress("4412 Feathers Hooves Drive")
      validData.typeCity("Kansas City")
      validData.typeState("Kansas")
      validData.typeZipCode("12345")
      validData.typePhone("+18293816407")
      validData.typeSSN("178-05-1120")
      validData.typeUserNameAndPassword("Qwerty", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
      cy.get('input[value="Register"]').click()
      cy.get('.title ~ p')
        .should('contain.text', "Your account was created successfully.")
    })
  });

  describe('Enter the correct data in the registration form with a password consisting of 12 characters', () => {
    it('ID 1.3', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm').wait(1000)
      cy.get('[href^="register.htm"]').click().wait(1000)
      validData.typeFirstName("David")
      validData.typeLastName("Smith")
      validData.typeAdress("24486 Yukon Rd")
      validData.typeCity("Kasilof")
      validData.typeState("Alaska")
      validData.typeZipCode("12345-6790")
      validData.typePhone("+18293816409")
      validData.typeSSN("188-05-1120")
      validData.typeUserNameAndPassword("AslaN", "84cAks%LpjbC", "84cAks%LpjbC")
      cy.get('input[value="Register"]').click()
      cy.get('.title ~ p')
        .should('contain.text', "Your account was created successfully.")
    })
  });


describe ('Enter the correct data in the registration form with the city, using the names of the city with a dot and a space', () => {
  it ('ID 1.4', () => {
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
    cy.get ('[href^="register.htm"]').click ().wait (1000);
    validData.typeFirstName ('David');
    validData.typeLastName ('Smith');
    validData.typeAdress ('24486 Yukon Rd');
    validData.typeCity ('St. Louis');
    validData.typeState ('Missouri');
    validData.typeZipCode ('12345-6790');
    validData.typePhone ('+18293816409');
    validData.typeSSN ('188-05-1120');
    validData.typeUserNameAndPassword ('Lion', '84cAks%LpjbC', '84cAks%LpjbC');
    cy.get ('input[value="Register"]').click ();
    cy
      .get ('.title ~ p')
      .should ('contain.text', 'Your account was created successfully.');
  });
});
