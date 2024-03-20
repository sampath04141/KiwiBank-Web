// JavaScript source code
export class PersonalPage {

        constructor(page) {
            this.page = page
            this.currentRate = '.rates-carousel__heading'
            this.FirstBoxSpecial = '//a[@href="/personal-banking/home-loans/"]/h3'
            this.firstBoxCardType = '//a[@href="/personal-banking/home-loans/"]/h4'
            this.firstBoxRate = '//a[@href="/personal-banking/home-loans/"]/div[@class="rates-card__value"]'
            this.firstBoxSubHeading = 'a:nth-of-type(1)> .rates-card__subheading'
            this.firstBoxTerms = 'a:nth-of-type(1)> .rates-card__terms'
        }

        async getText(locatorString) {
            let text
            switch (locatorString) {
                case "Special rate":
                    text = await this.page.locator(this.FirstBoxSpecial).textContent()
                    break;
                case 'Home loans':
                    text = await this.page.locator(this.firstBoxCardType).textContent()
                    break;
                case "Rate":
                    text = await this.page.locator(this.firstBoxRate).textContent()
                    console.log("--rate --: " + text)
                    break;
                case "Sub Heading":
                    text = await this.page.locator(this.firstBoxSubHeading).textContent()
                    console.log("--rate --: " + text)
                    break;
                case "Terms":
                    text = await this.page.locator(this.firstBoxTerms).textContent()
                    console.log("--rate --: " + text)
                    break;
                default:
                    return 'No Match'

            }
            return text
        }

        async scrollToSpecialRate() {
            await this.page.waitForSelector(this.currentRate);
            await this.page.locator(this.currentRate).scrollIntoViewIfNeeded()
            // await this.page.waitForTimeout(5000)
        }




    }

