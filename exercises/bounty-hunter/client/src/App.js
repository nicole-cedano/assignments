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
            <div className="main-div" style={{background: `url(https://thumbs.gfycat.com/DefenselessMealyAmericanblackvulture-small.gif)`, backgroundSize: "cover"}}>
                <h1 className="header">Bounty Hunter</h1>
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
                            <button onClick={toggler}>ADD</button>
                        }
                            </>
                        }/>
                </div>
                <div className="bounty-list">
                    <BountyList
                        bounties={this.props.bounties}
                        inputs={{ firstName: '', lastName: '', living: "", bountyAmount: '', type: '' }}
                    />
                </div>
            </div>
        )
    }
}






export default withBounties(App);