import { test, expect } from "@playwright/test"

test.beforeEach("Load URL", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/")
})

test.describe("A/B Testing", async () => {
    test("Click link", async ({page}) => {
        await page.locator(`a[href="/abtest"]`)
        expect(page.url("https://the-internet.herokuapp.com/abtest"))
    })
})