import { HomePage } from "../Pages/HomePage";

import { test, expect } from "@playwright/test";
import { BusinessPage } from "../Pages/BusinessPage";


var home
var business

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.kiwibank.co.nz/personal-banking/', { timeout: 60000 })
    home = new HomePage(page)
    business = new BusinessPage(page)
    await home.clickL1MenuItem(2)
})

test('validate Business special table', async ({ page }) => {
    const boxTitle = 'Special'
    await business.scrollToPromo()
    expect(await business.getText(boxTitle)).toEqual(boxTitle)

})

test('Validate Card type', async ({ page }) => {
    const cardType = 'Fixed term'
    await business.scrollToPromo()
    expect(await business.getText(cardType)).toEqual(cardType)

})

test('Validate Rate', async ({ page }) => {
    const term = 'Deposit'
    await business.scrollToPromo()
    expect(await business.getText(term)).toContain('Term Deposit (1 year)')
})

test('Validate Sub Heading', async ({ page }) => {
    const blurb = 'Blurb'
    await business.scrollToPromo()
    expect(await business.getText(blurb)).toEqual('Fixed returns on money locked in for a set period.')

})