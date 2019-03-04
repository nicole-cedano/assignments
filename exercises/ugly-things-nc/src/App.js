import React, { Component } from 'React'
import { withUglyThings } from './shared/context/UglyThingsProvider.js'
import UglyForm from './components/UglyForm.js'
import Form from './shared/Form.js'
import UglyThingsList from './components/UglyThingsList.js'

class App extends Component {
    constructor() {
        super()
        this.setState = {
            title: '',
            description: '',
            imgUrl: ''
        }
    }
    componentDidMount(){
        this.props.getUglyThings()
    }
    handleChange 
    render() {
        return (
            <div>
                <UglyThingsList  
                uglyThings={this.props.uglyThings}
                />
            </div>
        )
    }
}



export default withUglyThings(App);