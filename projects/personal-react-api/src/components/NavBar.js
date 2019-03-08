import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        // console.log(isToggled)
        <div onClick={props.toggler} className={`nav nav-${props.isToggled ? "open" : "closed"}`}>
            <Link to='/'>Home</Link>
            <Link to='/KUA'>Kua Number</Link>
            <Link to='/Compatibility'>Compatibility</Link>
            <Link to='/IsMercuryInRetrograde'>Mercury Retrograde</Link>
            <Link to='/Doggies'>Doggies</Link>
        </div>
    )
}

export default NavBar