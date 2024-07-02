describe("select item and add to cart",()=>{
    it('should search for an item, select it, and add to cart',()=>{    
        cy.visit("https://www.saucedemo.com/")
        cy.get(cy.get('[data-test="username"]')).type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('input[type="submit"]').click()


    })
})

