module.exports = {
    siteMetadata: {
        title: "Gatsby Demo Site",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              defaults: {
                formats: [`auto`, `webp`],
                placeholder: `none`,
                breakpoints: [750, 1080, 1366, 1920],
                backgroundColor: `transparent`,
                tracedSVGOptions: {},
                blurredOptions: {},
                jpgOptions: {},
                pngOptions: {},
                webpOptions: {},
                avifOptions: {},
              }
            }
          },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
    ],
}