import React from 'react'
import Badge from './Badge.js'

const BadgeList = (props) => {
    const mappedBadges = props.badges.map((badge, i) => <Badge key={i} badge={badge} />)

    return (
        <div>
            {mappedBadges}
        </div>

    )
}





export default BadgeList