import React from 'react'
import BoxesContainer from './BoxesContainer.js'
import DjControls from './DjControls.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color1: 'violet',
            color2: 'limegreen',
            color3: 'lightgoldenrodyellow',
            color4: 'orange',
            borderRadius1: '25pt',
            borderRadius2: '25pt',
            borderRadius3: '25pt',
            borderRadius4: '25pt',

        }

    }
    handleClear = () => {
        this.setState({
            color1: 'violet',
            color2: 'blue',
            color3: 'lightgoldenrodyellow',
            color4: 'orange'

        })
    }
    handleBW = () => {
        const blackWhite = ['black', 'white']
        const currentColor = blackWhite[Math.floor(Math.random() * blackWhite.length)]
        this.setState({
            color1: currentColor,
            color2: currentColor,
            color3: currentColor,
            color4: currentColor,
        })
    }
    handleTop = () => {
        this.setState({
            color1: 'purple',
            color2: 'purple'
        })
    }
    handleBottomLeft = () => {
        this.setState({
            color3: 'blue'
        })
    }
    handleBottomRight = () => {
        this.setState({
            color4: 'blue'
        })
    }
    handleCircles = () => {
        this.setState(prevState => {
            return{
                borderRadius1: prevState.borderRadius1 === '50pt' ? "25pt" : "50pt",
                borderRadius2: prevState.borderRadius2 === '50pt' ? "25pt" : "50pt",
                borderRadius3: prevState.borderRadius3 === '50pt' ? "25pt" : "50pt",
                borderRadius4: prevState.borderRadius4 === '50pt' ? "25pt" : "50pt",

            }


        })
    }
    


    render() {


        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <BoxesContainer state={this.state} borderRadius={this.borderRadius} />
                </div>
                <div>
                    <DjControls
                        handleBW={this.handleBW}
                        handleClear={this.handleClear}
                        handleTop={this.handleTop}
                        handleBottomLeft={this.handleBottomLeft}
                        handleBottomRight={this.handleBottomRight} 
                        handleCircles={this.handleCircles}/>
                </div>
            </div>
        )
    }
}








export default App