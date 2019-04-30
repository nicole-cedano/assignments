import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Logo from './components/Logo.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import Resume from "./components/Resume.js"




const App = () => {
    return (
        <div className="page-wrapper">
            <Logo />
            <div className="grid" >
                <NavBar />
                <Switch>
                    <Route exact path="/" render={rProps => <Home {...rProps} />} />
                    <Route path="/contact" render={rProps => <Contact {...rProps} />} />
                    <Route path="/projects" render={rProps => <Projects {...rProps} />} />
                    <Route path="/resume" render={rProps => <Resume {...rProps} />} />
                </Switch>
            </div>
        </div>
    )
}




export default App