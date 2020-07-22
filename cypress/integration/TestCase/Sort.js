/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'


describe('Verify Sorting', ()=>{
    it('Verify sorting', () => {
        const home = new HomePage()
        cy.searchwithcondition('Books', 'apple insanely')
        //home.englishCheckBox('yes') //input yes for check condion
        home.sortOption('Publication Date')
        home.dateTimeProduct()
    })
})