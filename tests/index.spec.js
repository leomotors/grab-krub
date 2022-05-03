// @ts-check

import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toContain("กราบครับ");
});

test("clicking คาถาติดผู้แทน routes to /quotes", async ({ page }) => {
  await page.goto("/");
  await page.locator("text=คาถาติดผู้แทน").click();
  await page.waitForNavigation();
  expect(page.url()).toMatch(/:3000\/quotes[\/]?$/);
});

test("/quotes has ท่านจอม", async ({ page }) => {
  await page.goto("/quotes");
  expect(await page.textContent("div.w-full > p")).toContain("JomnoiZ");
});
