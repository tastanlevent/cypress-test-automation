describe('Login to Amazon',()=>{
    it("go to home", ()=>{
        cy.visit("https://www.amazon.com")
        cy.get('.a-button-input[data-action-type="DISMISS"]').click();
        cy.get('#nav-link-accountList').trigger('mouseover');
        cy.get('#nav-flyout-ya-signin').click()
       
        cy.fixture('static_data.json').then((data) => {
            const email = data.email_amazon;
            cy.get('#ap_email').type(email);
          });
    
        cy.get(".a-button.a-button-span12.a-button-primary").click()

        cy.fixture('static_data.json').then((data)=>{
            const password = data.password_amazon
            cy.get('#ap_password').type(password)
        })

        cy.get("#signInSubmit").click()
        cy.url().should('eq','https://www.amazon.com/?ref_=nav_signin')
    })
}) 