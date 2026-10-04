# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: image.spec.ts >> le logo pointe vers logo.svg
- Location: tests\image.spec.ts:14:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  getByRole('img', { name: 'Logo du Café du Coin' })
Expected: "logo.svg"
Received: "logo1.svg"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" getByRole('img', { name: 'Logo du Café du Coin' }) with timeout 5000ms
  - waiting for getByRole('img', { name: 'Logo du Café du Coin' })
    13 × locator resolved to <img width="200" height="200" src="logo1.svg" alt="Logo du Café du Coin"/>
       - unexpected value "logo1.svg"

```

```yaml
- img "Logo du Café du Coin"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { URL_PAGE } from "./helpers";
  3  | 
  4  | test.beforeEach(async ({ page }) => {
  5  |   await page.goto(URL_PAGE);
  6  | });
  7  | 
  8  | test("le logo est visible", async ({ page }) => {
  9  |   await expect(
  10 |     page.getByRole("img", { name: "Logo du Café du Coin" }),
  11 |   ).toBeVisible();
  12 | });
  13 | 
  14 | test("le logo pointe vers logo.svg", async ({ page }) => {
  15 |   await expect(
  16 |     page.getByRole("img", { name: "Logo du Café du Coin" }),
> 17 |   ).toHaveAttribute("src", "logo.svg");
     |     ^ Error: expect(locator).toHaveAttribute(expected) failed
  18 | });
  19 | 
  20 | test("le logo a les bonnes dimensions", async ({ page }) => {
  21 |   const logo = page.getByRole("img", { name: "Logo du Café du Coin" });
  22 |   await expect(logo).toHaveAttribute("width", "200");
  23 |   await expect(logo).toHaveAttribute("height", "200");
  24 | });
  25 | 
  26 | test("le logo est réellement chargé", async ({ page }) => {
  27 |   const logo = page.getByRole("img", { name: "Logo du Café du Coin" });
  28 |   await expect
  29 |     .poll(() => logo.evaluate((img) => img.complete && img.naturalWidth > 0))
  30 |     .toBe(true);
  31 | });
  32 | 
```