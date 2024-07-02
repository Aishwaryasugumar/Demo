
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //to access window on same page
    cy.on('window:before:load',(win)=>{

         //override the open function

    cy.stub(win,'open').callsFake((url)=>{
        win.location.href=url;
    })
})
    