/// <reference types='cypress'/>

it('Implicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    expect('text').to.eq('text')
  
    cy.get('.assertion-table tr').eq(3).should('have.class', 'success');
  
  
  })