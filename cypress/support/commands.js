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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

Cypress.Commands.add('AcceptCookies', () => {
  cy.get('div[role=dialog] button').contains('Accept All').click()
})

Cypress.Commands.add('ConnectToMyAccount', () => {
  cy.get('form#loginForm input[name=username]').type(Cypress.env('user'))
  cy.get('form#loginForm input[name=password]').type(Cypress.env('pwd'))
  cy.get('button[type="submit"]').click()
})
