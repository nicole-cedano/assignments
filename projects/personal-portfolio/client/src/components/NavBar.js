import React from 'react'
import { Link } from 'react-router-dom'
import { useToggle } from "../shared/hooks"
const NavBar = () => {
    const { toggle, toggler } = useToggle(true)
    return (
        <div>
        <div onClick={toggler} className={`overlay overlay-${!toggle ? "open" : "closed"}`}></div>
        <button onClick={toggler} className={`rotate rotate-${!toggle ? "open" : "closed"}`}>|||</button>

        <div onClick={toggler} className={`nav nav-${!toggle ? "open" : "closed"}`}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </div>
        </div>
    )
}

export default NavBar


