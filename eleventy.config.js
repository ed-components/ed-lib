// need to bundle it with esbuild until 11ty supports esm
const md2HTML = require("./scripts/build/md2HTML.cjs").md2HTML;

module.exports = function (eleventyConfig) {
  // Add emd as a valid extension to process
  eleventyConfig.addExtension(["emd"], {
    key: "html",
    compile: function (inputContent, inputPath) {
      return function (data) {
        return md2HTML(inputContent);
        // TODO maybe preprocess html at build time
        // return this.defaultRenderer(data);
      };
    },
  });
  // watch for dev
  eleventyConfig.addWatchTarget("11ty/_assets/*");
  // copy assets to oudir
  eleventyConfig.addPassthroughCopy({ "design/*.svg": "." });
  eleventyConfig.addPassthroughCopy({ "11ty/images/": "/images" });
  // copy emd to oudir
  eleventyConfig.addPassthroughCopy({ content: "content" });

  return {
    dir: {
      input: "content",
      data: "../11ty/_data",
      includes: "../11ty/_includes",
    },
  };
};
