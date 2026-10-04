import { test, expect } from "@playwright/test";
import { URL_PAGE } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto(URL_PAGE);
});

test("les deux liens de navigation sont affichés", async ({ page }) => {
  await expect(page.getByRole("navigation").getByRole("link")).toHaveText([
    "Menu",
    "Contact",
  ]);
});

test("les liens pointent vers les bonnes sections", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Menu" })).toHaveAttribute(
    "href",
    "#menu",
  );
  await expect(page.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "#contact",
  );
});

test("un clic sur « Menu » mène à la section du menu", async ({ page }) => {
  await page.getByRole("link", { name: "Menu" }).click();
  await expect(page).toHaveURL(/#menu$/);
});
