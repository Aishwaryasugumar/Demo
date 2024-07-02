describe('Data-Driven Testing',() => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/');
    });
  
    it('should submit the form with multiple sets of data', function() {
      cy.fixture('data').then((data) => {
        data.login.forEach((login) => {
          cy.get('input[name="name"]').clear().type(login.name);
          cy.get('input[name="email"]').clear().type(login.email);
          cy.get('input[id="exampleInputPassword1"]').clear().type(login.password);
          
          if (login.gender === 'Male') {
            cy.get('#inlineRadio1').check();
          } else {
            cy.get('#inlineRadio2').check();
          }
          
          cy.get('input[name="bday"]').type('2000-01-01');
          cy.get('select').select('Male');
          cy.get('input[type="submit"]').click();
  
          // Add assertions to verify the form submission
          cy.get('.alert').should('contain', 'Success');
        });
      });
    });
  });