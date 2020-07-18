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

    searchDepartment(department){
        const departmentLocator = cy.get('#searchDropdownBox')
        departmentLocator.select(department, {force: true})
        return this
    }

    enterSearchField(value){
        const searchFielLocator = cy.get('#twotabsearchtextbox')
        searchFielLocator.type(value)
        return this
    }

    searchButton(){
        const searchBtn = cy.xpath("//input[@value='Go']")
        searchBtn.click()
    }

    englishCheckBox(condition){
        const eng = cy.xpath('//span[contains(text(),"English")]/preceding-sibling::div/label/input')
        if(condition=='yes'){
            eng.check({force:true})
        }
        
    }

    
}
export default HomePage