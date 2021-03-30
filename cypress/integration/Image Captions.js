
beforeEach(() => {
    cy.visit("https://testing.inkforall.com/tools", {
        onLoad: (contextwin) => {
            var b = document.getElementsByTagName('button')
            for (let i = 0; i < b.length; i++) {
                b[i].id = `ink_button_${i}`;
            }
            var t = document.getElementsByTagName('textarea')
            for (let i = 0; i < b.length; i++) {
                b[i].id = `ink_textarea_${i}`;
            }
        }
    });
});
describe('Visit Image Captains page, validate sample out,place holder,heading and validate text field.', function () {
    it('Visits text field on this page and validate the fields.', function () {
        cy.get('#item-1-dropdown').invoke('show');
        cy.contains('Image Captions').click();
        cy.url().should('eq', 'https://testing.inkforall.com/tools/twitter-image-caption/');
        cy.get('textarea') && cy.get('textarea').type('one two three', { force: true });
        cy.get('.formButton',{force:true}).click()
        cy.get('.googleButton').click()
    })
})