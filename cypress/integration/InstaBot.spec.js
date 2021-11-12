describe('Launch the insta bot', () => {
  beforeEach(() => {
    cy.VisitAndAcceptCookies()
    cy.ConnectToMyAccount()
  })

  it('likes 50 posts the home page', () => {
    cy.scrollTo(0, 500)
    cy.FindLikeButton(0)
  })
})