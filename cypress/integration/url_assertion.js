import '../fixtures/inkforall.json'
beforeEach(function () {
  cy.fixture('inkforall').then(function (data) {
    this.data = data;
    cy.visit(Cypress.env('inkforall-testing'))
    for (let i = 0; i < 30; i++) {
      console.log(this.data[i].buttonName)
      //cy.get('.nav-02__list--desktop > :nth-child(' + i + ')> .button > .button__text')
    }
  })
})
after(function () {
  cy.visit(Cypress.env('inkforall-testing'))
})



describe('InkForAll Test Cases.', function () {

  for (let a = 0; a < 5; a++) {
    it('Verify URL', function () {
      cy.url().should('eq', this.data[a].testurl)
      for (let b = 2; b < 4; b++) {
        cy.get('.nav-02__list--desktop > :nth-child(' + b + ') > .button > .button__text').click()

      }


    })


    //cy.get('.nav-02__list--desktop > :nth-child(' + i + ')> .button > .button__text')
  }
})
  //   //Header
  //   it('Verify HomePage url', function () {
  //     cy.url().should('eq', this.data[0].testurl)
  //   })

  // it('Redirect to AI Writing Tools ', function () {
  //   cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[2]/a[1]/span[1]').click()
  //   cy.url().should('contain', 'ink_visit_id').should('contain', 'session_id').should('contain', '/writing-tools')
  //   cy.get('h1').should('contain', "How INK can help you write faster")

  // })
  // it('Redirect to Resources ', function () {
  //   cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]/span[1]').click()
  //   cy.url().should('contain', 'ink_visit_id').should('contain', 'session_id').should('contain', 'questions-answers/')
  //   cy.get('h1').should('contain', "Live Questions & Answers")
  // })
  // it('Redirect to pricing ', function () {
  //   cy.xpath('//body/nav[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]/span[1]').click()
  //   cy.url().should('contain', 'ink_visit_id').should('contain', 'session_id').should('contain', '/pricing/')
  //   cy.get('h1').should('contain', "Write Content That Performs")

  // })

// })

