describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173')
    cy.contains('Go').click()
  })
})