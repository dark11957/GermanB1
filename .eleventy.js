module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addFilter("json", value => JSON.stringify(value));
  eleventyConfig.addFilter("lessonId", value => String(value).padStart(2, "0"));
  eleventyConfig.addCollection("lessons", api => api.getFilteredByGlob("lessons/*.md").sort((a, b) => a.data.lessonId.localeCompare(b.data.lessonId)));
  return {
    dir: { input: "src", includes: "_includes", layouts: "layouts", output: "dist" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: process.env.PATH_PREFIX || "/"
  };
};
