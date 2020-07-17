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

    //Message at authen 
    // authenMess(message){
    //     const messageLoca = cy.get('span.a-size-medium.transaction-approval-word-break.a-text-bold')
    //     messageLoca.should('have.text', message)
    // }

    //show hide number phone
    phoneHide(phone){
        const phoneLocator = cy.xpath('//div[contains(text(),"Mobile")]/following-sibling::div')
        phoneLocator.should('contain.text', phone)
    }

    //show hide email 
    emailHide(email){
        const emailLocator = cy.xpath('//div[contains(text(),"Email")]/following-sibling::div')
        emailLocator.should('contain.text', email)
    }

    //get the warning message when invalid email
    warningMessage(mess){
        const warning = cy.get('.a-list-item')
        warning.should('contain.text', mess)
    }
}

export default SignInPage