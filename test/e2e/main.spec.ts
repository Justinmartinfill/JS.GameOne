describe('main', () => {
  it('has a character', () => {
    cy.visit('http://localhost:1234')
    cy.get('[data-test="hero"]').should('exist')
    cy.get('body').trigger('keypress', { keycode: 72 })
    cy.get('[data-test="hero"]').should('have.css', 'top', '100px')
  })
})
