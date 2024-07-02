describe('Login Test practice',()=>{
    it('verify login with given positive and negative cases',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('input[name="username"]').type('student');
        cy.get('#password').eq(0).type("password123")
        cy.get('.btn').click()
        cy.url().should('include',"practicetestautomation.com/logged-in-successfully//")
        cy.get('strong').should('have.text','congragulations student you successfully logged in!')
        cy.get('a[href*="https://practicetestautomation.com/practice"]').should('be.visible')
    
        
        
//invalid login
cy.visit('https://practicetestautomation.com/practice-test-login/');
cy.get('input[name="username"]').type('abcd');
cy.get('input[name="password"]').type('password123')
cy.get('.btn').click()
cy.get('#error').eq(0).should('be.visible').and('have.text','your username is invalid!')

//invalid password

cy.visit('https://practicetestautomation.com/practice-test-login/');
cy.get('input[name="username"]').type('student');
cy.get('input[name="password"]').type('abcd')
cy.get('.btn').click()
cy.get('#error').eq(0).should('be.visible').and('have.text','your password is invalid!')


})
})