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

}
export default HomePage