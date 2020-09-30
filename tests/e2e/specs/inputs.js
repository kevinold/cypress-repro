// https://docs.cypress.io/api/introduction/api.html

describe('Checkbox', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('should have default value', () => {
    cy.get('ion-checkbox').find("input[type=hidden]").invoke('val').should("be.empty")

    cy.get('ion-checkbox').find('button').click();

    cy.get('ion-checkbox').find("input[type=hidden]").invoke('val').should("eq", "on")
  })
})
