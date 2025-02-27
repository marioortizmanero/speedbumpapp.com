import MarkdownIt from "markdown-it";
import * as cheerio from "cheerio";
import memoize from "memoize";

const markdownIt = new MarkdownIt();

export default function(eleventyConfig) {
  eleventyConfig.addFilter("absUrl", (relUrl) => {
    return new URL(relUrl, metadata.url).href;
  });

  eleventyConfig.addFilter("readableDateShort", (dateString, lang) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(lang, {
      year: "numeric",
      month: "short",
    }).format(date);
  });

  eleventyConfig.addFilter("readableDateLong", (dateString, lang) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  });

  eleventyConfig.addFilter("assertLengthUnder", (str, maxLength) => {
    if (typeof str !== "string" || !Number.isInteger(maxLength)) {
      throw new Error("assertLengthUnder filter expects a string and integer");
    }
    if (str.length > maxLength) {
      throw new Error(`String has length of ${str.length}, which is above the expected maximum of ${maxLength}: ${str}`);
    }
    return str;
  });

  eleventyConfig.addFilter("assertNotEmpty", (x) => {
    if (!x) {
      throw new Error(`Expected non-empty variable but got: ${x}`);
    }
  });

  eleventyConfig.addFilter("raiseError", (str) => {
    throw new Error(`Validation failed in a template: ${str}`);
  });

  eleventyConfig.addFilter("markdownify", (str) => {
    return markdownIt.renderInline(str);
  });

  eleventyConfig.addFilter("strip_whitespace", (str) => {
    return str.replace(/[\r\n\t]/g, ' ').trim();
  });

  // Better than `strip_html` because it also removes unnecessary elements and
  // trims the whitespace.
  eleventyConfig.addFilter("plainifyHtml", memoize((html) => {
    const $ = cheerio.load(html);
    // The table of contents is a Markdown plugin, so it's actually part of the
    // content.
    $(".toc").remove();
    // https://github.com/cheeriojs/cheerio/issues/339
    $("style").remove();
    // We assume JS loads by default
    $("noscript").remove();
    // No headers, only text
    $("h2,h3,h4,h5,h6").remove();
    const plain = $.text();
    return plain
      .replace(/[\r\n\t]/g, ' ')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
  }));

  eleventyConfig.addFilter("escapeHtmlTags", (html) => {
    return html
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  });

  eleventyConfig.addFilter("log", (obj) => {
    console.log(obj);
    console.log("------------------------");
  });
}
