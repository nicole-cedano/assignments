import React from 'react'

const InputForm = (props) => {
    const formStyle = {
        display: 'grid',
        width: "400pt",
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        alignItems: 'center',
        justifyContent: 'space around',
        gridGap: '10pt',
        border: "solid black 1pt",
        padding: '30pt'
    }
    const inputStyle = {
        display: 'flex',


    }
    return (
        <form style={formStyle}onSubmit={props.handleSubmit}>
           
                <input
                    type="text"
                    name="firstNameInput"
                    value={props.firstNameInputValue}
                    onChange={props.handleChange}
                    placeholder='First Name' />
                <input
                    type="text"
                    name="lastNameInput"
                    value={props.lastNameInputValue}
                    onChange={props.handleChange}
                    placeholder='Last Name' />
                <input
                    type="text"
                    name="emailInput"
                    value={props.emailInputValue}
                    onChange={props.handleChange}
                    placeholder='Email' />
                <input
                    type="text"
                    name="birthInput"
                    value={props.birthInputValue}
                    onChange={props.handleChange}
                    placeholder='Place of Birth' />
                <input
                    type="text"
                    name="phoneInput"
                    value={props.phoneInputValue}
                    onChange={props.handleChange}
                    placeholder='Phone' />
                <input
                    type="text"
                    name="foodInput"
                    value={props.foodInputValue}
                    onChange={props.handleChange}
                    placeholder='Favorite Food' />
                <input
                    style={{
                        gridColumn: "1/3",
                        height: '100px'
                    }}
                    type="text"
                    name="aboutInput"
                    value={props.aboutInputValue}
                    onChange={props.handleChange}
                    placeholder='Tell us about yourself' />
                <button>Submit</button>
        </form>
    )

}
export default InputForm