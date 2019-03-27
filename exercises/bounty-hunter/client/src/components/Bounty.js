import React from 'react'
import { withBounties } from '../context/BountyProvider.js'
import Toggle from '../shared/Toggle.js'
import Form from '../shared/Form.js'
import BountyForm from './BountyForm.js';


const Bounty = props => {
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    return (
            <div>
            <Toggle render={({ toggler, isToggled }) =>
                <>
                    {!isToggled
                        ? <div className='bounty-card-div' style={
                            type === 'Jedi' ? { boxShadow: '0 0 5px rgba(81, 203, 238, 1)'}
                            : { boxShadow: "2px 2px 5px red" }
                            }>
                            <h2>{firstName} {lastName}</h2>
                            <h3> {type} </h3>
                            <h3>{bountyAmount}</h3>
                            <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                            <span onClick={toggler}>Click here to EDIT</span>
                        </div>
                        : <Form
                            render={formProps => <BountyForm {...formProps} toggler={toggler} btnTxt="Submit Edit" />}
                            inputs={{firstName , lastName, living, bountyAmount, type }}
                            submit={inputs => props.editBounty(_id, inputs)} />
                    }
                </>
            } />
        </div>
    )
}

export default withBounties(Bounty)