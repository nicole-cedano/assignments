import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        // console.log(isToggled)
        <div onClick={props.toggler} className={`nav nav-${props.isToggled ? "open" : "closed"}`}>
            <Link to='/'>Home</Link>
            <Link to='/ismercuryinretrograde'>Mercury Retrograde</Link>
            <Link to='/spacedogs'>Space Dogs</Link>
            <Link to='/contact'>Contact Me</Link>
        </div>
    )
}

export default NavBar