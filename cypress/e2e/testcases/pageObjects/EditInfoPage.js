class EditInfoPage{

    getMyInfo(){
        return cy.get('a#menu_pim_viewMyDetails > b')
    }

    getEditBtn(){
        return cy.get('input[value="Edit"]')
    }

    getFirstName(){
        return cy.get('input#personal_txtEmpFirstName')
    }

    getLastName(){
        return cy.get('input#personal_txtEmpLastName')
    }

    getGender(gender){
        if(gender == "Male"){
            return cy.get('input#personal_optGender_1')
        } else if(gender == "Female"){
            return cy.get('input#personal_optGender_2')
        }
    }

    selectNationality(nationality){
            return cy.get('select#personal_cmbNation').select(nationality)
    }

    getSaveBtn(){
        return cy.get('input#btnSave')
    }
    
}


export default EditInfoPage