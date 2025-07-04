//click on link using label
// over writing existing  contains() command
//re-usable custom command

describe('Custom commands', ()=>{

    it("handling links", ()=>{

        cy.visit("https://demo.nopcommerce.com/");

        //direct- without using custom command 
        // using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
    })

    it.only("overwriting existing command", ()=>{

    })

    it("Login command", ()=> {

    })
})