class MyInfoPage{

    getMyInfo(){
        return cy.get('a#menu_pim_viewMyDetails > b')
    }

    getQualification(){
        return cy.get('ul#sidenav :nth-child(9) > a')
    }

    getAddBtn(){
        return cy.get('input#addWorkExperience')
    }

    getCompanyName(){
        return cy.get('input#experience_employer')
    }
    
    getJobTitle(){
        return cy.get('input#experience_jobtitle')
    }
    
    getExpFromDate(){
        return cy.get('input#experience_from_date')
    }

    getExpToDate(){
        return cy.get('input#experience_to_date')
    }

    getAddComments(){
        return cy.get('textarea#experience_comments')
    }

    getSaveBtn(){
        return cy.get('input#btnWorkExpSave')
    }

    getHeader(){
        return cy.get('h1#headChangeWorkExperience')
    }

}

export default MyInfoPage