

describe("Alerts", ()=> {

    //1) javascript alert: it will have some text and an 'ok' button

  /*  it('Alerts', ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=> {
            expect(t).to.contains('I am a JS Alert');

           
        })
        // alert window automatically closed by cypress

         cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })
         */

    //2) javascript confirm alert: It will have some text with 'OK' and 'cancel' buttons
  /*  it('Js confirm alert-OK ', ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
         cy.on('window:confirm',(t)=> {
            expect(t).to.contains('I am a JS Confirm');

    })
    //cypress automatically closed alert window by using ok button-default
    cy.get("#result").should('have.text','You clicked: Ok')
})
it('Js confirm alert - cancel ', ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
         cy.on('window:confirm',(t)=> {
            expect(t).to.contains('I am a JS Confirm');

    })
   cy.on('window:confirm',()=> false); //cypress closes alert window using cancel button
    cy.get("#result").should('have.text','You clicked: Cancel')
})
})

//3 js alert prompt
it.only('Js confirm promt alert ', ()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

       cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome');
       })
       cy.get("button[onclick='jsPrompt()']").click()

       //cypress will automatically close prompted alert- it will use ok button - by default

    //    cy.on('window:prompt', ()=> false)
     cy.get("#result").should('have.text','You entered: welcome')

     */
   
  
//4) Authenticated alert
it.only('Authenticated alert', ()=>{
    //Apporach1
  /*  cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                    {
                        username: "admin",
                        password: "admin"
                    }
                })
     cy.get("div[class='example'] p").should('have.contain',"Congratulations")  */
     
     //Approach2
      cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
       cy.get("div[class='example'] p").should('have.contain',"Congratulations") 
})
 })