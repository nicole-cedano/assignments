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
                        ? <div style={living ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
                            <h1>{firstName} {lastName}</h1>
                            <h3> {type} </h3>
                            <h3>{bountyAmount}</h3>
                            <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                            <span onClick={toggler}>EDIT</span>
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