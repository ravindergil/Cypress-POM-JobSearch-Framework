class EmpInfoPage{

    getEmpList(){
        return cy.get('#menu_pim_viewEmployeeList')
    }

    getEmpName(){
        return cy.get('#empsearch_employee_name_empName')
    }

    getSearchBtn(){
        return cy.get('#searchBtn')
    }

    getSearchResult(){
        return cy.get('#search-results > .inner')
    }

    selectSearchResults(){
        return cy.get('input#ohrmList_chkSelectAll')
    }

    getDeleteBtn(){
        return cy.get('input#btnDelete')
    }

    getDeleteDialogue(){
        return cy.get('#dialogDeleteBtn')
    }

    getWait(x){
        return cy.wait(x)
    }

}

export default EmpInfoPage