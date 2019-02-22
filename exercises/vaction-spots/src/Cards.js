import React from 'react'
import PropTypes from 'prop-types'

const Cards = (props) => {
    let styleColor;
    if (props.timeToGo === 'Winter'){
        styleColor = 'ghostwhite'
    } else if (props.timeToGo === 'Summer'){
        styleColor = 'violet'

    } else if (props.timeToGo === 'Spring'){
        styleColor = 'lightgoldenrodyellow'

    } else if (props.timeToGo === 'Fall'){
        styleColor = 'orange'

    }
    let moneySign;
    if (props.price < 500){
        moneySign = '$'
    } else if (props.price < 1000){
        moneySign = '$$'
    } else if (props.price > 1000){
        moneySign = '$$$'
    }
    return (
        <div className='card' style = {{backgroundColor:styleColor}}>
            <h3>{props.place}</h3>
            <h5>{moneySign}{props.price}</h5>
            <h6>{props.timeToGo}</h6>
        </div>


    )
}

    Cards.propTypes = {
        place: PropTypes.string,
        price: PropTypes.number,
        timeToGo: PropTypes.string

    }













export default Cards