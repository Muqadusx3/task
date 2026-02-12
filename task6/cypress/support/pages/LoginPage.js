class LoginPage {
  enterUsername(username) {
    cy.get('#loginusername').clear().type(username)
  }

  enterPassword(password) {
    cy.get('#loginpassword').clear().type(password)
  }

  clickLoginButton() {
    cy.get('#logInModal .btn-primary').contains('Log in').click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLoginButton()
  }
}

export default LoginPage