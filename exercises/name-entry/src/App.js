import React from 'react'
import NameForm from './NameForm.js'
import List from './List.js'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: '',
            names: []
        }
    }

    handleChange = (e) => {
        const { name } = e.target
        this.setState({
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
    render() {

        return (

            <div>
                <h1 style= {{
                textAlign: "center" , 
                border: "solid  1pt violet" , 
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                Enter Name</h1>
                <h1>{this.state.nameInput}</h1>
                <NameForm 
                    value={this.state.nameInput}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange} />
                <div>
                    <List names={this.state.names} />
                </div>
            </div>
        )
    }
}


export default App

