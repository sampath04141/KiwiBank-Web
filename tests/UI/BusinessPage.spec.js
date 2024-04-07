import { HomePage } from "../../Pages/HomePage";

import { test, expect } from "@playwright/test";
import { BusinessPage } from "../../Pages/BusinessPage";
const testData = require('../../TestInputData/data.json');


let home
let business

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 60000 })
    home = new HomePage(page)
    business = new BusinessPage(page)
    await home.clickL1MenuItem(2)
})

test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'test-results/screenshots/' + Date.now() + '-screenshot.png' })
})


test('validate Business special table', async ({ page }) => {
    const boxTitle = testData.term_block.boxTitle
    await business.scrollToPromo()
    expect(await business.getText(boxTitle)).toEqual(boxTitle)

})

test('Validate Card type', async ({ page }) => {
    const cardType =testData.term_block.cardType
    await business.scrollToPromo()
    expect(await business.getText(cardType)).toEqual(cardType)

})

test('Validate Rate', async ({ page }) => {
    const term = testData.term_block.term
    await business.scrollToPromo()
    expect(await business.getText(term)).toContain('Term Deposit (1 year)')
})

test('Validate Sub Heading', async ({ page }) => {
    const blurb = testData.term_block.blurb
    await business.scrollToPromo()
    expect(await business.getText(blurb)).toEqual('Fixed returns on money locked in for a set period.')

})