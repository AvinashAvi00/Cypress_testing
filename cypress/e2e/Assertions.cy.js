
// describe('assertions demo', ()=> {
//     it('Implicit assertions', ()=> {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//         //should and 
//         cy.url().should('include', 'orangehrmlive.com')
//         // eq for equate these url 
//         cy.url().should('eq' , 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//         /// contain keyword check the word are present in the url
//         cy.url().should('contain', 'orangehrm')


//         // also we can write and instead of should keyword  
//          cy.url().should('include', 'orangehrmlive.com')
//          .and('eq' , 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//          .and('contain', 'orangehrm')

//          cy.url().should('include', 'orangehrmlive.com')
//          .and('eq' , 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//          .and('not.contain', 'greenhrm')

//          cy.title().should('include', 'Orange')
//          .and('eq', 'OrangeHRM')
//          .and('contain', 'HRM')

//          cy.get('.orangehrm-login-branding > img').should('be.visible') // logo visible or not 
//          .and('exist')   // logo exist or not
         
//          // To check all the links on webpage 
//          cy.xpath("//a").should('have.length', '5')

//          cy.get("input[placeholder='Username']").type('Admin')  // provide a value into inputbox 

//           cy.get("input[placeholder='Username']").should('have.value','Admin') // value
//     })
// })

describe('assertion', ()=> {
    it('Explicit assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get("input[placeholder='Username']").type('Admin')
         cy.get("input[placeholder='Password']").type('admin123')
         cy.get("button[type='submit']").click()

         let expName="Paul colling";

         cy.get(".oxd-userdropdown-name").then( (x) => {

         let actName = x.text();
            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName, expName)
           assert.notEqual(actName, expName)

         })
    })
})