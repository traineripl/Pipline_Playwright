import { test, expect } from "@playwright/test";
import { URL_PAGE } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

test("la page contient un seul titre de niveau 1", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
});

test("la page contient un en-tête, un contenu principal et un pied de page", async ({
  page,
}) => {
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("la page contient une seule image", async ({ page }) => {
  await expect(page.getByRole("img")).toHaveCount(1);
});
