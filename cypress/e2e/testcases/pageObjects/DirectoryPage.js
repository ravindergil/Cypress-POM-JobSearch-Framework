class DirectoryPage{

    getDirectory(){
        return cy.get('a#menu_directory_viewDirectory > b')
    }

    getSearchDirectory(){
        return cy.get('div.box.searchForm > :nth-child(1) >h1')
    }
}

export default DirectoryPage