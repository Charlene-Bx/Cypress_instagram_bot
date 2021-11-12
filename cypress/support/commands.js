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
  cy.get('div[role=dialog] button').contains('Accept All').click().click()
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
  cy.wait(4000)
})

Cypress.Commands.add('FindLikeButton', (index) => {
  cy.get('svg')
    .then($svg => {
      console.log('$svg:', Object.values($svg))
      const allLikes = $svg.filter(el => {
        const reactObject = {...el}
        const reactHandlerKey = Object.keys(reactObject).filter( item =>
          item.indexOf('__reactEventHandlers')>=0
        )
        const reactHandler= reactObject[reactHandlerKey[0]]

        console.log('test', reactHandler?['aria-label'] === "Like" : false)
        return reactHandler?['aria-label'] === "Like" : false
      });
      console.log(allLikes)
    })
})
