module.exports = {
    siteMetadata: {
        title: "Gatsby",
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
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/locales`,
              name: `locale`
            }
          },
          {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
              localeJsonSourceName: `locale`,
              languages: [`en`, `fr`],
              defaultLanguage: `en`,
              siteUrl: `http://localhost:8000/`,
              i18nextOptions: {
                interpolation: {
                  escapeValue: false 
                },
                keySeparator: false,
                nsSeparator: false
              },
              pages: [
                {
                  matchPath: '/:lang?/blog/:uid',
                  getLanguageFromPath: true,
                  excludeLanguages: ['es']
                },
                {
                  matchPath: '/preview',
                  languages: ['en']
                }
              ]
            }
          },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
    ],
}