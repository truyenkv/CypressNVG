/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'





describe('Verify search funtion', ()=>{
    it('Verify pagination', () => {
        const home = new HomePage()
        cy.searchwithcondition('Books', 'apple')
        //home.englishCheckBox('yes') //input yes for check condion
        home.dateTimeProduct()
    })
})