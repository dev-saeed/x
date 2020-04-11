require("dotenv").config({
    path: `.env`,
})

const path = require("path")
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title:
            "Full-Stack Software Engineer | Saeed | JavaScript, ReactJS, React Native, Data Science, Machine Learning",
        author: "Saeed",
        version: "0.2.1",
        hostname: "saeed",
    },
    plugins: [
        `gatsby-plugin-client-side-redirect`,
        // For adding lang= attribute to <html> tag
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "en",
            },
        },

        `gatsby-transformer-json`,

        // For adding the scroll progress bar on top of the website
        {
            resolve: "gatsby-plugin-page-progress",
            options: {
                includePaths: [{ regex: "^/blog" }],
                height: 3,
            },
        },

        // Analytics with usefathom.com
        {
            resolve: "gatsby-plugin-fathom",
            options: {
                siteId: "DHVXVLZU",
            },
        },

        // Preconnect to some domains. Necessary for speed optimization.
        {
            resolve: "gatsby-plugin-preconnect",
            options: {
                domains: [
                    "https://collect.usefathom.com",
                    "https://images.ctfassets.net",
                ],
            },
        },

        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://dev.us4.list-manage.com/subscribe/post?u=8e6f0473494c027d2e284e73c&id=71a2542483', // add your MC list endpoint here; see instructions below
            },
        },

        // Dark mode button
        "gatsby-plugin-dark-mode",

        // For setting meta tags in the site
        "gatsby-plugin-react-helmet",

        // For loading external Google Fonts
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Parisienne`,
                    },
                ],
            },
        },

        // For using SASS
        "gatsby-plugin-sass",

        // For image transformation (e.g. resize)
        "gatsby-transformer-sharp",
        // For image transformation (e.g. resize)
        "gatsby-plugin-sharp",

        // For loading files from the file system into GraphQL
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `static`),
            },
        },

        // Markdown plugins
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    // Images in markdown
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        },
                    },

                    // Syntax highlighting
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                        },
                    },
                ],
            },
        },
    ],
}
