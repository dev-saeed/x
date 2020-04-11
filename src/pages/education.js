import React from "react"
import mainStyles from "../styles/main.module.scss"
import aboutStyle from "./projects.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import LifeEvent from "../components/lifeEvent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSadTear, faAddressBook } from "@fortawesome/free-regular-svg-icons"


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


    return (
        <Layout>
          <Head title="Education" path={props.path} />

                <h1>
                <FontAwesomeIcon icon={faAddressBook} /> What did I study ?
                </h1>
                <br />
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
