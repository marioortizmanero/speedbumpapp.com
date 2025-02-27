import { minify } from "html-minifier-terser";
import memoize from "memoize";

export default function(eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", memoize(async (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }

    return await minify(content, {
      removeComments: true,
      // Markdown rendering results in HTML such as:
      //   <a href="...">hey</a> there
      // This should read "hey there" but it's incorrectly minified, resulting
      // in "heythere". The easiest fix is to prevent it altogether.
      collapseWhitespace: false,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      ignoreCustomFragments: [
        // The minifier breaks with Rust lifetimes such as <'a>.
        //
        // See https://github.com/terser/html-minifier-terser/issues/161
        /<code[\s\S]*?>[\s\S]*?<\/code>/g,
      ],
    });
  }));
};

