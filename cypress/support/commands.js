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

Cypress.Commands.add('VisitAndAcceptCookies', () => {
  cy.visit('')
  cy.setCookie('ig_lang', 'en')
  cy.get('div[role=dialog] button').contains('Accept All').click()
  cy.wait(4000)
})

Cypress.Commands.add('ConnectToMyAccount', () => {
  cy.get('form#loginForm input[name=username]').type(Cypress.env('user'))
  cy.get('form#loginForm input[name=password]').type(Cypress.env('pwd'))
  cy.get('button[type="submit"]').click()
  cy.setCookie('ig_lang', 'en')
  cy.wait(4000)

  cy.get('button[type=button]').contains('Not Now').click()
  cy.wait(4000)

  cy.get('div[role=dialog] button').contains('Not Now').click()
  window.ResizeObserver = undefined
})

Cypress.Commands.add('LikePosts', (times) => {
  for(let x= 0 ; x <= times ; x++) {
    if(x <= 6) {
      cy.get('div > article[role=presentation]').eq(x)
        .children()
        .children().eq(2)
        .children()
        .children()
        .find('section').eq(0).children().eq(0).children().click()
    } else {
      cy.get('div > article[role=presentation]').eq(4)
      .children()
      .children().eq(2)
      .children()
      .children()
      .find('section').eq(0).children().eq(0).children().click()
    }

    cy.scrollTo(0, 1000)
  }
})
