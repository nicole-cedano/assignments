import React from 'react'
import Bounty from './Bounty.js'

const BountyList = props => {
    return (
        <div className="bounty-list">
            {props.bounties.map(bounty =>
                <Bounty
                    key={bounty._id}
                    {...bounty} />)
            }
        </div>
    )
}

export default BountyList 