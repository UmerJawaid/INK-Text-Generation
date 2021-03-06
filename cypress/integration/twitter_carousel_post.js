before(function () {
  cy.fixture('sheetData').then(function (data) {
    this.data = data;
    cy.visit(Cypress.env('Local_env'))

  })
})

describe('Test twitter image caption page.', function () {
  it('Select page and assert url', function () {
    cy.get('#item-1-dropdown').invoke('show');
    cy.contains('Carousel Post').click();
    cy.url().should('eq', Cypress.env('Local_env') + '/' + this.data[3].url + '/')
  })
  it('Verify Tool Name', function () {
    cy.get('.formHeader > .title').should('have.text', this.data[3].toolName)
  })

  it('Verify Sub-title', function () {
    cy.get('.formHeader > .subtitle').should('have.text', this.data[3].introtext)
  })

  it('Verify I1-Label', function () {
    cy.get('.inputTitle').should('have.text', this.data[3].i1label)
  })

  it('Verify I1-placeholder', function () {
    cy.get('.MuiInputBase-inputMultiline').should('have.text', this.data[3].i1sampletext)
  })

  it('Verify Sample Output-title', function () {
    cy.get('.resultHeader + .title').should('have.text', "Sample Output")
  })

  it('Verify Sample Output', function () {
    cy.get('.description').should('have.text', this.data[3].sampleoutput)
  })


  it('Visits text field on this page and validate the fields.', function () {
    cy.get('textarea') && cy.get('textarea').type(this.data[3].introtext, { force: true });
    cy.get('.formButton', { force: true }).click()
  })

  it('Visit the page with user id', function () {
    cy.visit('Test_env' + '/tools/twitter-carousel-post/?code=4ds34s-231sed2-123sde-32s2332')
    cy.get('.diamondPlusAddBtn').should('be.visible')
    cy.get('textarea') && cy.get('textarea').type('Too ', { force: true });
    cy.get('.formButton', { force: true }).click()
    cy.get('.MuiAlert-message').contains("More text required!").invoke('text').then((text) => {
      let toastText = text;
      expect(toastText).to.equal("More text required!");
      cy.get('textarea') && cy.get('textarea').type('Too excited to put this one in writing but we’re doing a little shout out to our friends at Product Hunt who voted our product as their product of the month. We’re honored to be this month’s pick!', { force: true });
      cy.get('.formButton', { force: true }).click()
      cy.waitFor('.marketing-banner')
      cy.get('.marketing-banner > p').should('have.text', 'You got the perfect Twitter content. Now what?')
      cy.saveLocalStorage();

    })


  })

  it('Verify result title', function () {
    cy.restoreLocalStorage();
    cy.get('.resultHeader > p').should('have.text', 'RESULTS')
  })
  it('Verify copy resuylt functionality', function () {
    cy.get('.shareDiv').eq(0).children().eq(2).click()
    cy.get('.MuiAlert-message').contains("Text copied successfully!").invoke('text').then((text) => {
      let toastText = text;
      expect(toastText).to.equal("Text copied successfully!");
    })
  })
  it('Verify Share Modal', function () {
    cy.get('.shareDiv').eq(0).children().eq(0).click()
    cy.get('#scroll-dialog-title').should('have.text', 'Share Result')
    cy.get('#scroll-dialog-title').type('{esc}')
  })
  it('Verify save result button', function () {
    cy.restoreLocalStorage();
    cy.get('.shareDiv').eq(0).children().eq(1).click()
  })

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
