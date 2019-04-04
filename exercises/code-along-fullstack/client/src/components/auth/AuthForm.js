import React from 'react'


const AuthForm = props => {
    const {handleChange, handleSubmit, inputs: {username, password}, btnText} = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name ="" 
                onChange={handleChange} 
                value={username} 
                placeholder="Username" 
                required/>
            <input 
                type="password" 
                name ="" 
                onChange={handleChange} 
                value={password} 
                placeholder="Password" 
                required/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm 