describe('Login Gmail',()=>{
    it('test the Gmail login page',()=>{
        cy.visit("https://www.gmail.com/")
        const filepath='C:\Users\HP\Desktop\Login.xlsx'
        const sheet1='Users';
        cy.task('readExcel',{filepath,sheet1}).then((Users)=>{
            cy.get('input[type="email"]').type(Users.email)
            cy.get('input[type="password"]').type(Users.password)
        })
    })
})