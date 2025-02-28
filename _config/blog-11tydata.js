import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default {
  tags: [
    "posts",
  ],
  layout: "layouts/post.liquid",
  eleventyDataSchema: function(data) {
    let result = z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
      image: z.string(),
      imageAlt: z.string(),
      date: z.date(),
      draft: z.boolean().or(z.undefined()),
      eleventyExcludeFromCollections: z.boolean().or(z.undefined())
    }).safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  },
};
