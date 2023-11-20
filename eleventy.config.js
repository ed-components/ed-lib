module.exports = function (eleventyConfig) {

    // Add emd as a valid extension to process
    eleventyConfig.addExtension(['emd'], {
        key: 'html',
        compile: function (inputContent, inputPath) {
            return function (data) {
                // TODO maybe preprocess html at build time
                return this.defaultRenderer(data);
            };
        }
    }
    )
    // watch for dev
    eleventyConfig.addWatchTarget("11ty/_assets/style.css");
    // copy assets to oudir
    eleventyConfig.addPassthroughCopy({ "design/*.svg": "." });
    eleventyConfig.addPassthroughCopy({ "11ty/_assets/style.css": "." });

    return {
        dir: {
            input: "content",
            data: "../11ty/_data",
            includes: "../11ty/_includes"
        }
    }
};