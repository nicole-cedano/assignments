import React, { Component } from 'react'
import { withInfo } from '../context/InfoProvider.js'


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
                        <img className="dogs" src={image}/>
                    </div>

            )
        })
        console.log(mappedDoggies)
        return (
            <div className='main-dog-div' style={{ background: `url(${this.props.hdurls})` }}>
                <h1>Woof!</h1>
                <h3>Dogs, we don't deserve them. Here are random 12 pix of dogs!</h3>
                <div className="dog-picture-wrapper">
                    {mappedDoggies}
                </div>
            </div>
        )
    }
}


export default withInfo(SpaceDogs);