# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: image.spec.ts >> le logo est réellement chargé
- Location: tests\image.spec.ts:26:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - heading "Café du Coin" [level=1] [ref=e3]
    - navigation [ref=e4]:
      - link "Menu" [ref=e5] [cursor=pointer]:
        - /url: "#menu"
      - link "Contact" [ref=e6] [cursor=pointer]:
        - /url: "#contact"
  - main [ref=e7]:
    - img "Logo du Café du Coin" [ref=e8]
    - generic [ref=e9]:
      - heading "Notre menu" [level=2] [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12]: Espresso
        - listitem [ref=e13]: Cappuccino
        - listitem [ref=e14]: Croissant
  - contentinfo [ref=e15]:
    - paragraph [ref=e16]: "Contact : bonjour@cafe-du-coin.example"
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
  17 |   ).toHaveAttribute("src", "logo.svg");
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
> 30 |     .toBe(true);
     |      ^ Error: expect(received).toBe(expected) // Object.is equality
  31 | });
  32 | 
```