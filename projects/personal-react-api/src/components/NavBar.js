import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        // console.log(isToggled)
        <div onClick={props.toggler} className={`nav nav-${props.isToggled ? "open" : "closed"}`}>
            <Link to='/'>Home</Link>
            <Link to='/kua'>Kua Number</Link>
            <Link to='/compatibility'>Compatibility</Link>
            <Link to='/ismercuryinretrograde'>Mercury Retrograde</Link>
            <Link to='/doggies'>Doggies</Link>
        </div>
    )
}

export default NavBar