describe('Handle Tables',() =>{
    beforeEach('Login',()=>{       // Hooks
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
         cy.get("#input-password").type("demo");
          cy.get("button[type='submit']").click();

          cy.get(".btn-close").click()
    })
    it('Check Number Rows & Columns',()=>{

    })
     it('Check cell data from Rows & Column',()=>{
        
    })
     it('Read all the rows & Column data in the first page',()=>{
        
    })
     it('Pagination',()=>{
        
    })
})