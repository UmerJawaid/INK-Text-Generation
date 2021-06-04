import '../fixtures/inkforall.json'
before(function () {
  cy.fixture('inkforall').then(function (data) {
    this.data = data;
    cy.visit(Cypress.env('inkforall-testing'))
  })
})
afterEach(function(){
  cy.visit(Cypress.env('inkforall-testing'))
})

describe('InkForAll Test Cases.', function () {
  //Header Button
  it('Select page and assert url', function () {
    cy.url().should('eq', this.data[0].testurl)
  })
  it('Redirect to AI Writing Tools ', function () {
    cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]/span[1]').click()
    cy.url().should('contain', 'ink_visit_id').should('contain','session_id').should('contain','/writing-tools')
    cy.find('h4').should('contain',"Your Content on Google's 1st Page.")
  })
  it('Redirect to Resources ', function () {
    cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]/span[1]').click()
    cy.url().should('contain', 'ink_visit_id').should('contain','session_id').should('contain','questions-answers/')
  })
    it('Redirect to pricing ', function () {
    cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]/span[1]').click()
    cy.url().should('contain', 'ink_visit_id').should('contain','session_id').should('contain','questions-answers/')
  })

})