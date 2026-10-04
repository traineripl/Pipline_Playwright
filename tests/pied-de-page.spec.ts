import { test, expect } from "@playwright/test";
import { URL_PAGE } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

test("le pied de page est affiché", async ({ page }) => {
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("le pied de page contient l'adresse e-mail", async ({ page }) => {
  await expect(page.getByRole("contentinfo")).toContainText(
    "bonjour@cafe-du-coin.example",
  );
});
