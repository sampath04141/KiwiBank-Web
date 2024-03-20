// JavaScript source code
export class BusinessPage {
    constructor(page) {
      this.page = page
      this.productPromoHeading = '.product-promos__heading'
      this.firstBoxSpecialLabel = '.special-label'
      this.firstBoxPromeType = '.product-promo.product-promo--special  .product-promo__type'
      this.firstBoxPromoName = '.product-promo.product-promo--special  .product-promo__name a'
      this.firstBoxPromoBlurb = '.product-promo.product-promo--special  .product-promo__blurb'
    }

    async scrollToPromo() {
      await this.page.waitForSelector(this.productPromoHeading);
      await this.page.locator(this.productPromoHeading).scrollIntoViewIfNeeded()
    }

    async getText(locatorString) {
      let text
      switch (locatorString) {
        case "Special":
          text = await this.page.locator(this.firstBoxSpecialLabel).textContent()
          break;
        case 'Fixed term':
          text = await this.page.locator(this.firstBoxPromeType).textContent()
          break;
        case "Deposit":
          text = await this.page.locator(this.firstBoxPromoName).textContent()
          console.log("--rate --: " + text)
          break;
        case "Blurb":
          text = await this.page.locator(this.firstBoxPromoBlurb).textContent()
          console.log("--rate --: " + text)
          break;

        default:
          return 'No Match'

      }
      return text
    }
  }