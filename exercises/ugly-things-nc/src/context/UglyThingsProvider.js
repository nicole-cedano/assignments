import React, { Component } from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

class UglyThingsProvider extends Component {
    constructor() {
        super()
        this.setState = {
            uglyThings: [],
        }
        this.url = "https://api.vschool.io/nicole/todo"
    }

    getUglyThings = () => {
        axios.get(this.url).then(response => {
            this.setState({
                uglyThings: response.data
            })
        })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <UglyContext.Provider
            value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.state.getUglyThings

            }}>

                {this.props.children}
            </UglyContext.Provider>
        )

    }
}


export const withUglyThings = C => props => (
    <UglyContext.Consumer>
        {value=> <C {...props} {...value} /> }
    </UglyContext.Consumer>
)



export default UglyThingsProvider