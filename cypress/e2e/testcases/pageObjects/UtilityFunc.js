class UtilityFunc{

    openURL(URL){
        return cy.visit(URL)
    }

    getLogIn(userName, passWord){
        cy.get('input#txtUsername').type(userName)
        cy.get('input#txtPassword').type(passWord)
        cy.get('input#btnLogin').click()
        cy.wait(1000)
    }

    getWait(number){
        return cy.wait(number)
    }

    getPageTitle(){
        return cy.title()
    }
}

export default UtilityFunc