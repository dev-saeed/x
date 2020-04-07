import React from "react"
import mainStyles from "../styles/main.module.scss"
import aboutStyle from "./projects.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import LifeEvent from "../components/lifeEvent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSadTear, faGraduationCap } from "@fortawesome/free-regular-svg-icons"


export const query = graphql`
    query {
        file(relativePath: { eq: "images/mentorship.jpg" }) {
            childImageSharp {
                fluid {
                    sizes
                    src
                    srcSet
                }
            }
        }
    }
`

const MentorshipIndex = props => {
    const socialCardMeta = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@_marcba" },
        {
            name: "twitter:title",
            content: "Apply for  free mentorship",
        },
        {
            name: "twitter:description",
            content: "Mentorship for aspiring web developers",
        },
        {
            name: "twitter:image",
            content: "https://marc.dev/images/mentorship.jpg",
        },

        {
            name: "og:title",
            content: "Apply for  free mentorship",
        },
        {
            name: "og:description",
            content: "Mentorship for aspiring web developers",
        },
        {
            name: "og:image",
            content: "https://marc.dev/images/mentorship.jpg",
        },
        {
            name: "og:url",
            content: "https://marc.dev/mentorship",
        },
    ]

    return (
        <Layout>
            <Head
                title="Apply to mentorship"
                path="/education"
                socialCardMeta={socialCardMeta}
            />

                <h1>
                    Education <FontAwesomeIcon icon={faGraduationCap} />
                </h1>

                <LifeEvent
                    timePeriod="2018 - 2019"
                    title="M.Sc. in Electronics"
                    details="University of Karachi"
                    location="Pakistan 🇵🇰"
                    current={true}
                />
                <LifeEvent
                    timePeriod="2018"
                    title="Data Scientist With Python Track"
                    details="DataCamp"
                    location="Online 🌐"
                />
                <LifeEvent
                    timePeriod="2015-2018"
                    title="B.Sc.(Hons.) in Electronics"
                    details="University of Karachi"
                    location="Pakistan 🇵🇰"
                />
                <hr className={aboutStyle.gradientLine} />

        </Layout>
    )
}

export default MentorshipIndex
