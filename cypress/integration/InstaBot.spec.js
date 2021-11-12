describe('Launch the insta bot', () => {
  beforeEach(() => {
    cy.visit('https://www.instagram.com/')
    cy.AcceptCookies()
    cy.ConnectToMyAccount()
  })

  it('likes 50 posts the home page', () => {
  })
})