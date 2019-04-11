import React, { Component } from 'react'
import Form from '../shared/Form.js'
import DateForm from '../shared/DateForm.js'
import { withInfo } from '../context/InfoProvider.js'
class MercuryRetrograde extends Component {
    constructor() {
        super()
        this.state = {
            date: ''
        }
    }
    render() {
        return (
            <div className='mercury' style={{ background: `url(http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2018/03/spectra_mercury.jpg?mw=600l)`, backgroundSize: "cover" }}>
                <h1>Is Mercury In Retrograde?</h1>
                <div className='grid-container-mercury'>
                    <div className="mr-info">
                        <span>What exactly is the science behind Mercury retrograde? First off, the name is deceptive.
                            It's not as if the planet actually reverses its orbit. Simply explained, Mercury retrograde describes an optical illusion which makes it look as if the planet is moving backwards from our viewpoint on earth. During this perceived backwards motion,
                             anything to do with communication, technology or contracts can get majorly screwed up. For more visit <a href={`https://www.horoscope.com/mercury-retrograde`}>Horoscope.com</a> ★ ★ ★</span>

                    </div>
                    <div className='mr-form'>
                        <h5>Enter a Date in the requested format to find out if Mercury is in Retrograde: </h5>
                        <Form
                            render={props => <DateForm {...props} />}
                            inputs={{ date: '',}}
                            submit={inputs => this.props.getRetrograde(inputs)}
                        />
                        <h3>{this.props.isRetrograde}</h3>
                    </div>
                </div>
            </div>
        )
    }
}



export default withInfo(MercuryRetrograde)