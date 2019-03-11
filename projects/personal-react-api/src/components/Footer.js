import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <p>Made By Nicole Cedano</p>
            <Link to='/contact'>Contact Me</Link>
        </div>
    )
}

export default Footer