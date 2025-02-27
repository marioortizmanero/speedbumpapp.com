import { z } from "zod";
import { fromZodError } from 'zod-validation-error';

export default {
  eleventyDataSchema: function(data) {
    let result = z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
      // TODO: make mandatory? or handle well
      image: z.string().optional(),
    }).safeParse(data);

    if (result.error) {
      throw fromZodError(result.error);
    }
  },
};
