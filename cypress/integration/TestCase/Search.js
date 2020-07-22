/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'





describe('Verify search funtion', ()=>{
    it('Verify search with condition', () => {
        const home = new HomePage()
        cy.searchwithcondition('Books', 'apple')
        home.englishCheckBox('yes') //input yes for check condion
        home.checkProductInList('Ten Apples Up On Top!')
    })


    it ('Verify number of item on a Page', ()=>{
        const home = new HomePage()
        cy.searchwithcondition('Books', 'apple')
        home.englishCheckBox('yes') //input yes for check condion
        home.listItemInEachPage(16) //have 16 item on a page
    })

    it ('Verify pagination', ()=>{
        const home = new HomePage()
        cy.searchwithcondition('Books', 'cameron judd')
        home.englishCheckBox('yes') //input yes for check condion
        home.checkPagination(5, 16) //Search Result: has x page, one page has y item
       
    })

    // it ('Verify Sorting by Publish Date', ()=>{
    //     const home = new HomePage()
    //     cy.searchwithcondition('Books', 'apple')
    //     home.englishCheckBox('yes') //input yes for check condion
    //     home.sortOption('Publication Date')
       
    // })
})