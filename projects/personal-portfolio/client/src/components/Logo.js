import React from 'react'
import { Redirect } from 'react-router-dom'
import {withRouter} from 'react-router-dom'


const Logo = (props) => {
    return (
        <h1 onClick={() => props.history.push("/")} className={"logo"}>Nicole Cedano</h1>
    )
}

export default withRouter(Logo)
