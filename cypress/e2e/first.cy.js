/*describe('Test functionality', ()=>{
    it("logo", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get('#search_query_top').type("T-Shirts")
        cy.get("[name='submit_search']").click()
        // cy.get(".lighter").contains("T-Shirts")
    }) 
})*/
/*
describe("raido button", ()=> {
    it('raido button', ()=> {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //for visible
        cy.get("input#male").should('be.visible')
         cy.get("input#female").should('be.visible')

         //for checking radio button
          cy.get("input#male").check().should('be.checked')
           cy.get("input#female").should('not.be.checked')

             cy.get("input#female").check().should('be.checked')
           cy.get("input#male").should('not.be.checked')


    })
}) */

    describe("check box", ()=> {
        it("check box", ()=> {
             cy.visit("https://testautomationpractice.blogspot.com/")

             //for visible checkbox
             cy.get("input#sunday").should("be.visible")
              cy.get("input#sunday").check().should("be.checked")
                cy.get("input#sunday").uncheck().should("not.be.checked")

                  cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
                  cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        })
    })