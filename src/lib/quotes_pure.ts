import quotes_md from "../คาถาผู้แทน.md.g.json";

const quotes_pure = quotes_md.map((q) =>
  q.replace(/\[[^\]]*\]\([^\)]*\)/g, "").trim()
);

export default quotes_pure;
