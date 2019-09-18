module.exports = function(eleventyConfig) {

    // Custom Markdown config
    let markdownIt = require("markdown-it");
    let options = {
        html: true
    };
    eleventyConfig.setLibrary("md", markdownIt(options).disable('code'));

    return {
        dir: {
            input: "_content",
            includes: "../_includes",
            layouts: "../_layouts",
            data: "../_data"
        },
        templateFormats: [
            "md",
            "css",
            "js"
        ]
    };

};