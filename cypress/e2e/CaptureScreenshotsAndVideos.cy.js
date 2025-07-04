describe('mysuit',()=>{
    it("Capture screenshots & Videos", ()=>{

        cy.visit("https://www.opencart.com/index.php?route=cms/demo")
       /* cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("logo");  */

        // Automatically capture screenshot & video on failure - only when execute through CLI

        cy.get("#narbar-menu > ul > li:nth-child(7) > a").click()  // cameras 


    })
})