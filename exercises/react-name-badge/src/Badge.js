import React from 'react'

const Badge = props => {
    console.log(props)
    return (
        <div>
            <p>Name: {props.badge.firstNameInput} {props.badge.lastNameInput}</p>    
            <p>Email: {props.badge.emailInput}</p>
            <p>Place of Birth: {props.badge.birthInput}</p>
            <p>Phone: {props.badge.phoneInput}</p>
            <p>Favorite Food: {props.badge.foodInput}</p>
            <p>{props.badge.aboutInput}</p>
        </div>
    )

}





export default Badge