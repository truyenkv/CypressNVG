/// <reference types="cypress" />
class SignInPage {

    //fill text to email field
    enterEmail(value){
        const email = cy.get('#ap_email')
        email.type(value)
        return this
    }

    //click continue button
    continueButton(){
        const continueBtn = cy.get('#continue')
        continueBtn.click()
    }

    //fill text to password field
    enterPassword(value){
        const pass = cy.get('#ap_password')
        pass.type(value)
        return this
    }

    //click signin button
    signinButton(){
        const signinBtn = cy.get('#signInSubmit')
        signinBtn.click()
    }
}

export default SignInPage