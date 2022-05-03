// @ts-check

import { expect, test } from "@playwright/test";

import { quotes_length } from "./test_helper.g.js";

test("Get quotes from /api/quotes", async ({ request }) => {
  const response = await request.get("http://localhost:3000/api/quotes");
  expect(response.ok()).toBeTruthy();

  const body = JSON.parse((await response.body()).toString());
  expect(body.text?.length).toStrictEqual(quotes_length);
  expect(body.markdown?.length).toStrictEqual(quotes_length);
  expect(body.html?.length).toStrictEqual(quotes_length);
});

test("Get quote from /api/quotes with id", async ({ request }) => {
  const response = await request.get("http://localhost:3000/api/quotes/1");
  expect(response.ok()).toBeTruthy();

  const body = JSON.parse((await response.body()).toString());
  expect(body.text).toMatch("JomnoiZ");
  expect(body.markdown).toMatch("JomnoiZ");
  expect(body.html).toMatch("JomnoiZ");
});

test("Getting invalid quotes", async ({ request }) => {
  const response = await request.get("http://localhost:3000/quotes/-69");
  expect(response.ok()).toBeFalsy();
});
