import { test, expect } from '@playwright/test'

test('Our leaders page validate', async ({ page }) => {

    await page.goto("https://www.kiwibank.co.nz/about-us/who-we-are/our-leaders/")
    await expect(page).toHaveScreenshot('leaders-pag.png', {
        fullPage: true
    })

})

test('Banner validation', async ({ page }) => {

    await page.goto("https://www.kiwibank.co.nz/about-us/who-we-are/our-leaders/")
    await expect(page.locator('.content-banner')).toHaveScreenshot('leaders-banner-pag.png')

})

test('Banner validation with masking', async ({ page }) => {

    await page.goto("https://www.kiwibank.co.nz/about-us/who-we-are/our-leaders/")
    await expect(page.locator('.content-banner')).toHaveScreenshot('leaders-banner-mask-pag.png', {
        mask: [page.locator('.content-banner__intro')]
    })

})