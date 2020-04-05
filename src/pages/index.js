import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import mainStyles from "../styles/main.module.scss"
import Typist from "react-typist"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHeart,
    faPenFancy,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
    query {
        file(relativePath: { eq: "images/profile.jpg" }) {
            childImageSharp {
                fixed(width: 50) {
                    src
                }
            }
        }
    }
`

const IndexPage = props => {
    const profilePicture = (
        <Link to="/about">
            <img
                src={props.data.file.childImageSharp.fixed.src}
                alt="Marc Backes"
                className={indexStyles.profilePicture}
            />
        </Link>
    )

    return (
        <Layout>
            <Head title="Home" path={props.path} />
            <div className={mainStyles.container}>
                <h1 className={indexStyles.typing}>
                    <Typist avgTypingDelay={130} stdTypingDelay={30}>
                        <span>Hello!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hey!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Hi!</span>
                        <Typist.Backspace count={8} delay={3000} />
                        <span>Salam!</span>
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hola!</span>
                        <Typist.Backspace count={5} delay={3000} />
                        <span>Hallo!</span>
                    </Typist>
                </h1>

                <h2 className={indexStyles.title}>
                    I'm Saeed 👏
                    <br />
                    I&nbsp;
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={indexStyles.heart}
                    />
                    &nbsp;developing software!
                </h2>
                <p>
                    I am a <strong>full-stack software engineer</strong>{" "}
                    living in  🇱🇺, right in the heart of
                    Europe.
                </p>
                <p>
                    I mostly work with <strong>JavaScript</strong> (Node.js
                    &amp; Vue.js), but have also experience with{" "}
                    <strong>Ruby on Rails</strong>, <strong>PHP</strong>, and
                    others.
                </p>

                <p>
                    If you have any web development needs, feel free to{" "}
                    <Link to="/contact" className={mainStyles.link}>
                        contact
                    </Link>{" "}
                    or{" "}
                    <Link to="/about" className={mainStyles.link}>
                        get to know me a little better
                    </Link>
                    .
                </p>

                <h3 className={indexStyles.title}>
                    <span className={mainStyles.gradientText}>Featured</span> blog posts <FontAwesomeIcon icon={faPenFancy} />
                </h3>

              
            </div>
        </Layout>
    )
}

export default IndexPage
