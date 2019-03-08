import React, { Component } from 'react'
import { withInfo } from '../context/InfoProvider.js'
import Toggle from '../shared/Toggle.js'
class Home extends Component {
    componentDidMount() {
        this.props.getNasaData()
    }
    render() {
        return (
            <div className="main-home-div" style={{ background: `url(${this.props.hdurls})`, backgroundSize: "cover" }}>
                <h1> Welcome, Earthlings!</h1>
                <div className="home-intro">
                    <p>Hello, World! My name is Nicole Cedano and this is my first React-API project!
                        Originally, this was supposed to be an Astrology page, but the beauty of an API working in postman then not on your local host is wonderful,
                        so now this is a buncha space mumbo jumbo/things that I like!
                        </p>
                </div>
                <div className="home-intro">
                    <p>
                    The Mercury Retrograde page is powered by https://mercuryretrogradeapi.com. You are able to calculate if any day you request falls on retrograde. The Doggies page is powered by https://dog.ceo/dog-api/documentation/random, it returns 10 random pictures of dogs back!  </p>
                </div>
                <div className="home-intro">
                    <p>
                        My home background image is powered by Nasa using their APOD api endpoint,  https://api.nasa.gov/planetary/apod. Click the toggle below to view the whole image along with all the information about it.
                     </p>
                </div>
            <div className="space-image-div">
                <Toggle render={({ isToggled, toggler }) =>
                    <Toggle render={({ toggler: closeToggler}) => 
                    <>
                        {!isToggled
                            ?
                            <button className="space-button" onClick={toggler}>Space Me</button>
                            :
                            <div onClick={toggler} className="toggled-space-img">
                                <img className="space-image" src={`${this.props.hdurls}`} alt="nasa" />
                                <div className="image-info">
                                <p>Copyright: {this.props.copyrights}</p>
                                <p> Today's date: {this.props.dates}</p>
                                <p>Title: {this.props.titles}</p>
                                <p> About this picture: {this.props.explanations} </p>
                                <button onClick={closeToggler}>Close</button>
                                </div>
                            </div>
                        }
                    </>
                }/>
                } />
            </div>
                </div >
                )

    }
}

export default withInfo(Home)