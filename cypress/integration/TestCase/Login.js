/// <reference types="cypress" />

describe('Verify login invalid account with data driven', () => {
    
    it('Login valid account', () =>{
        cy.loginvalid('kieuvantruyen.3dfish@gmail.com', 'Aa123456', '***-***-**53', 'k******@gmail.com')
    })
})