//go()

describe('mysuit'),()=>{

it('NavigationTest', ()=>{
    cy.visit("https://demo.opencart.com/");
    cy.title().should('eq', "Your Store"); //Home Page

    cy.get("#narbar-menu > ul > li:nth-child(7) > a").click();
    cy.get("div[id='content] h2").should('have.text',"Cameras"); // camera

    cy.go('back'); // go back to home 
    cy.title().should('eq', "Your Store");

    cy.go('forward'); //again go to the camera page

    cy.reload();
})
} 