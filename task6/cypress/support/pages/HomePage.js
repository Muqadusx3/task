class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com')
  }

  clickLogin() {
    cy.get('#login2').click()
  }

  navigateToCategory(category) {
    cy.contains(category).click()
  }

  getLoggedInUsername() {
    return cy.get('#nameofuser')
  }

  getLogoutButton() {
    return cy.contains('Log out')
  }
}

export default HomePage