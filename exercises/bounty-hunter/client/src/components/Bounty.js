import React from 'react'
import {withBounties} from '../context/BountyProvider.js'

const Bounty = props => {
    const { firstName, lastName, living, bountyAmount, type, _id} = props
    return (
        <div style= {living ? {backgroundColor: "green"} : {backgroundColor: "red"} }> 
           <h1>{firstName} {lastName}</h1> 
           <h3> {type} </h3>
           <h3>{bountyAmount}</h3>
           <button onClick={() => props.deleteBounty(_id)}>Delete</button>
        </div>
    )
}

export default withBounties(Bounty)