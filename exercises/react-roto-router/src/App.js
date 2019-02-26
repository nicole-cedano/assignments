import React from 'react'
import NavBar from './NavBar.js'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Footer from './Footer.js'

import { Switch, Route } from 'react-router-dom'


class App extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About}/>
                    <Route  path='/services' component={Services}/>
                </Switch>

                <Footer />

            </div>
        )
    }

}

export default App