import React from 'react'
import NameForm from './NameForm.js'
import List from './List.js'


class App extends React.Component {
    constructor() {
    super ()
    this.state = {
        nameInput : '',
        names : []
    }
} 

handleChange = (e) => {
    const {name} = e.target
    this.setState ({
        [name]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault()

    this.setState(prevState => {
        return {
            nameInput: "",
            names: [...prevState.names, this.state.nameInput]
        }
    })



}
render () {

    const mappedNames = this.state.names.map((name, i) => <h1 key = {i}>{name}</h1>)


    return (

        <div>
            <h1>{this.state.nameInput}</h1>
            <NameForm 
            value = {this.state.nameInput}
            onSubmit = {this.handleSubmit}
            onChange = {this.handleChange}/>
            <div>
                <List names={this.state.names}/>
            </div>
        </div>
    )
}
}


export default App

