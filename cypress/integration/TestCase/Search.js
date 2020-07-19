/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'


describe('Verify search funtion', ()=>{
    // it('Verify search with condition', () => {
    //     const home = new HomePage()
    //     cy.searchwithcondition('Books', 'apple')
    //     home.englishCheckBox('yes') //input yes for check condion
    //     home.checkProductInList('Ten Apples Up On Top!')
    // })

    it ('Verify number of item on a Page', ()=>{
        const home = new HomePage()
        cy.searchwithcondition('Books', 'apple')
        home.englishCheckBox('yes') //input yes for check condion
        home.checkProductInList(16) //have 16 item on a page
        // cy.get('.a-last').prev().invoke('text')
        for (let index = 0; index < Cypress.$('.a-pagination>li').length; index++) {
            cy.get('.a-last').click()
        }
        while(cy.get('.a-selected').invoke('text').should('not.equal', cy.get('.a-last').prev().invoke('text'))){
            cy.get('.a-last').click()
        }
       
    })
})