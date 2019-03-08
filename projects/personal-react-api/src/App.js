import React from 'react'
import { Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home.js'
import KuaNumber from './components/KuaNumber.js'
import Compatibility from './components/Compatibility.js'
import Doggies from './components/Doggies.js'
import MercuryRetrograde from './components/MercuryRetrograde.js'
import Toggle from './shared/Toggle.js'
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
            <Route path='/KUA' component={KuaNumber} />
            <Route path='/Compatibility' component={Compatibility} />            
            <Route path='/Doggies' component={Doggies} />          
            <Route exact path='/IsMercuryInRetrograde' component={MercuryRetrograde} />
            </Switch>
        </div>
    )
}



export default withRouter(App);