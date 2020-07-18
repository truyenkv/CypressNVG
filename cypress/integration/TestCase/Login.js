/// <reference types="cypress" />

describe('Verify login', () => {
    
    it('Login valid account', () =>{
        cy.loginvalid('kieuvantruyen.3dfish@gmail.com', 'Aa123456', '***-***-**53', 'k******@gmail.com')
    })

    it('verify warning message when input invalid email', () => {
        cy.fixture('invalidEmail').then( emailtest => {
            emailtest.forEach(e => {
                const email = e.email;
                const messageWarning = e.messageWarning;
                cy.loginemailinvalid(email, messageWarning)
            });
        })
    })

    it('verify warning message when input incorrect password', () => {
        cy.loginpasswordinvalid('kieuvantruyen.3dfish@gmail.com', 'zzzzzz', 'Your password is incorrect')
    })
})