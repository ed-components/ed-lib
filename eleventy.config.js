import { md2HTML } from "@ed-components/ed-components/common.js";

export default async function (eleventyConfig) {
  // Add emd as a valid extension to process
  eleventyConfig.addExtension(["emd"], {
    key: "html",
    getData: function (inputPath) {
      // DIY, this object will be merged into data cascade
      console.log(inputPath)
      return { id: 12345 };
    },
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
