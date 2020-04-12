import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
    faMedium,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    version
                    hostname   
                }
            }
        }
    `)
    const metadata = data.site.siteMetadata

    return (
        <footer className={footerStyles.footer}>
            {/* <p className={footerStyles.line}>
                <FontAwesomeIcon icon={faCode} /> with{" "}
                <FontAwesomeIcon
                    icon={faHeart}
                    className={footerStyles.heart}
                />{" "}
                by {metadata.author} &copy; {new Date().getFullYear()}, built
                with
                <a href="https://www.gatsbyjs.org" alt="GatsbyJS">
                    <img
                        src="/images/gatsby-monogram.svg"
                        alt="GatsbyJS"
                        className={footerStyles.gatsbyLogo}
                    />
                </a>
            </p> */}
           
            <p className={footerStyles.social}>
                <a href="https://twitter.com/iamsaeeddev">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="https://github.com/iamsaeeddev">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://dev.to/iamsaeeddev">
                    <FontAwesomeIcon icon={faDev} />
                </a>

                <a href="https://medium.com/@iamsaeeddev">
                    <FontAwesomeIcon icon={faMedium} />
                </a>

                <a href="https://www.linkedin.com/in/iamsaeeddev/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </p>
            {/* <p className={footerStyles.small}>
                {metadata.hostname} v.{metadata.version}
            </p> */}
             <p className={footerStyles.small}>
                Built on the top of a theme by{" "}
           
                    Marc Backes
           
            </p>
        </footer>
    )
}

export default Footer
