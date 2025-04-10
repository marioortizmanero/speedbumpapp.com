import MarkdownIt from "markdown-it";
import fs from "fs";
import * as cheerio from "cheerio";
import memoize from "memoize";

import metadata from "../_data/metadata.js";

const markdownIt = new MarkdownIt({
  html: true,  // Embedding raw HTML
  typographer: true,  // Replacing characters like arrows or dashes
  linkify: true,  // Creates <a> for links automatically
});

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

  eleventyConfig.addFilter("iso8601Date", (dateString) => {
    const date = new Date(dateString);
    return date.toISOString();
  });

  eleventyConfig.addFilter("lastModified", (filePath) => {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  });

  eleventyConfig.addFilter("recentPosts", function (posts) {
    return posts
      .filter(p => p.url !== this.page.url)
      .sort((p1, p2) => p2.data.date - p1.data.date)  // Descending
      .slice(0, 100);  // TODO: change to 5 once there's a /blog/ page
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

  eleventyConfig.addFilter("raiseError", (str) => {
    throw new Error(`Validation failed in a template: ${str}`);
  });

  eleventyConfig.addFilter("markdownify", (str) => {
    return markdownIt.renderInline(str);
  });

  eleventyConfig.addFilter("markdownBlock", (str) => {
    return markdownIt.render(str);
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

  eleventyConfig.addFilter("escapeQuotes", (text) => {
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  });

  eleventyConfig.addFilter("log", (obj) => {
    console.log(obj);
    console.log("------------------------");
  });

  // Generates a random number between minValue and maxValue (inclusive).
  eleventyConfig.addFilter("randomBetween", function(minValue, maxValue) {
    if (typeof minValue !== 'number' || typeof maxValue !== 'number') {
      throw new Error('randomBetween filter expects number parameters. Received: ' +
        typeof minValue + ' and ' + typeof maxValue);
    }
    if (minValue >= maxValue) {
      throw new Error('randomBetween filter expects minValue to be less than maxValue. Received: ' +
        minValue + ' and ' + maxValue);
    }

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  });
};
