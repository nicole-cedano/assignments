import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            hitPeople: []
        }
    }

    componentDidMount() {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({
                hitPeople: response.data
            })
        }).catch(error => console.log(error))
    }


    render() {
        // styling within same file 
        const mainDiv = {
            backgroundImage: `url("https://images.unsplash.com/photo-1502824965758-f8a6043066f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")`,
            backgroundSize: 'contain',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }
        const nameDiv = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10pt',
            padding: '10pt',
    
        }
        const textStyle ={
            background: "rgba(255, 255, 255, 0.3) ",
        }
        const mappedBeings = this.state.hitPeople.map((item, i) => {
            return (
                <div key={i} style={{ 
                    backgroundImage: `url(${item.image})`,
                     height: 200,
                      width: 200, 
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      backgroundSize: 'cover', }}>
                    <h1 style={textStyle}>{item.name}</h1>
                </div>
            )
        })
        return (
            <div style={mainDiv}>
            <h1 style={{
                backgroundColor: 'red',
                textAlign: 'center',
                padding: '20pt',
                margin: '10pt',
                borderRadius: '10pt'

            }}>HIT LIST </h1>
                <div style={nameDiv}>
                    {mappedBeings}
                </div>


            </div>
        )
    }
}

export default App