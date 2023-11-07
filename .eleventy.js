module.exports = function (eleventyConfig) {

    // Add emd as a valid extension to process
    eleventyConfig.addTemplateFormats("emd");
    eleventyConfig.addExtension("emd", {
        compile: async (inputContent) => {
            // Replace any instances of cloud with butt
            console.log(inputContent)

            return async () => {
                return inputContent;
            };
        }
    });
    return {
        dir: {
            data: "../_data",
            input: "content",
            includes: "../_includes"
        }
    }
};