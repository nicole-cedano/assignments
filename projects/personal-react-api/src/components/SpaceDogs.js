import React, { Component } from 'react'
import { withInfo } from '../context/InfoProvider.js'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


class SpaceDogs extends Component {
    componentDidMount() {
        this.props.getDoggies()
        this.props.getNasaData()
    }
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const mappedDoggies = this.props.doggies.map((image, i) => {
            console.log(image)
            return (
                    <div key={i}>
                        <img className='carousel-div' src={image} />
                    </div>
            )
        })
        console.log(mappedDoggies)
        return (
            <div className='main-dog-div' style={{ background: `url(${this.props.hdurls})` }}>
                <h1>Woof!</h1>
                <h3>Dogs, we don't deserve them. Here are random 10 pix of dogs!</h3>
                <div className="carousel-div">
                <Slider 
                autoplay={true}
                {...settings} 
                arrows={true}>
                {mappedDoggies}
                </Slider>
                </div>
            </div>
        )
    }
}


export default withInfo(SpaceDogs);