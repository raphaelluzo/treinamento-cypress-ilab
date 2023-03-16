// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit("https://app.ploomes.com/", {delay:50000})
    cy.get("#Username").type(email)
    cy.get("#Password").type(password)
    cy.get("#Bt_Login").click()
    cy.get(".jYWYCm .span").should("be.visible")
 })

import { faker } from '@faker-js/faker/locale/pt_BR';
Cypress.Commands.add('novocliente', () => { 
    // Bt Novo
    cy.get(".sc-papXJ").click()
    // Novo Cliente
    cy.get("button:nth-of-type(4)").click()
    // Campo Nome
    cy.get("[name='contact_name']").type(faker.name.fullName())
    // Campo Telefone
    cy.get("[ng-model='model.PhoneNumber']").type(faker.phone.number("219########"))
    // Campo Email
    cy.get("[name='contact_email']").type(faker.internet.email())
    // Campo Cargo
    cy.get("[api-url='Roles'] [placeholder]").type("Gerente", {delay:500}).type("{downArrow}").type("{enter}")
    // Clicar no bt salvar
    cy.get(".button-action").click()
    // Verificacao
    cy.contains(".single-user-badge > .light-badge > .text-darkest-neutral > .align-middle", "Raphael").should("be.visible")
 })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })