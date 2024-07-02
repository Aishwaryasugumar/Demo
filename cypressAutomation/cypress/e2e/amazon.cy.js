describe("Amazon search product and add to cart",()=>{
    it('should search for an item, select it, and add to cart',()=>{
        cy.visit("https://www.amazon.com/")
  
      // Search for an item
      cy.get('input[ name="field-keywords"]').type('oneplus mobile{enter}')
  
      // Wait for search results to load
      cy.wait(2000)
  
      // Select the first item in the search results
      cy.get('https://m.media-amazon.com/images/I/6178pE1utbL._AC_UY218_.jpg').click()

      
      
  
     // Wait for the item page to load
      cy.wait(2000)
  
      // Add the item to the cart
      cy.get('#add-to-cart-button').click()
  
      // Verify the item was added to the cart
      cy.get('a[href*="/cart?ref_=sw_gtc"]').click()
    })
  })
  

