import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import mainStyles from "../styles/main.module.scss"
import Typist from "react-typist"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHeart,
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
                        <Typist.Backspace count={6} delay={3000} />
                        <span>Hello!</span>
                    </Typist>
                </h1>

                <h2 className={indexStyles.title}>
                    I'm Saeed <div className={indexStyles.wave}>👋</div>
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
                    primarily working on 🌐 and 📱 apps.
                </p>
                <p>
                    I mostly work with <strong>JavaScript</strong> (⚛️ React Native
                    &amp; ReactJS), but also have experience with 🐍 Python in {" "}
                    <strong>Flask</strong>, <strong>Django</strong>, and
                    others.
                </p>

                <p>
                    I love contributing in <strong>open source communities </strong>
                     and am open for any <strong>speaking opportunity, mentoring 
                    or any other help</strong> which you might need.
                </p>
                     
                <p>If that's the case, feel free to{" "}
                    <Link to="/contact" className={mainStyles.link}>
                        contact me
                    </Link>{" "}
                    or{" "}
                    <Link to="/about" className={mainStyles.link}>
                        get to know me a little better
                    </Link>
                    .
                </p>      
            </div>
        </Layout>
    )
}

export default IndexPage
