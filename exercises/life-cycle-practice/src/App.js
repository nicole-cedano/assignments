import React, { Component } from 'react'



class App extends Component {
    constructor() {
        super()
        this.state = {
            bgColor: "violet",
            bgColor2: "lightgoldenrodyellow",
            bgColor3: "blue",
            bgColor4: "limegreen"
        }
    }
    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            console.log(e)
            switch (e.which) {
                case 78:
                    this.setState({
                        bgColor: 'red'
                    })
                    break;
                case 73:
                    this.setState({
                        bgColor2: 'lightblue'
                    })
                    break;
                case 67:
                    this.setState({
                        bgColor3: 'indigo'
                    })
                    break;
                case 79:
                    this.setState({
                        bgColor4: 'orange'
                    })
                    break;
            }
        })
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <h1>Press Key On Box </h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: "10pt",
                    textAlign: 'center',
                    fontSize: '30pt'
                }}>

                    <p style={{
                        height: "100pt",
                        width: '100pt',
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
                        backgroundColor: this.state.bgColor

                    }} >N</p>
                    <p style={{
                        height: "100pt",
                        width: '100pt',
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
                        backgroundColor: this.state.bgColor2

                    }}>I</p>
                    <p style={{
                        height: "100pt",
                        width: '100pt',
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
                        backgroundColor: this.state.bgColor3

                    }}>C</p>
                    <p style={{
                        height: "100pt",
                        width: '100pt',
                        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ",
                        backgroundColor: this.state.bgColor4

                    }}>O</p>
                </div>
            </div>
        )
    }
}



















export default App 