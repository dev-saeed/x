import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyle from "./projects.module.scss"
import mainStyle from "../styles/main.module.scss"

import Skill from "../components/skill"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMicrochip,
    faHandPeace,
    faWrench,
    faGraduationCap,
    faSpaceShuttle,
    faServer,
    faFlask,
} from "@fortawesome/free-solid-svg-icons"
import {  
    faHtml5, faNpm, faDocker, faTrello,
     faCss3, faGulp, faGrunt, faServicestack, faReact, faNode, faJs, faPython, faAndroid, faAppStoreIos } from "@fortawesome/free-brands-svg-icons"


export const query = graphql`
    query {
        file(relativePath: { eq: "images/profile.jpg" }) {
            childImageSharp {
                fixed(width: 150) {
                    src
                }
            }
        }
    }
`

const AboutPage = props => {
    const profilePicture = (
        <img
            src={props.data.file.childImageSharp.fixed.src}
            alt="Marc Backes"
            className={aboutStyle.profilePicture}
        />
    )

    return (
        <Layout>
            <Head title="About" path={props.path} />
            <div className={aboutStyle.about}>
                <div className={aboutStyle.intro}>
                    <div className={aboutStyle.introText}>
                        <h1>
                        <FontAwesomeIcon icon={faHandPeace} />  What I've built  ?
                        </h1>
                        <p>
                            I have
                            experience of working with {" "}
                            <strong>innovative startups</strong> around the world in 
                            <strong>🧠 mental wellbeing, 🏥 healthcare, 💳 ecommerce,
                            👥 customer care</strong> and other domains. 
                            </p>
                            <p>
                            Other than that, I am active part of 🗼 open source communities 
                            and write <strong>📦 packages and 📚 libraries</strong> for developers.
                        </p>
                    </div>{" "}
                </div>

                {/* <hr className={aboutStyle.gradientLine} /> */}

                {/* <h1>
                    Work experience <FontAwesomeIcon icon={faLaptopCode} />
                </h1>
                <p>
                    <strong>Currently</strong> I am doing contract work on a
                    real-time full-stack web application
                </p>

                <LifeEvent
                    timePeriod="July 2017 - Current"
                    title="Freelancing full-stack web developer"
                    details="Marc Backes Software Labs"
                    location="Luxembourg 🇱🇺"
                    current={true}
                />

                <LifeEvent
                    timePeriod="April 2019 - Current"
                    title="Solutions Architect & Full-Stack Developer"
                    details="talkevent Software GmbH"
                    location="Germany 🇩🇪"
                    current={true}
                />
                <LifeEvent
                    timePeriod="November 2014 - March 2019"
                    title="Lead Full-Stack Developer"
                    details="talkevent Software GmbH"
                    location="Germany 🇩🇪"
                />
                <LifeEvent
                    timePeriod="September 2016 – June 2017"
                    title="CEO"
                    details="Venios, Inc."
                    location="USA 🇺🇸"
                />
                <LifeEvent
                    timePeriod="May 2014 – September 2014"
                    title="HUB iLab Veracruz"
                    details="Entrepreneur-in-Residence"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="March 2012 – May 2014"
                    title="Director of Engineering and Software Development"
                    details="Universidad de Sotavento"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="January 2013 – January 2014"
                    title="College Professor (Computer Science)"
                    details="Universidad de Sotavento"
                    location="Mexico 🇲🇽"
                />
                <LifeEvent
                    timePeriod="October 2011 – January 2012"
                    title="Mobile Application Developer"
                    details="EducDesign"
                    location="Luxembourg 🇱🇺"
                /> */}

                <hr className={aboutStyle.gradientLine} />

                <h1>
                    What are my skills <FontAwesomeIcon icon={faWrench} /> ?
                </h1>

                <div className={aboutStyle.skills}>
                   
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faHtml5} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons}  size="5x" icon={faCss3} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faJs} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faReact} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x"  icon={faNode} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons}  size="5x" icon={faNpm} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faServer} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faPython} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faDocker} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faAndroid} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faAppStoreIos} />
                    <FontAwesomeIcon className={aboutStyle.skillIcons} size="5x" icon={faTrello} />
                    {/* <FontAwesomeIcon icon={faDatabase} /> */}
                    {/* <Skill name="MongoDB" file="mongodb" progress={75} />
                    <Skill name="Express.js" file="expressjs" progress={60} />
                    <Skill name="Vue.js" file="vuejs" progress={80} />
                    <Skill name="Node.js" file="nodejs" progress={85} />
                    <Skill name="Gatsby.js" file="gatsbyjs" progress={50} />
                    <Skill name="Ruby on Rails" file="rails" progress={80} />
                    <Skill name="PHP" file="php" progress={85} />
                    <Skill name="jQuery" file="jquery" progress={85} />
                    <Skill name="MySQL" file="mysql" progress={90} />
                    <Skill name="WebRTC" file="webrtc" progress={50} /> */}
                </div>
                <hr className={aboutStyle.gradientLine} />

{/*
                
                <hr className={aboutStyle.gradientLine} />
                <h1>
                <FontAwesomeIcon icon={faFolderOpen} /> Open Source work 
                </h1>

                <h2>
                    Travel <FontAwesomeIcon icon={faPlane} />
                </h2>
                <p>
                    If you want to hire me, I'm interested to work in companies
                    that offer{" "}
                    <strong>
                        modern technologies such as Node.js, Vue.js, React.js
                    </strong>
                    , etc. I am looking for a role that challenges me and where
                    I can help designing solutions.
                </p>

                <h2>
                    Technology <FontAwesomeIcon icon={faMicrochip} />
                </h2>
                <p>
                    I'm fascinated by technological advances which companies
                    such as Tesla, SpaceX, Boston Dynamics make.
                </p>

                <h2>
                    Startups & Companies <FontAwesomeIcon icon={faRocket} />
                </h2>
                <p>
                    I have a big entrepreneurial and startup curiosity which is
                    devided in two fields. On one hand, small companies which
                    try to make it big such as{" "}
                    <a href="https://avena.io" className={mainStyle.link}>
                        Avena
                    </a>{" "}
                    (Mexican-originated fitness app). On the other hand, I like
                    following strategic moves and happenings in big players such
                    as <strong>Facebook, Netflix, Spotify</strong>.
                </p>

                <h2>
                    Coding <FontAwesomeIcon icon={faCode} />
                </h2>
                <p>
                    This is a classic cliché. After (or before) work, I enjoy
                    some coding on the side. Also, currently I'm focused on
                    catching up with current web technologies such as Node.js,
                    Vue.js, React.js, JAMstack (Gatsby, Nuxt).
                </p>

                <h2>
                    Cinema & TV <FontAwesomeIcon icon={faTv} />
                </h2>
                <p>
                    I love almost any kind of movie, but I always prefer DC and
                    Marvel movies. As of TV: I enjoy my sitcoms like
                    F·R·I·E·N·D·S (all-time favorite), HIMYM, TBBT as well as
                    superhero-themed shows (Flash, Arrow), dramas (Dexter,
                    Breaking Bad, GoT), among others.
                    <br />
                    <small>
                        (If you want to engange in lengthy conversations with
                        me, these are the way to go.)
                    </small>
                </p> */}
            </div>
        </Layout>
    )
}

export default AboutPage
