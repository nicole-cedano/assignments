import React, { Components } from 'react'
import UglyForm from './UglyForm'
import Toggle from "./src/shared/Toggle.js"

class UglyThing extends Components {
    constructor(props) {
        super(props)
        this.setState = {
            title: props.title,
            imgUrl: props.imgUrl,
            descirption: props.descirption
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            descirption: this.state.descirption
        }

    }
    render() {
        const { title, imgUrl, description } = this.props
        return (
            <div>
                <Toggle render={({ isToggled, toggler }) => 
                    <>
                    {!isToggled
                    ? <div className='ugly-thing-div' style={{ background: `url(${imgUrl})` }}>
                        <h1>{title}</h1>
                        <h4>{description}</h4>
                        <button onClick={toggler}>Edit</button>
                    </div>
                    : <div className='edit-ugly-thing'>
                        <UglyForm
                            {...this.state} />

                        <button onClick={toggler}>CLOSE</button>
                    </div>
                }
                </>
                 }/>
            </div>
        )
    }
}

export default UglyThing