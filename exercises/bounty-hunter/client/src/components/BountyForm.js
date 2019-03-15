import React from 'react'
import {withBounties} from '../context/BountyProvider.js'
const BountyForm = props => {
    const {handleChange, handleSubmit, inputs: {firstName, lastName, living, type, bountyAmount }} = props
    console.log(props)
    return (
        <form className= 'bounty-form' onSubmit={handleSubmit}>
        <input 
        type = "text"
        onChange= {handleChange}
        value= {firstName}
        name= "firstName"
        placeholder= "First Name"/>
        <input 
        type = "text"
        onChange= {handleChange}
        value= {lastName}
        name= "lastName"
        placeholder= "Last Name"/>
        Check if living:
        <input 
        type = "checkbox"
        onChange= {handleChange}
        value= {living}
        name= "living"/>
        <input 
        type = "text"
        onChange = {handleChange}
        value= {type}
        name= "type"
        placeholder= "Sith or Jedi"/>
        <input 
        type = "text"
        onChange= {handleChange}
        value= {bountyAmount}
        name= "bountyAmount"
        placeholder= "Bounty Amount"/>
             <button>Add Bounty</button>
        </form>
    )
}
export default withBounties(BountyForm)