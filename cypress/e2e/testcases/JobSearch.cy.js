/// <reference types="Cypress" />

import AddEmpPage from "./pageObjects/AddEmpPage"
import EmpInfoPage from "./pageObjects/EmpInfoPage"
import UtilityFunc from "./pageObjects/UtilityFunc"
import EditInfoPage from "./pageObjects/EditInfoPage"

describe('OrangeHRM_TestSUite', function(){

    beforeEach(function(){
        cy.fixture("testData").then(function(data){
            this.data=data
        })
    })

    it('1. Verify the website title', function(){
        const utility = new UtilityFunc()
        utility.openURL(this.data.url)
        utility.getPageTitle().should('eq','OrangeHRM')

    })

    it('2. Get the url of the header image', function(){
        const utility = new UtilityFunc()
        utility.openURL(this.data.url)
        var imageTitle = cy.get('div#divLogo > img').title()
        console.log(imageTitle)
        cy.log(imageTitle)
    })

    it('3. Logging into the site', function(){
        const utility = new UtilityFunc()
        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        cy.title().should('eq', this.data.pageTitle)
        cy.wait(1000)
    })

    it('4. Add a new employee', function(){
        const utility = new UtilityFunc()
        const addEmpPage = new AddEmpPage()
        const empInfoPage = new EmpInfoPage

        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        utility.getWait(1000)
        addEmpPage.getPIM().click()
        addEmpPage.getAddBtn().click()
        addEmpPage.getFirstName().type(this.data.firstName)
        addEmpPage.getLastName().type(this.data.lastName)
        addEmpPage.getEmpId().then(function(el){
            var empId = el.prop('value')
            cy.log(empId)
        })
        addEmpPage.getSaveBtn().click()
        addEmpPage.getPIM().click()

        empInfoPage.getEmpList().click()
        empInfoPage.getWait(1000)
        empInfoPage.getEmpName().type(this.data.firstName)
        empInfoPage.getWait(1000)
        empInfoPage.getSearchBtn().click()
        empInfoPage.getWait(1000)
        empInfoPage.getSearchResult().should('not.be.empty')
        empInfoPage.selectSearchResults().click()
        empInfoPage.getDeleteBtn().click()
        empInfoPage.getWait(1000)
        empInfoPage.getDeleteDialogue().click()
    })

    it('5. Edit user information', function(){

        const editInfoPage = new EditInfoPage()
        const utility = new UtilityFunc()

        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        editInfoPage.getMyInfo().click()
        editInfoPage.getEditBtn().click()
        editInfoPage.getFirstName().clear()
        editInfoPage.getFirstName().type(this.data.editFirstName)
        editInfoPage.getLastName().clear()
        editInfoPage.getLastName().type(this.data.editLastName)
        editInfoPage.getGender(this.data.gender).click()
        editInfoPage.selectNationality(this.data.nationality)
        editInfoPage.getSaveBtn().click()

    })
    
})