import HomePage from '../support/pages/HomePage'
import ProductPage from '../support/pages/ProductPage'

describe('Demoblaze - Product Navigation and Validation', () => {
  const homePage = new HomePage()
  const productPage = new ProductPage()

  it('Should navigate to a product and validate its details', () => {
    homePage.visit()
    homePage.navigateToCategory('Laptops')
    productPage.openFirstProduct()
    productPage.validateProductDetails()
  })
})