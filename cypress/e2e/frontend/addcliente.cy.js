///<reference types="Cypress" />

      // Codigo padrao enviado no chat.
      describe('Fluxo de Cliente', () => {
        beforeEach(() => {
            cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
            cy.fixture("example").then(exemplo => {
                cy.login(exemplo.email, exemplo.password) 
            })
        })
        it('Adicionar cliente', () => {
            cy.novocliente()
        })
      })
    