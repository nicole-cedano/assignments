import React, { Component } from 'react'
import { withInfo } from '../context/InfoProvider.js'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class SpaceDogs extends Component {
    componentDidMount() {
        this.props.getDoggies()
        this.props.getNasaData()
    }
    render() {
        const mappedDoggies = this.props.doggies.map((image, i) => {
            return (
                <div className="carousel-container"key={i}>
                    <img className='dog-pictures'src={image} />
                    <p className="legend">Random Pup!</p>
                </div>
            )
        })
        console.log(mappedDoggies)
        return (
            <div className='main-dog-div' style={{background: `url(${this.props.hdurls})` }}>
                <h1>Woof!</h1>
                <h3>Dogs, we don't deserve them. Here are random 10 pix of dogs!</h3>
                <div className="carousel-div">
                    <Carousel  
                    useKeyboardArrows= "false" 
                    autoPlay
                    axis="vertical"
                    infiniteLoop>
                    {mappedDoggies}
                    </Carousel>
                </div>
            </div>
        )
    }
}


export default withInfo(SpaceDogs);