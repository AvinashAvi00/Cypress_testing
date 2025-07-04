describe('Dummy Cypress Test', () => {

  it('Visits example site and interacts', () => {
    // Visit a demo site
    cy.visit('https://example.cypress.io')

    // Check title
    cy.title().should('include', 'Cypress')

    // Click on the "type" link
    cy.contains('type').click()

    // Check if URL includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Type into an input box and assert the value
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })

})
