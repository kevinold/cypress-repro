// https://docs.cypress.io/api/introduction/api.html

describe('Checkbox', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('should have default value', () => {
    cy.get('ion-checkbox').its('checked').should('equal', false)

    cy.get('#set').click();

    cy.get('ion-checkbox').its('checked').should('equal', true)
  })
})
