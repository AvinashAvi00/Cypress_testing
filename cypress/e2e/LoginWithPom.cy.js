import Login from "../PageObjects/LoginPage2"

describe( 'pom',()=>{
    //General Apporach
    it('LoginTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

     //Using POM with fixture
    it.only('LoginTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then((data)=>{
      const ln = new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
        })

        //if we want to access all the class of loginpage then must have to define object class

        // const ln = new Login();
        // ln.setUserName("Admin")
        // ln.setPassword("admin123")
        // ln.clickSubmit();
        // ln.verifyLogin();
      
    })
})