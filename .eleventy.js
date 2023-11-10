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
    return {
        dir: {
            input: "content",
            data: "../_data",
            includes: "../_includes"
        }
    }
};