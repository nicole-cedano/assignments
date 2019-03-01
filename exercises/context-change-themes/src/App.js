import React from 'react'
import { withTheme } from './context/ThemeProvider.js'
import './styles.css'

const App = props => {
    return (
        <div className= "main">
            <h1> </h1>
            <div className={`home-${props.theme}`}>
                <p>
                    YOU HAPPY OR MAD OR ANGSTY OR CHEERFUL?
            </p>
                <p>
                    CLICK BUTTON FOR THEME THAT REFLECTS WHAT YOU FEEL...
            </p>
            </div>
            <div>
                <button onClick={props.toggleTheme}>I'm feeling {props.theme ===  "light" ? "dark" : "light"}</button>
            </div>
        </div>
    )

}




export default withTheme(App)