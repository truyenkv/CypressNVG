/// <reference types="cypress" />

import HomePage from '../integration/PageObject/HomePage'
import SignIn from '../integration/PageObject/SignInPage'

Cypress.Commands.add("loginvalid", (email, password, phoneHide, emailHide) => {
        const home = new HomePage()
        const signIn = new SignIn()
        home.visit()
        home.openSignInPage()
        signIn.enterEmail(email)
        signIn.continueButton()
        signIn.enterPassword(password)
        signIn.signinButton()
        signIn.phoneHide(phoneHide)
        signIn.emailHide(emailHide)
        
})

Cypress.Commands.add("loginemailinvalid", (email, message)=> {
        const home = new HomePage()
        const signIn = new SignIn()
        home.visit()
        home.openSignInPage()
        signIn.enterEmail(email)
        signIn.continueButton()
        signIn.warningMessage(message)
})

Cypress.Commands.add("loginpasswordinvalid", (email, pass, message)=> {
        const home = new HomePage()
        const signIn = new SignIn()
        home.visit()
        home.openSignInPage()
        signIn.enterEmail(email)
        signIn.continueButton()
        signIn.enterPassword(pass)
        signIn.signinButton()
        signIn.warningMessage(message)

})
