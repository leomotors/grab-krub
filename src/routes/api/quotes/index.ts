import type { RequestHandler } from "@sveltejs/kit";

import quotes_md from "../../../คาถาผู้แทน.md.g.json";
import quotes_html from "../../../คาถาผู้แทน.html.g.json";
import quotes_pure from "$lib/quotes_pure";

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: {
      text: quotes_pure,
      markdown: quotes_md,
      html: quotes_html,
    },
  };
};
