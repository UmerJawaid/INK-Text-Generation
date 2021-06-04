console.log('hello')
before(function () {
  cy.fixture('sheetData').then(function (data) {
    this.data = data;
    cy.visit(Cypress.env('Local_env'))

  })
})