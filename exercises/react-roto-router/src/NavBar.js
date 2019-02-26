import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
// styling for the navbar
    const navStyle ={
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        height:'30pt',
        position: 'fixed',
        width: '100%',
        top: '0',
        padding: '5pt'
    }
    
    return (
        <div style={navStyle}>
            <Link style={{textDecoration: 'none', color: 'white'}}to='/'>Home</Link>
            <Link style={{textDecoration: 'none', color: 'white'}}to='/about'>About</Link>
            <Link style={{textDecoration: 'none', color: 'white'}}to='/services'>Services</Link>
        </div>
    )
}


export default NavBar

