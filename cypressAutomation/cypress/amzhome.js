class Homepage{
    visitingAmazon(){
        return cy.visit('https://www.amazon.in/')
    }
    verifyTitleofHomepage(title){
        return cy.title().should('include',title)
    }
    findHellosigninAndclicksignIn(){
        return cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover').then(()=>{
            cy.get('#nav-flyout-ya-signin a').eq(0).click()
        })
    }
    searchAcategoryAndclick(){
        return cy.get('.nav-progressive-content a')
        afterEach(($categories.text().includes('Today')){
            cy.wrap($categories).click()
        }
    })
}}

export default Homepage;

