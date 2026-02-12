class ProductPage {
  openFirstProduct() {
    cy.get('.card-title a').first().click()
  }

  validateProductDetails() {
    cy.get('.name').should('be.visible')
    cy.get('.price-container').should('be.visible')
    cy.get('#more-information').should('exist')
    cy.contains('Add to cart').should('be.visible')
  }
}

export default ProductPage