
beforeEach(() => {
    cy.visit('https://testing.inkforall.com/tools')
});
describe('Visit Image Captains page, validate sample out,place holder,heading and validate text field.', function () {
    it('Visits text field on this page and validate the fields.', function () {
        cy.get('#item-1-dropdown').invoke('show');
        cy.contains('Image Captions').click();
        cy.url().should('eq', 'https://testing.inkforall.com/tools/twitter-image-caption/')
        cy.get('textarea') && cy.get('textarea').type('one two three', { force: true });
        cy.get('.formButton', { force: true }).click()
        cy.visit('https://testing.inkforall.com/tools/twitter-image-caption/?code=4ds34s-231sed2-123sde-32s2332')
        cy.wait(10000)
        cy.get('textarea') && cy.get('textarea').type('Too ', { force: true });
        cy.get('.formButton', { force: true }).click()
        cy.get('.MuiAlert-message').contains("More text required!").invoke('text').then((text) => {
            let toastText = text;
            expect(toastText).to.equal("More text required!");
        })
        cy.get('textarea') && cy.get('textarea').type('Too excited to put this one in writing but we’re doing a little shout out to our friends at Product Hunt who voted our product as their product of the month. We’re honored to be this month’s pick!', { force: true });
        cy.get('.formButton', { force: true }).click()
        cy.waitFor('.marketing-banner')
        cy.get('.marketing-banner > p').should('have.text', 'You got the perfect Twitter content. Now what?')
        cy.get('.resultHeader > p').should('have.text', 'RESULTS')
        cy.get('.Muibutton-label > .createText textCreate').should('have.text', 'Create More')

    })
})
