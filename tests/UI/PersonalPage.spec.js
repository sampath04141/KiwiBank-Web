import { HomePage } from "../../Pages/HomePage";
import { PersonalPage } from "../../Pages/PersonalPage";
import { test, expect } from "@playwright/test";

let home
let personal

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.kiwibank.co.nz/personal-banking/', { timeout: 60000 })
    home = new HomePage(page)
    personal = new PersonalPage(page)
    await home.clickL1MenuItem(1)

})

test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'test-results/screenshots/' + Date.now() + '-screenshot.png' })
})

test('validate Personal special rate data', async ({ page }) => {
    const boxTitle = 'Special rate'
    await personal.scrollToSpecialRate()
    page.pause()
    expect(await personal.getText(boxTitle)).toEqual(boxTitle)

})

test('Validate Card type', async ({ page }) => {
    const cardType = 'Home loans'
    // await home.clickL1MenuItem(1)
    await personal.scrollToSpecialRate()
    expect(await personal.getText(cardType)).toEqual(cardType)

})

test('Validate Rate', async ({ page }) => {
    const rate = 'Rate'
    //await home.clickL1MenuItem(1)
    await personal.scrollToSpecialRate()
    expect(await personal.getText(rate)).toContain('6.79')

})
test('Validate Sub Heading', async ({ page }) => {
    const subHeading = 'Sub Heading'
    //await home.clickL1MenuItem(1)
    await personal.scrollToSpecialRate()
    expect(await personal.getText(subHeading)).toEqual('2 years fixed')

})
test('Validate Terms', async ({ page }) => {
    const terms = 'Terms'
    //await home.clickL1MenuItem(1)
    await personal.scrollToSpecialRate()
    expect(await personal.getText(terms)).toContain('2 years fixed. Min 20% equity.')

})