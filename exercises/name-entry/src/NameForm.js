import React from 'react'


const NameForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            Name: <input
                type= 'text'
                name= 'nameInput'
                value={props.value}
                onChange={props.onChange}
                placeholder='Name' />
            <button>+</button>
        </form>


    )
}






export default NameForm