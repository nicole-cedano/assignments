import React from 'react'
import Typing from 'react-typing-animation'
import nicole from './pics/Nicole.jpg'

const Home = () => {
    return (
        <div className="home-wrap">
        <img className="nicole-pic" src={nicole} />

        <div className="intro" >
            <Typing>
                <h2>Hola <span aria-label="hand" role="img">👋🏽</span></h2>
                <h2>I'm a Fullstack</h2>
                <h2>Web Developer<span aria-label="girl" role="img">👩🏽‍💻</span></h2>
                <h2>I <span aria-label="heart" role="img">💓</span> learning,</h2>
                <h2>collaboration, and</h2>
                <h2>turning complex ideas</h2>
                <h2>into beautiful apps.</h2>
                <h2> Soy Mexicana!<span aria-label="flag" role="img">🇲🇽</span></h2>
            </Typing>
        </div>
        </div>
    )
}

export default Home