// Open homepage
Cypress.Commands.add('openHomePage', () => {
  cy.visit('https://www.demoblaze.com')
})

// Login
Cypress.Commands.add('login', (username, password) => {
  cy.get('#login2').click()
  cy.get('#loginusername').clear().type(username)
  cy.get('#loginpassword').clear().type(password)
  cy.get('#logInModal .btn-primary').contains('Log in').click()
})

// Validate successful login
Cypress.Commands.add('validateLoginSuccess', () => {
  cy.get('#nameofuser', { timeout: 10000 })
    .should('be.visible')
    .and('contain.text', 'Welcome')
  cy.contains('Log out').should('be.visible')
})

// Navigate to category
Cypress.Commands.add('navigateToCategory', (category) => {
  cy.contains(category).click()
})

// Open first product
Cypress.Commands.add('openFirstProduct', () => {
  cy.get('.card-title a').first().click()
})

// Validate product details
Cypress.Commands.add('validateProductDetails', () => {
  cy.get('.name').should('be.visible')
  cy.get('.price-container').should('be.visible')
  cy.get('#more-information').should('exist')
  cy.contains('Add to cart').should('be.visible')
})