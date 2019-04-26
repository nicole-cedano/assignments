import React from 'react'
import {SocialIcon} from 'react-social-icons'

const Contact = () => {
    return (
        <div className="contact">
        <p className="contact-message">Thank you for visiting my site, if you'd like to connect, my linkedin, github, and email are listed down below.</p>
            <div className="icons">
            <SocialIcon style={{height: "80px" ,width: "80px"}} url="https://www.linkedin.com/in/nicolecedano"/>
            </div>
            <div className='icons'>
            <SocialIcon style={{height: "80px" ,width: "80px"}} url="https://github.com/nicole-cedano" />
            </div>
            <a className="email-me" href="mailto: nicolecedanodev@gmail.com">Email Me</a>
        </div>
    )
}

export default Contact