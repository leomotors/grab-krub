import type { RequestHandler } from "@sveltejs/kit";

import quotes_md from "../../../คาถาผู้แทน.md.g.json";
import quotes_html from "../../../คาถาผู้แทน.html.g.json";
import quotes_pure from "$lib/quotes_pure";

export const get: RequestHandler = ({ params }) => {
  const id = +params.id - 1;

  if (id < 0 || id >= quotes_md.length) {
    return {
      status: 404,
      body: {
        code: 404,
        quote: "Quote not found",
      },
    };
  }

  return {
    status: 200,
    body: {
      text: quotes_pure[id],
      markdown: quotes_md[id],
      html: quotes_html[id],
    },
  };
};
