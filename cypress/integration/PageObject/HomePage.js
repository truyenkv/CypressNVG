/// <reference types="cypress" />
class HomePage {
    
    //open the url of home page
    visit(){
        cy.visit('https://www.amazon.com/')
    }

    //click sigin button to open the sign page
    openSignInPage(){
        const signBtn = cy.get('#nav-link-accountList')
        signBtn.click()
    }

    //select the department on dropdownlist
    searchDepartment(department){
        const departmentLocator = cy.get('#searchDropdownBox')
        departmentLocator.select(department, {force: true})
        return this
    }

    //enter the value to search field
    enterSearchField(value){
        const searchFielLocator = cy.get('#twotabsearchtextbox')
        searchFielLocator.type(value)
        return this
    }

    searchButton(){
        const searchBtn = cy.xpath("//input[@value='Go']")
        searchBtn.click()
    }

    //check the englist checkbox for filter
    englishCheckBox(condition){
        const eng = cy.xpath('//span[contains(text(),"English")]/preceding-sibling::div/label/input')
        if(condition=='yes'){
            eng.check({force:true})
        }
        
    }


    //check the product is displayed in the list matchs with search condition
    checkProductInList(product){
        product = '"'+product+'"'
        const locator ='//*[contains(text(),'+product+')]'
        cy.xpath(locator).should('be.visible')
    }

    //check the number of item on the each page
    listItemInEachPage(number){
        const list = cy.xpath('//div[@data-component-type="s-search-result"]')
        list.should('have.length', number)
    }
    
    //check how many page in search result
    checkPagination(expectPage, itemNumber){
        cy.get('.a-last').prev().invoke('text').then(parseInt).should('be.equal', expectPage)
        for (var i = 0; i < expectPage; i++) {
            cy.get('.a-last').click()
            cy.wait(2000)
            this.listItemInEachPage(itemNumber)
        }
    }

    
}
export default HomePage