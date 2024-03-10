// JavaScript source code
exports.HomePage =
    class HomePage {
        constructor(page) {
            this.page = page
            this.topMenuItemsL1 = '//nav[@class="primary-nav-desktop"]//div[2]//li'
        }

        
        //1- Personal
        //2- Business
        //3- Join Kiwi Bank
        async getTextL1Menu(position){
            return await this.page.locator(this.topMenuItemsL1+'['+position+']').textContent()
        }

        async clickL1MenuItem(position){
            await this.page.locator(this.topMenuItemsL1+'['+position+']').click()
            //await this.page.waitForTimeout(10000);
        }
    }
