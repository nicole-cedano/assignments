import React from 'react'

const InputForm = (props) => {
    // styling for the overall form
    const formStyle = {
        display: 'grid',
        width: "400pt",
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        alignItems: 'center',
        justifyContent: 'space around',
        gridGap: '10pt',
        border: "solid black 1pt",
        padding: '30pt',
        borderRadius: '10pt',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
        margin: '10pt'

    }
    const inputStyle = {
        display: 'flex',
        border: 'solid black .95pt'
    }
    const buttonStyle ={
        width: '70pt',
        borderRadius: '5pt',
        border: 'solid black 1pt',
        fontSize: '12pt'
    }
    return (
        <form style={formStyle} onSubmit={props.handleSubmit}>

            <input
                pattern= '.{3,}'
                style={inputStyle}
                required
                type="text"
                name="firstNameInput"
                value={props.firstNameInputValue}
                onChange={props.handleChange}
                placeholder='First Name' />
            <input
                pattern= '.{3,}'
                style={inputStyle}
                required
                type="text"
                name="lastNameInput"
                value={props.lastNameInputValue}
                onChange={props.handleChange}
                placeholder='Last Name' />
            <input
                pattern= '.{3,}'
                style={inputStyle}
                required
                type="email"
                name="emailInput"
                value={props.emailInputValue}
                onChange={props.handleChange}
                placeholder='Email' />
            <input
                pattern= '.{3,}'
                style={inputStyle}
                required
                type="text"
                name="birthInput"
                value={props.birthInputValue}
                onChange={props.handleChange}
                placeholder='Place of Birth' />
            <input
                pattern= '.{3,}'
                style={inputStyle}
                required
                type="tel"
                name="phoneInput"
                value={props.phoneInputValue}
                onChange={props.handleChange}
                placeholder='Phone' />
            <input
                pattern= '.{3,}'
                style={inputStyle}
                type="text"
                required
                name="foodInput"
                value={props.foodInputValue}
                onChange={props.handleChange}
                placeholder='Favorite Food' />
            <textarea
            pattern='.{3,}'
                style={{
                    gridColumn: '1/3',
                    border: 'solid black 1pt'
                }}
                required
                type="text"
                name="aboutInput"
                value={props.aboutInputValue}
                onChange={props.handleChange}
                placeholder='Tell us about yourself'>Tell Us About Yourself</textarea>
            {/* adding div for button styling purpose */}
            <div
                style=
                {{
                    display: 'flex',
                    gridColumn: '1/3',
                    justifyContent: "center",
                }}>
                <button style={buttonStyle}> Submit</button> </div>
        </form>
    )

}
export default InputForm