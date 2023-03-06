describe('Testing searching filters and results from backend', () => {
    it("Testing if first offer from backend's result contains words Senior when senior experience level is clicked", () => {
        cy.visit("/")
        cy.get(".JobOffer__MainDatas a", { timeout: 20000 }).eq(0)
        cy.get(".ExperienceLevel input").eq(3).click()
        cy.get("#SearchFiltersConfirm").click()
    }),
    it("Testing if first offer from backend's result contains words Senior and developer", () => {
        cy.visit("/")
        cy.get(".JobOffer__MainDatas a", { timeout: 20000 }).eq(0)
        cy.get(".ExperienceLevel input").eq(3).click()
        cy.get(".SearchFields__JobSearch input").type("Backend Developer")
        cy.get("#SearchFiltersConfirm").click()
        cy.get(".JobOffer__MainDatas a",).eq(1)
        .contains("Senior").contains("Developer")
    })
})