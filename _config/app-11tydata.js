import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default {
  layout: "layouts/app-page.liquid",
  eleventyDataSchema: function(data) {
    let result = z.object({
      image: z.string(),
      imageAlt: z.string(),

      keywords: z.array(z.string()),
      name: z.string(),

      title: z.string(),
      description: z.string(),
      permalink: z.string(),

      intro: z.string(),
      reasons: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),

      demo_title: z.string(),
      demo_intro: z.string(),
      demo_outro: z.string(),

      facts: z.array(z.string()),
      facts_source: z.string(),
    }).safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  },
};
