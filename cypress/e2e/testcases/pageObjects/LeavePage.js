class LeavePage{

    selectLeaveType(){
        return cy.get('select#applyleave_txtLeaveType')
    }

    getFromDate(){
        return cy.get('input#applyleave_txtFromDate')
    }

    getToDate(){
        return cy.get('input#applyleave_txtToDate')
    }

    getTextArea(){
        return cy.get('textarea#applyleave_txtComment')
    }

    getApplyBtn(){
        return cy.get('input#applyBtn')
    }

    getHead(){
        return cy.get('div.head>h1')
    }

    getLeaveBalance(){
        return cy.get('#applyleave_leaveBalance')
    }

    getViewLeaveBalance(){
        return cy.get('#leaveBalance_details_link')
    }

    getPartialDays(){
        return cy.get('#applyleave_partialDays')
    }

    getLeaveBalanceDetails(){
        return cy.get('#balance_details > .modal-body')
    }

    closeLeaveDetails(){
        return cy.get('#balance_details > .modal-footer > #closeButton')
    }

    leaveBalanceHeader(){
        return cy.get('#balance_details > .modal-header > h3')
    }



}
export default LeavePage