export class ValidData {
    typeFirstName(firstName) {
        cy.get('input[id = "customer.firstName"]')
            .type(firstName)
    }

    typeLastName(lastName) {
        cy.get('input[id = "customer.lastName"]')
            .type(lastName)
    }

    typeAdress(adres) {
        cy.get('input[id = "customer.address.street"]')
            .type(adres)
    }

    typeCity(city) {
        cy.get('input[id = "customer.address.city"]')
            .type(city)
    }

    typeState(state) {
        cy.get('input[id = "customer.address.state"]')
            .type(state)
    }

    typeZipCode(zipCode) {
        cy.get('input[id = "customer.address.zipCode"]')
            .type(zipCode)
    }

    typePhone(phone) {
        cy.get('input[id = "customer.phoneNumber"]')
            .type(phone)
    }

    typeSSN(ssn) {
        cy.get('input[id = "customer.ssn"]')
            .type(ssn)
    }

    typeUserNameAndPassword(username, password, repeatedPassword) {
        cy.get('input[id = "customer.username"]')
            .type(username)
            .get('input[id = "customer.password"]')
            .type(password)
            .get('input[id = "repeatedPassword"]')
            .type(repeatedPassword)
    }
}

export const validData = new ValidData()