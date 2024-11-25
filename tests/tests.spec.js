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

test.describe("Add/Remove Elements", async () => {
    test("Click link", async ({page}) => {
        await page.locator(`a[href="/add_remove_elements/"]`)
        expect(page.url("https://the-internet.herokuapp.com/add_remove_elements/"))
    })

    test("Add element", async ({page}) => {
        await page.getByRole("button", { name : "Add Element"})
        expect(page.getByRole("button", { class: "added-manually"}))
    })
})