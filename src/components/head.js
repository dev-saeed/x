import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, socialCardMeta, canonicalUrl, path }) => {
    if (!canonicalUrl && path) {
        canonicalUrl = `https://github.com/iamsaeeddev/x/static/images/${path}?raw=true`
    }
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    if (!socialCardMeta) {
        socialCardMeta = [
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@iamsaeeddev" },
            {
                name: "twitter:title",
                content: title,
            },
            {
                name: "twitter:description",
                content:
                    "Full Stack Software Engineer | Saeed Ahmad",
            },
            {
                name: "twitter:image",
                content: "https://github.com/iamsaeeddev/x/static/images/SocialCard.jpg?raw=true",
            },
            {
                name: "og:title",
                content: title,
            },
            {
                name: "og:description",
                content:
                    "Full Stack Software Engineer | Saeed Ahmad ",
            },
            {
                name: "og:image",
                content: "https://github.com/iamsaeeddev/x/static/images/SocialCard.jpg?raw=true",
            },
        ]
    }

    const meta = [
        {
            name: "description",
            content: "Full Stack Software Engineer | Saeed Ahmad",

        },
        ...socialCardMeta,
    ]

    return (
        <>
            <Helmet
                title={`${title} | ${data.site.siteMetadata.title}`}
                link={
                    canonicalUrl
                        ? [
                              {
                                  rel: "canonical",
                                  key: canonicalUrl,
                                  href: canonicalUrl,
                              },
                          ]
                        : []
                }
                meta={meta}
            ></Helmet>
        </>
    )
}

export default Head
