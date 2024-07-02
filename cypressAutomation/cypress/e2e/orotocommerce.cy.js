describe('Test practice',()=>{
    let cred;
    before(()=>{
        cy.fixture('login').then((testdata)=>{
            cred=testdata;
        })
    })
    it('verify with data in page',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(cred.Name)
        cy.get('input[name="email"]').type(cred.Email)
        cy.get('select').select(cred.Gender)
        cy.get('input[name="bday"]').type(cred.Dob)
        cy.get('#inlineRadio1').click()
        cy.get('input[type="submit"]').click()

        //add to cart
        cy.get(':nth-child(2) > .nav-link').click()
        cred.productsToAdd.forEach((mobiles)=>{
            cy.addingproductTocart(mobiles)
            cy.wait(3000)
            cy.get('a[class="nav-link btn-primary"]').click()
            cy.get('button[class="btn btn-success"]').click()
            cy.get('input[id="country"]').type("India")
            cy.wait(4000)
            cy.contains("India").click()
            cy.get('#checkbox2').click()
            cy.get('input[class="btn btn-sucess btn-lg"]').click()
            cy.get('alert alert-sucess alert-dismissable').should('have.text','')

        })

    })
})
