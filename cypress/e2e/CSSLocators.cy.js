describe('Test User Input', () => {

    it("should enter a mail adress into a username box", ()=> {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
    })

    
})