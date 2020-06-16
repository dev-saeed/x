import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import mainStyle from "../styles/main.module.scss"
import contactStyle from "./contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import {
    faTwitter,
    faGithub,
    faDev,
    faLinkedin,
    faPhone,
    faMedium,
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = (props) => {
    return (
        <Layout>
            <Head title="Contact"  path={props.path} />
            <h1>
                <FontAwesomeIcon icon={faPhoneAlt} /> How to contact me ?
                </h1>
                <br/>
            <p>
                You can contact me via&nbsp;
                <a
                    href="https://twitter.com/mrsaeeddev"
                    target="_blank"
                    class={mainStyle.link}
                >
                    Twitter <FontAwesomeIcon icon={faTwitter} />
                </a>
                &nbsp;or&nbsp;
                <a
                    className={mainStyle.link}
                    target="_blank"
                    href="mailto:saeed_dev@yahoo.com"
                    alt="Mail to saeed_dev@yahoo.com"
                >
                    E-mail&nbsp;<FontAwesomeIcon icon={faEnvelope} />&nbsp;
                </a>. Feel free to check out my social media presence below to get to know me better.
            </p>
            <div className={contactStyle.icons}>
                <a
                    href="https://twitter.com/mrsaeeddev"
                    target="_blank"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                    href="https://github.com/mrsaeeddev"
                    class={contactStyle.iconLink}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://dev.to/mrsaeeddev" target="_blank" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faDev} />
                </a>

                <a href="https://medium.com/@mrsaeeddev" target="_blank" class={contactStyle.iconLink}>
                    <FontAwesomeIcon icon={faMedium} />
                </a>

                <a
                    href="https://www.linkedin.com/in/mrsaeeddev/"
                    target="_blank"
                    class={contactStyle.iconLink}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </Layout>
    )
}

export default ContactPage
