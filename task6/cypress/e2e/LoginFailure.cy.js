import HomePage from '../support/pages/HomePage'
import LoginPage from '../support/pages/LoginPage'

describe('Demoblaze - Login Failure Scenario', () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()

  it('Should show alert for invalid credentials', () => {
    homePage.visit()
    homePage.clickLogin()

    loginPage.login('invalidUser123', 'wrongPassword')

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('User does not exist.')
    })
  })
})