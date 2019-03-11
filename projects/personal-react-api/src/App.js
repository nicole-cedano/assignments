import React from 'react'
import { Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home.js'
import ContactMe from './components/ContactMe.js'
import SpaceDogs from './components/SpaceDogs.js'
import MercuryRetrograde from './components/MercuryRetrograde.js'
import Toggle from './shared/Toggle.js'
import Footer from './components/Footer.js'
const App = () => {
    return (
        <div>
            <Toggle render= {({toggler, isToggled}) =>
            <>
            <NavBar  toggler={toggler} isToggled={isToggled} />
            <div onClick={toggler} className={`overlay overlay-${isToggled ? "open" : "closed"}`}></div>
            <button className={`rotate rotate-${isToggled ? "open" : "closed"}`} onClick={toggler}>|||</button>
            </>      
        }/>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={ContactMe} />
            <Route path='/spacedogs' component={SpaceDogs} />          
            <Route exact path='/ismercuryinretrograde' component={MercuryRetrograde} />
            </Switch>
            <Footer />
        </div>
    )
}



export default withRouter(App);