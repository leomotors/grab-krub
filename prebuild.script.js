import fs from "node:fs/promises";
import { marked } from "marked";

const rmd = (await fs.readFile("README.md")).toString();
const lines = rmd.split("\n");

const start = lines.findIndex((l) => l.startsWith("## คาถาติดผู้แทน"));
const quotes = [];

for (let i = start + 1; i < lines.length; i++) {
  if (lines[i].startsWith("##")) break;
  if (!lines[i].startsWith("-")) continue;

  quotes.push(
    marked(lines[i].slice(1).trim()).replace(
      'href="https://',
      "target='_blank' rel='noopener' href=\"https://"
    )
  );
}

await fs.writeFile("src/คาถาผู้แทน.g.json", JSON.stringify(quotes, null, 2));
