import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default {
  eleventyDataSchema: function(data) {
    if (data.page.fileSlug === "sitemap.xml") {
      return
    }

    let result = z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
      image: z.string(),
      imageAlt: z.string(),
      eleventyExcludeFromCollections: z.boolean().or(z.undefined())
    }).safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  },
};
