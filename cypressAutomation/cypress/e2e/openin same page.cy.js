cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


//to open in same page
cy.get('#opentab').eq(0).invoke('removeAtr','target').click()

//return true
cy.get('#alertbtn').click()
cy.on('window:alert',(alerttxt=>{
    expect(alerttxt).to.eq("Hello,share this practice page and share your knowledge")
})

//to return false
cy.get('#confirmbtn').click()
cy.on('window:confirm',(alerttxt)=>{
    expect(alerttxt).to.eq("Hello,Are you sure you want to confirm?")
    return false
)}
)}
