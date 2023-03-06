describe('Testing routing functions', () => {
    it('Routing to UserDetailView after clicking in user detail settings', () => {
        cy.visit('/')
        cy.get('.UserDatas__NameData', { timeout: 10000 }).click()
        cy.get('#UserDetailsRedirecting').click()
        cy.url().should('include','/UserDetailsView')
    }),
    it("Routing to OfferDetailView after clicking in offer name", () => {
        cy.visit('/')
        cy.get(".JobOffer__MainDatas a", { timeout: 20000 }).eq(0).click()
        cy.url().should('include','/OfferDetails')
    })
})