import React , { Component } from 'react'
import { withInfo } from '../context/InfoProvider.js'


class Doggies extends Component {
    componentDidMount(){
        this.props.getDoggies()
    }
    render(){
        const mappedDoggies = this.props.doggies.map((image, i) => {
            return (
                <div>
                <img src={`${image}`} className='dog-picture'/>
                 </div>
            )
        })
        console.log(mappedDoggies)
    return (
        <div className='main-dog-div'>
        <h1>Woof!</h1>
        <div className="dog-grid">
        <p>Dogs, we don't deserve them.</p>
        {mappedDoggies}
        </div>
        </div>
    )
    }
} 


export default withInfo(Doggies);