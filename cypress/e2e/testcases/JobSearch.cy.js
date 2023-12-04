/// <reference types="Cypress" />

import AddEmpPage from "./pageObjects/AddEmpPage"
import EmpInfoPage from "./pageObjects/EmpInfoPage"
import UtilityFunc from "./pageObjects/UtilityFunc"
import EditInfoPage from "./pageObjects/EditInfoPage"
import DirectoryPage from "./pageObjects/DirectoryPage"
import MyInfoPage from "./pageObjects/MyInfoPage"
import LeavePage from "./pageObjects/LeavePage"

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

    it('6. Verify Directory Menu', function(){
        const utility = new UtilityFunc()
        const directory = new DirectoryPage()
        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        directory.getDirectory().should('be.visible').click()
        directory.getSearchDirectory().should('be.visible')
        directory.getSearchDirectory().then(function(el){
            const value = el.text()
            cy.log(value)
        
        })
        directory.getSearchDirectory().should('have.text',this.data.headingDirectory)
    })

    it('7. Adding qualifications', function(){
        const utility = new UtilityFunc()
        const myInfo = new MyInfoPage()
        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        myInfo.getMyInfo().click()
        myInfo.getQualification().should('be.visible').click()
        myInfo.getAddBtn().click()
        myInfo.getCompanyName().type(this.data.companyName)
        myInfo.getJobTitle().type(this.data.jobTitle)
        myInfo.getExpFromDate().type(this.data.fromDate)
        myInfo.getHeader().click()
        myInfo.getExpToDate().type(this.data.toDate)
        myInfo.getHeader().click()
        myInfo.getAddComments().type(this.data.comments)
        myInfo.getSaveBtn().click()

    })

    it('8. Applying for a leave', function(){
        const utility = new UtilityFunc()
        const leavePage = new LeavePage()

        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        utility.getDashboard().click()
        utility.getApplyLeave().click()
        leavePage.selectLeaveType().select(this.data.leaveType)

        leavePage.getFromDate().type("2024-01-15")
        leavePage.getHead().click()
        utility.getWait(1000)
        leavePage.getToDate().clear()
        leavePage.getToDate().type("2024-02-15")
        leavePage.getHead().click()
        utility.getWait(1000)

        leavePage.getTextArea().type("Vacations")
        leavePage.getApplyBtn().click()

    })

    it('9. Retrieve emergency contacts', function(){
        const utility = new UtilityFunc()
        const myInfo = new MyInfoPage()

        utility.openURL(this.data.url)
        utility.getLogIn(this.data.userName, this.data.passWord)
        myInfo.getMyInfo().click()
        myInfo.getEmergencyContatct().should('be.visible').click()
        myInfo.getEmgContactList().each(($el, index, $list) => {
            const value = $el.text()
            cy.log(value)
        })


    })
    
})