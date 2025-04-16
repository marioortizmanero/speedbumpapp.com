import path from "node:path";

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
    .addPassthroughCopy({"./public/": "/"})
    .addPassthroughCopy("./content/**/*.{svg,png,jpg,jpeg,webp,gif}") // Images
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
    },
    sharpOptions: {
      animated: true,
    },
    // Descriptive filenames on images are good for SEO. Note that the name
    // still has to be unique so that it doesn't overwrite others.
    filenameFormat: function (id, src, _width, format, _options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${id}.${format}`;
    }
  });
  // Internationalization
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback",
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

  // When running locally, we simply redirect / to /en
  eleventyConfig.setServerOptions({
    onRequest: {
      "/": function() {
        return {
          status: 301,
          headers: {
            "Location": "/en"
          }
        }
      },
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
