import React from 'react'
import CounterDisplay from './CounterDisplay.js'
import CounterControls from './CounterControls.js'
class App extends React.Component {
    constructor(){
        super ()
        this.state = {
            counter: 0

        }
    }
        handleIncrement = () => {
            this.setState(prevState =>{
                return {
                counter: prevState.counter + 1
                }
            })
        }
        handleDecrement = () => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter - 1
                }
            })
        }
        handleMultiply = () => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter * 2
                }
            })
        }
        handleDivide = () => {
            this.setState(prevState => {
                return {
                    counter: prevState.counter / 10
                }
            })
        }
        handleClear = () => {
            this.setState(prevState => {
                return {
                    counter: 0
                }
            })
        }
    render(){
        console.log(this.state.counter)
        return (
            <div>
                <CounterDisplay counter={this.state.counter} />
                <CounterControls 
                            handleIncrement = {this.handleIncrement} 
                            handleDecrement ={this.handleDecrement} 
                            handleMultiply ={this.handleMultiply}
                            handleDivide={this.handleDivide}
                            handleClear = {this.handleClear}/>

            </div>
        )

    }
    

}



export default App