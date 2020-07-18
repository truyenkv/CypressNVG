/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'


describe('Verify search funtion', ()=>{
    it('Verify search with condition', () => {
        const home = new HomePage()
        home.visit()
        home.searchDepartment('Books')
        home.enterSearchField('apple')
        home.searchButton()
        home.englishCheckBox('yes') //input yes for check condion
        home.checkProductInList('Ten Apples Up On Top!')
    })
})