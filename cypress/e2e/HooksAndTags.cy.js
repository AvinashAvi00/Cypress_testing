//Hooks And Tag

//before
//after
//beforeEach
//AfterEach

describe('MyTestSuit', ()=>{

    before(()=>{
        cy.log("******  Launch app  ********");

    })

    after(()=>{

        cy.log("*****  close App  ******");
    })

    beforeEach(()=>{
        cy.log("*****   Login  *******");
    })

    afterEach(()=>{
        cy.log("******   Logout ******");
    })

    it('search', ()=>{

         cy.log("*****  searching  ******");

    })

    it('advanced search', ()=>{

        cy.log("*****  advanced searching  ******");

        
    })

    it('Listing Products', ()=>{

        cy.log("*****  Listing Products  ******");

        
    })
})