describe('Implementing page object model')callback>
it('Automate Amazon')callback
import Homepage from "--PAGEOBJECTS/amzhome"
import category from"--/PAGEOBJECTS/todaysdeals"
import signin from"--PAGEOBJECTS/signin";
describe('Implementing page object model',()=>{
    let amazonData;
    let homepage=new Homepage()
    let category=new signin()
    before(()=>{
    cy.fixture('amdata').then((amz))=>{
        amazonData=am2



})
})

it('Automate Amazon',()=>{
    homepage.visitingAmozon()
    homepage.verifyTitleofHomepage(amozonData.PageTitle)
    homepage.findHellosignIn()
    signinpage.aftersigninGoBackToHome()
    homepage.searchcategoryAndclick()
    category.verifyTitleofcategorypage()
    category.goBackToHome()
    cy.get('#twotabsearchtextbox').type(amozonData.phone)
    cy.get('#twotabsearchtextbox').type('{enter}')
    cy.wait(8000)
})
})

