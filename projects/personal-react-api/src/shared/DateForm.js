import React from 'react'


const DateForm = props => {
    const {handleChange, handleSubmit, inputs: { date}} = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type = "number"
            onChange = {handleChange}
            value= {date}
            name="birthdate"
            placeholder= 'YYYY-MM-DD'
            />
            <button>Submit</button>
        </form>
    )
}

export default DateForm 