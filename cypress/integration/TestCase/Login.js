/// <reference types="cypress" />

import HomePage from '../PageObject/HomePage'
import SignIn from '../PageObject/SignInPage'

describe('Verify login invalid account with data driven', () => {
    
    it('Login invalid account', () =>{
        // const home = new HomePage()
        // const signIn = new SignIn()
        // home.visit()
        // home.openSignInPage()
        // signIn.enterEmail('kieuvantruyen.3dfish@gmail.com')
        // signIn.continueButton()
        // signIn.enterPassword('Aa123456')
        // signIn.signinButton()
        // signIn.authenMess('Authentication required. Please respond to the notification sent to1:')
        cy.loginvalid('kieuvantruyen.3dfish@gmail.com', 'Aa123456', '1Authentication required. Please respond to the notification sent to:')
        

    })
})