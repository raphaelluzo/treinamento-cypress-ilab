///<reference types="Cypress" />
      // Codigo padrao enviado no chat.
describe('Fluxo de Login', () => {
    beforeEach(() => {
    })
    it('Logar no sistema', () => {
        cy.fixture("example").then(exemplo => {
            cy.login(exemplo.email, exemplo.password) 
        })
    })
  })

