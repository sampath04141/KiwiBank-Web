const { test, expect } = require('@playwright/test')
import { HomePage } from '../../Pages/HomePage'

test.describe('Home Page UI testing', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Validate home Page Title', async ({ page }) => {
        await expect(page).toHaveTitle('Kiwibank - 100% Kiwi owned')
    })

    test('verify landing url', async ({ page }) => {
        await expect(page).toHaveURL('https://www.kiwibank.co.nz/personal-banking/')

    })

    test('Validate Personal category in the home page', async ({ page }) => {
        const menuListL1 = ['Personal', 'Business', 'Join Kiwibank', 'Contact us', 'About us', 'Search', 'Login']
        const home = new HomePage(page)

        for (var i = 1; i <= menuListL1; i++) {
            expect(await home.getTextL1Menu(i)).toContainEqual(menuListL1[i - 1])

        }
    })
})
