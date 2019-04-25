import React from 'react'
import { Redirect } from 'react-router-dom'


const Logo = () => {
    return (
        <h1 onClick={() => <Redirect to="/"/>} className={"logo"}>Nicole Cedano</h1>
    )
}

export default Logo
