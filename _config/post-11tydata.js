import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default {
  tags: [
    "posts",
  ],
  layout: "layouts/post.liquid",
  eleventyDataSchema: function(data) {
    // TODO: does this inherit from the other one to also require title?
    let result = z.object({
      date: z.date(),
      draft: z.boolean().or(z.undefined()),
      eleventyExcludeFromCollections: z.boolean().or(z.undefined())
    }).safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  },
};
