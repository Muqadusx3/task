import HomePage from '../support/pages/HomePage'
import LoginPage from '../support/pages/LoginPage'

describe('Demoblaze - Login Success & Homepage Validation', () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()

  it('Should login successfully and validate homepage', () => {
    homePage.visit()
    homePage.clickLogin()

    loginPage.login('muqadus', 'muqadus')

    homePage.getLoggedInUsername()
      .should('be.visible')
      .and('contain.text', 'Welcome')
    homePage.getLogoutButton().should('be.visible')
  })
})