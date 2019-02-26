import React from 'react'


const Footer = () => {
    // styling for the footer
    const footerStyle = {
        position: 'fixed',
        display: "flex",
        justifyContent: 'space-evenly',
        bottom: '0',
        backgroundColor: 'black',
        width: '100%',
        height: '30pt',
        color: 'white'

    }
    return (
        <div style ={footerStyle}>
            <p>roto-plumping@roto.com</p>
            <p>(012)345-6789</p>
            <p>Roto Rd., React, JS</p>
        </div>
    )

}





export default Footer