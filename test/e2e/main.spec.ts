describe('main', () => {
  it('has a character', () => {
    cy.visit('http://localhost:1234')
    cy.get('[data-test="hero"]').should('exist')
    cy.get('[data-test="hero"]').click()
    cy.get('[data-test="hero"]').should('have.css', 'left', '100px')
  })
})
