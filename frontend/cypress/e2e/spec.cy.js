describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173')
    // cy.contains('Go').click()
    cy.get('div#center').within(() => {
        cy.get('input#jeff').clear();
        cy.get('input#jeff').type("zero");
        cy.get('p#p').contains("hola");
        cy.get("button#butt").click();
    });
    
  })
})