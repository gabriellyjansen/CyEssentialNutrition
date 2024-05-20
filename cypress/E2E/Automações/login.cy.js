describe('Testes página de login.', () => {
  

   beforeEach(() => {Cypress.on('uncaught:exception', function (err, runnable) {
        return false;
      });

    })

    it.only('Login e-mail cliente final', () => {
      
        cy.loginCF()
        cy.url().should('be.equal', BASEURL)
        
    })

    it('Login CF com dados válidos CPF', () => {
      
      cy.visit(Cypress.env('baseURL'))
  
      cy.get('#email')
        .click({force: true}, {multiple: true})
        .type(Cypress.env('CPF'))

      cy.get('#login-form > .password > .control > #pass')
        .click({force: true})
        .type(Cypress.env('senhaCF'))

      cy.get('#account-login')
        .click({force: true})
     })

  it('Login com e-mail inexistente', () => {
      
    cy.visit(Cypress.env('baseURL'))
       
    cy.get('#email')
      .click({force: true}, {multiple: true})
      .type(Cypress.env('emailInvalido'))

    cy.get('#login-form > .password > .control > #pass')          
      .click({force: true})
      .type(Cypress.env('senhaCF'))

    cy.get('#account-login')
      .click({force: true})      

    cy.contains('Login e/ou senha inválida.')
      .should('be.visible')

  })
  

  it('Login com e-mail invalido', () => {
      
    cy.visit(Cypress.env('baseURL'))
    
    cy.get('#email')
      .click({force: true}, {multiple: true})
      .type('emailinvalidoteste')

    cy.get('#login-form > .password > .control > #pass')  
      .click({force: true})
      .type(Cypress.env('senhaCF'))

    cy.get('#account-login')
      .click({force: true})

    cy.contains('Informe um e-mail ou CPF válido.')
      .should('be.visible')
  })


  it('Login Pro Member', () => {

    cy.loginPM()

    cy.url()
      .should('include', 'promember.essentialnutrition')

  })

  it('Login Colaborador', () => {

    cy.loginCB()

    cy.url()
      .should('include', 'eusouessentia.essentialnutrition')

  })

})