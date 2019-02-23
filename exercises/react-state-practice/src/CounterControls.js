import React from 'react'
import PropTypes from 'prop-types'


const CounterControls = props => {
    return (
        <div>
              <button onClick = {props.handleIncrement}> + </button>
              <button onClick = {props.handleDecrement}> - </button>
              <button onClick = {props.handleMultiply}> * 2</button>
              <button onClick = {props.handleDivide}> / 10 </button>
              <button onClick = {props.handleClear}> AC </button>


        </div> 
    )
}

CounterControls.propTypes={
    handleDecrement: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleMultiply: PropTypes.func.isRequired

}

export default CounterControls
