import { test, expect } from "@playwright/test";
import { URL_PAGE } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

test("le titre de l'onglet est « Café du Coin »", async ({ page }) => {
  await expect(page).toHaveTitle("Café du Coin");
});

test("le titre de la page est « Café du Coin »", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Café du Coin",
  );
});

test("la description de la page est renseignée", async ({ page }) => {
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Café artisanal au centre-ville",
  );
});

test("la langue de la page est le français", async ({ page }) => {
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
});
