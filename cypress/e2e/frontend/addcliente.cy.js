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
            cy.get(".sc-papXJ").click()
            cy.get("button:nth-of-type(4)").click()
            // Campo Nome
            cy.get("[name='contact_name']").type("Raphael Teste 2")
            // Campo Telefone
            cy.get("[ng-model='model.PhoneNumber']").type(2199999999990)
            // Campo Email
            cy.get("[name='contact_email']").type("teste@teste.com")
            // Campo Cargo
            cy.get("[api-url='Roles'] [placeholder]").type("Gerente", {delay:500}).type("{downArrow}").type("{enter}")
            // Clicar no bt salvar
            cy.get(".button-action").click()
            // Verificacao
            cy.contains(".font-very-big", "Teste").should("be.visible")
        })
      })
    