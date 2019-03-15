import React, { Component } from 'react'
import BountyForm from './components/BountyForm.js'
import Form from './shared/Form.js'
import BountyList from './components/BountyList.js'
import { withBounties } from './context/BountyProvider.js'
import Toggle from './shared/Toggle.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: ""
        }
    }
    componentDidMount() {
        this.props.getBounties()
    }

    render() {
        return (
            <div>
                <Toggle render={({ isToggled, toggler }) =>
                    <>
                        {!isToggled
                            ? <Form
                                render={formProps => <BountyForm {...formProps} btnTxt="Add Bounty" toggler={toggler} />}
                                inputs={{ firstName: '', lastName: '', living: "", bountyAmount: '', type: '' }}
                                submit={inputs => this.props.addBounty(inputs)}
                            />
                            :
                            <button onClick={toggler}>ADD BOUNTY</button>
                        }
                            </>
                        }/>
                <>

                    <BountyList
                        bounties={this.props.bounties}
                        inputs={{ firstName: '', lastName: '', living: "", bountyAmount: '', type: '' }}
                    />
                </>
            </div>
        )
    }
}






export default withBounties(App);