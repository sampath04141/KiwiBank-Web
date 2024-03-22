// JavaScript source code
export class PersonalPage {

    constructor(page) {
        this.page = page
        this.currentRate = page.locator('.rates-carousel__heading')
        this.FirstBoxSpecial = page.locator('//a[@href="/personal-banking/home-loans/"]/h3')
        this.firstBoxCardType = page.locator('//a[@href="/personal-banking/home-loans/"]/h4')
        this.firstBoxRate = page.locator('//a[@href="/personal-banking/home-loans/"]/div[@class="rates-card__value"]')
        this.firstBoxSubHeading = page.locator('a:nth-of-type(1)> .rates-card__subheading')
        this.firstBoxTerms = page.locator('a:nth-of-type(1)> .rates-card__terms')
    }

    async getText(locatorString) {
        let text
        switch (locatorString) {
            case "Special rate":
                text = await this.FirstBoxSpecial.textContent()
                break;
            case 'Home loans':
                text = await this.firstBoxCardType.textContent()
                break;
            case "Rate":
                text = await this.firstBoxRate.textContent()
                console.log("--rate --: " + text)
                break;
            case "Sub Heading":
                text = await this.firstBoxSubHeading.textContent()
                console.log("--rate --: " + text)
                break;
            case "Terms":
                text = await this.firstBoxTerms.textContent()
                console.log("--rate --: " + text)
                break;
            default:
                return 'No Match'

        }
        return text
    }

    async scrollToSpecialRate() {
        await this.currentRate.waitFor();
        await this.currentRate.scrollIntoViewIfNeeded()
    }




}

