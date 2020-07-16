/// <reference types="cypress" />

import HomePage from '../integration/PageObject/HomePage'
import SignIn from '../integration/PageObject/SignInPage'

Cypress.Commands.add("loginvalid", (email, password, message) => {
        const home = new HomePage()
        const signIn = new SignIn()
        home.visit()
        home.openSignInPage()
        signIn.enterEmail(email)
        signIn.continueButton()
        signIn.enterPassword(password)
        signIn.signinButton()
        signIn.authenMess(message)
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
