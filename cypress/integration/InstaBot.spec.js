describe('Launch the insta bot', () => {
  beforeEach(() => {
    window.ResizeObserver = undefined
    cy.VisitAndAcceptCookies()
    cy.ConnectToMyAccount()
  })

  it('likes 20 posts on Home Page', () => {
    cy.scrollTo(0, 500)
    cy.LikePosts(20)
  })
})