class Login 
{

    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg= ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    /// this refer to the current class 
    setUserName(Username)
    {
        cy.get(this.txtUserName).type(Username);
    }

     setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
       clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

      verifyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Dashboard');
    }

}

export default Login;