
      Cypress.Commands.add('loginCF', () => {

            cy.visit(Cypress.env('baseURL'))

            cy.contains('Já tenho cadastro')
                  .should('be.visible')
      
            cy.get('#email')
                 .click({force: true})
                 .type(Cypress.env('emailCF'))

            cy.get('#login-form > .password > .control > #pass')          
                  .click({force: true})
                  .type(Cypress.env('senhaCF'))
                  
            cy.get('#account-login')
                  .click({force: true})      

      })

      Cypress.Commands.add('loginPM', () => {

            cy.visit(Cypress.env('baseURL'))
                  
            cy.get('#email')
                  .click({force: true})
                  .type(Cypress.env('emailPM'))
      
            cy.get('#login-form > .password > .control > #pass')          
                  .click({force: true})
                  .type(Cypress.env('senhaPM'))
      
            cy.get('#account-login')
                  .click({force: true})      
      
       })

       Cypress.Commands.add('loginCB', () => {

            cy.visit(Cypress.env('baseURL'))
                  
            cy.get('#email')
                  .click({force: true})
                  .type(Cypress.env('emailCB'))
      
            cy.get('#login-form > .password > .control > #pass')          
                  .click({force: true})
                  .type(Cypress.env('senhaCB'))
      
            cy.get('#account-login')
                  .click({force: true})
      
       })
      
