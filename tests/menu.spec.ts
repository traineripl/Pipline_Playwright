import { test, expect } from "@playwright/test";
import { URL_PAGE } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

test("le titre de la section est « Notre menu »", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 2 })).toHaveText(
    "Notre menu",
  );
});

test("le menu contient trois produits", async ({ page }) => {
  await expect(page.getByRole("listitem")).toHaveCount(3);
});

for (const produit of ["Espresso", "Cappuccino", "Croissant"]) {
  test(`le menu contient « ${produit} »`, async ({ page }) => {
    await expect(
      page.getByRole("listitem").filter({ hasText: produit }),
    ).toBeVisible();
  });
}
