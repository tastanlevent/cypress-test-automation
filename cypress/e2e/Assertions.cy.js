describe("Assertions demo", ()=>{
    it("Implicit assertions", ()=>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.url().should('include','v1')
        .and('eq','https://www.saucedemo.com/v1/index.html')
        .and('contain','index')
        .and('not.contain','levent')
        
        //istersek cy.url().should()
        //         cy.url().should()
        //         cy.url().should()
        //diyerek yazabiliriz. yada cy.url().should(blabla).should(blabla) diyerek. 
        //ama en okunaklı olanı cy.url().should(blabla).and(blabla).and(blabla)

    })
})