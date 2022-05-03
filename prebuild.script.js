// @ts-check
/// <reference lib="esnext" />

import fs from "node:fs/promises";
import { marked } from "marked";

import assert from "node:assert";

const rmd = (await fs.readFile("README.md")).toString();
const lines = rmd.split("\n");

const start = lines.findIndex((l) => l.startsWith("## คาถาติดผู้แทน"));
const quotes_md = [];
const quotes_html = [];

for (let i = start + 1; i < lines.length; i++) {
  if (lines[i].startsWith("##")) break;
  if (!lines[i].startsWith("-")) continue;

  const line = lines[i].slice(1).trim();

  quotes_md.push(line);
  quotes_html.push(
    marked(line).replaceAll(
      'href="https://',
      "target='_blank' rel='noopener' href=\"https://"
    )
  );

  assert(quotes_md.length == quotes_html.length);
}

await fs.writeFile(
  "src/คาถาผู้แทน.md.g.json",
  JSON.stringify(quotes_md, null, 2)
);
await fs.writeFile(
  "src/คาถาผู้แทน.html.g.json",
  JSON.stringify(quotes_html, null, 2)
);

await fs.writeFile(
  "tests/test_helper.g.js",
  `export const quotes_length = ${quotes_md.length};`
);
