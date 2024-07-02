cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#mousehover').invoke('show')
       cy.contains('top').click({force:true})
       cy.url().should('include','top')