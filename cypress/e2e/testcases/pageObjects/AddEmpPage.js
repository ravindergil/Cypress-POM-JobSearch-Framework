class AddEmpPage{

    getPIM(){
        return cy.get('a#menu_pim_viewPimModule>b')
    }

    getAddBtn(){
        return cy.get('input#btnAdd')
    }

    getFirstName(){
        return cy.get('#firstName')
    }

    getLastName(){
        return cy.get('#lastName')
    }

    getEmpId(){
        return cy.get('input#employeeId')
    }

    getSaveBtn(){
        return cy.get('#btnSave')
    }

    getEmpList(){
        return cy.get('#menu_pim_viewEmployeeList')
    }

    


}

export default AddEmpPage;