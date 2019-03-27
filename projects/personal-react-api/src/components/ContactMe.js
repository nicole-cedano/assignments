import React, {Component} from 'react'
import {withInfo} from "../context/InfoProvider.js"

class ContactMe extends Component{
    componentDidMount(){
        this.props.getNasaData()
    }
    render(){
    return (
        <div className="contact-me-div"style={{ background: `url(${this.props.hdurls})`  }}>
            <div className="contact-me-overlay">
            <h1>Contact Me!</h1>
            <p>Nicole Cedano</p>
            <p>nicolecedanodev@gmail.com</p>
            </div>
        </div>
    )
}
}


export default withInfo(ContactMe)