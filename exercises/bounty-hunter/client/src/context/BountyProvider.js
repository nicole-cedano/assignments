import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: []
        }
    }


    getBounties = () => {
        axios.get("/bounty").then(response => {
            console.log(response.data)
            this.setState({
                bounties: response.data
            })
        })
    }
    addBounty = newBounty => {
        axios.post("/bounty", newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }
    deleteBounty = _id => {
        axios.delete(`/bounty/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }



    render() {
        return (
            <div>
                <BountyContext.Provider
                    value={{
                        bounties: this.state.bounties,
                        getBounties: this.getBounties,
                        addBounty: this.addBounty,
                        deleteBounty: this.deleteBounty
                    }}>
                    {this.props.children}
                </BountyContext.Provider>
            </div>
        )
    }
}


export const withBounties = C => props => (
    <BountyContext.Consumer>
        {value => <C {...props} {...value} />}
    </BountyContext.Consumer>
)

export default BountyProvider