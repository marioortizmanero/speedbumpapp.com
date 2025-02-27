import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyI18nPlugin } from "@11ty/eleventy";

import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAnchor from "markdown-it-anchor";
import markdownItToc from "markdown-it-table-of-contents";

import pluginFilters from "./_config/filters.js";
import pluginShortcodes from "./_config/shortcodes.js";
import pluginTransforms from "./_config/transforms.js";

export default async function(eleventyConfig) {
  // Drafts, see also _data/eleventyDataSchema.js
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // The `public` directory is passed through to the output directory.
  eleventyConfig
    .addPassthroughCopy("./content/**/*.{svg,png,jpg,jpeg,webp}") // Images
    .addPassthroughCopy("./content/**/*.{webm,mp4}") // Videos
    .addPassthroughCopy("./content/**/*.{pdf,pptx}") // Documents
  eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg,avif,webp}");

  // Image optimization:
  // https://www.11ty.dev/docs/plugins/image/#eleventy-transform
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["avif", "webp", "auto"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    }
  });
  // Internationalization
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
    errorMode: "strict",
  });

  // Custom plugins
  eleventyConfig.addPlugin(pluginFilters);
  eleventyConfig.addPlugin(pluginShortcodes);
  eleventyConfig.addPlugin(pluginTransforms);

  const markdown = markdownIt({
      html: true,  // Embedding raw HTML
      typographer: true,  // Replacing characters like arrows or dashes
      linkify: true,  // Creates <a> for links automatically
    })
    .use(markdownItFootnote)
    .use(markdownItAnchor, {
      slugify: eleventyConfig.getFilter("slugify"),
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
      }),
    })
    .use(markdownItToc, {
      includeLevel: [2, 3],
      transformContainerOpen: () => {
          return `<details class="toc">
<summary>Table of Contents</summary>
`;
      },
      transformContainerClose: () => {
          return '</details>';
      }
    });
  markdown.renderer.rules.footnote_block_open = () => {
    return `<h2 id="footnotes">Footnotes</h2>
<ol class="footnotes-list">`;
  };
  markdown.renderer.rules.footnote_block_close = () => {
    return '</ol>';
  };
  eleventyConfig.setLibrary("md", markdown);

  // Replicates `_redirects` when running locally
  eleventyConfig.setServerOptions({
    middleware: function(req, res, next) {
      if (req.url === '/') {
        const userLang = req.headers["accept-language"]
          ? req.headers["accept-language"].split(',')[0].substring(0, 2)
          : 'en';

        if (['es', 'de'].includes(userLang)) {
          res.writeHead(302, { Location: `/${userLang}/` });
          res.end();
          return;
        }
      }
      next();
    }
  });
};

export const config = {
  templateFormats: [
    "md",
    "html",
    "liquid",
    "json",
    "njk",  // Plugins like RSS need this
  ],

  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
    output: "_site"
  },
};
