describe("basic UI elements handling",()=>{
it('UI elements validate and test',()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //radio button
    cy.get('[value="radio2"]').check().should('be.checked')

        //checkbox

    cy.get('#checkBoxoption2').check().should('be.checked')
    cy.wait(4000)
    cy.get('#checkBoxoption2').uncheck().should('not.be.checked')
    cy.get('label input[type="checkbox"]').check(["option1","option3"]).should('be.checked')

    //static dropdown
    cy.get('select').select('option2').should('have.value','option2')

    //dynamic dropdown

    cy.get('[placeholder="Type to select countries"]').type('in')
    cy.get('.ui-menu-item div').each(($options)=>{
        if($options.text().includes('India')){
            cy.wrap($options).click()
        }
    })
    cy.get('[placeholder="Type to select countries"]').should('have.value','India')

        




})
})


    

