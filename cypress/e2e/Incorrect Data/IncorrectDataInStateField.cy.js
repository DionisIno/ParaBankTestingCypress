  /// <reference types = "Cypress" />
  import { validData } from "../../support/pages/validData";


describe ('Empty field in the name of the State in the registration form', () => {
    it ('ID 6.1', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN11', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'State is required');
    });
  });

  describe ('Empty field in the name of the State in the registration form', () => {
    it ('ID 6.2', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState (' ');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN2', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });

  describe ('In the State registration form, enter a word with a space in the front', () => {
    it ('ID 6.3', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('  Alaska');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN3', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });


  describe (' In the State registration form, enter a word with a space in the end', () => {
    it ('ID 6.4', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('Alaska   ');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN4', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });

  describe ('In the State registration form, enter the numbers', () => {
    it ('ID 6.5', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('12569');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN5', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });


  describe ('In the State registration form, enter the special characters', () => {
    it ('ID 6.6', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('<&$^');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN6', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });


  describe ('In the registration form, non-ASCII characters are entered in the State field', () => {
    it ('ID 6.7', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('♣☺');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN7', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });


  describe ('In the registration form, in the State field, symbols, numbers, letters and a space are entered', () => {
    it ('ID 6.8', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ("1.f%tB>&'Q~d");
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN8', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });


  describe ('In the registration form in the field State entered the word in Cyrillic', () => {
    it ('ID 6.9', () => {
      cy.visit ('https://parabank.parasoft.com/parabank/index.htm').wait (1000);
      cy.get ('[href^="register.htm"]').click ().wait (1000);
      validData.typeFirstName ('David');
      validData.typeLastName ('Smith');
      validData.typeAdress ('24486 Yukon Rd');
      validData.typeCity ('Kasilof');
      validData.typeState ('Канзас');
      validData.typeZipCode ('123456790');
      validData.typePhone ('18293816409');
      validData.typeSSN ('188051120');
      validData.typeUserNameAndPassword ('AslaN9', '84cAks%LpjbC', '84cAks%LpjbC');
      cy.get ('input[value="Register"]').click ();
      cy.get ('span[id="customer.address.state.errors"]')
        .should ('contain.text', 'An internal error has occurred and has been logged.');
    });
  });