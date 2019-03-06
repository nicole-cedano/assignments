import React, { Component } from 'react'
import Form from '../shared/Form.js'
import DateForm from '../shared/DateForm.js'
class MercuryRetrograde extends Component{
    constructor() {
        super()
        this.state = {
            date: ''
        }
    }
    render() {
        return (
            <div>
                <Form
                    render={props => <DateForm {...props} />}
                    inputs={{ date: this.state.date } } />
            </div>
        )
    }
}

export default MercuryRetrograde