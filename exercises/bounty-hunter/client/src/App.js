import React, { Component } from 'react'
import BountyForm from './components/BountyForm.js'
import Form from './shared/Form.js'
import BountyList from './components/BountyList.js'
import { withBounties } from './context/BountyProvider.js'


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
                <Form 
                render= {props => <BountyForm {...props} />}
                inputs= {{firstName: '', lastName: '',living: "", bountyAmount: '', type: '' }}
                submit= {inputs => this.props.addBounty(inputs)}
                />
                <BountyList 
                bounties={this.props.bounties}
                />
            </div>
        )
    }
}






export default withBounties(App);