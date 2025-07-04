
import 'cypress-iframe'

describe("handling Frames", ()=>{
    it("handling Frames", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        const iframe=cy.get("#mce_0_ifr")
         .its('0.contentDocument.body')
         .should('be.visible')
         .then(cy.wrap);

          iframe.clear().type("welcome");
 })

        it("apporach2 - by using custom command", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.getIframe("#mce_0_ifr")
        
          iframe.clear().type("welcome");
    })

     it.only("apporach3 - by using cypress-iframe plugin", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr') // load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");

        cy.get("[aria-label='Bold']").click()
    })


    
})