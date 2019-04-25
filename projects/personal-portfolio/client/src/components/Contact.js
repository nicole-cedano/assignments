import React from 'react'
import {SocialIcon} from 'react-social-icons'

const Contact = () => {
    return (
        <div className="contact">
            <div className="icons">
            <SocialIcon style={{height: "80px" ,width: "80px"}} url="https://www.linkedin.com/in/nicolecedano"/>
            <SocialIcon style={{height: "80px" ,width: "80px"}} url="https://github.com/nicole-cedano" />
            </div>
            <a className="email-me" href="mailto: nicolecedanodev@gmail.com">Email Me</a>
        </div>
    )
}

export default Contact