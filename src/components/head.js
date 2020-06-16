import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, socialCardMeta, canonicalUrl, path }) => {
    if (!canonicalUrl && path) {
        canonicalUrl = `https://github.com/mrsaeeddev/x/static/images/${path}?raw=true`
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
            { name: "twitter:site", content: "@mrsaeeddev" },
            {
                name: "twitter:title",
                content: title,
            },
            {
                name: "twitter:description",
                content:
                    "Full-Stack Software Engineer | Saeed | JavaScript, ReactJS, React Native, Data Science, Machine Learning",
            },
            {
                name: "twitter:image",
                content: "https://github.com/mrsaeeddev/x/blob/master/static/images/socialCard.jpg?raw=true",
            },
            {
                name: "og:title",
                content: title,
            },
            {
                name: "og:description",
                content:
                    "Full-Stack Software Engineer | Saeed | JavaScript, ReactJS, React Native, Data Science, Machine Learning",
            },
            {
                name: "og:image",
                content: "https://github.com/mrsaeeddev/x/blob/master/static/images/socialCard.jpg?raw=true",
            },
        ]
    }

    const meta = [
        {
            name: "description",
            content: "Full-Stack Software Engineer | Saeed | JavaScript, ReactJS, React Native, Data Science, Machine Learning",

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
