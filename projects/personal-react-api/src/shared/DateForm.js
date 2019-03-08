import React from 'react'


const DateForm = props => {
    const {handleChange, handleSubmit, inputs: { date}} = props
    return (
        <form className="date-form" onSubmit={handleSubmit}>
            <input 
            type = "text"
            onChange = {handleChange}
            value= {date}
            name="date"
            placeholder= 'YYYY-MM-DD'
            />
            <button>Submit</button>
        </form>
    )
}

export default DateForm 