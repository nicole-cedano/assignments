import React, { Component } from 'react'
import axios from 'axios'

const InfoContext = React.createContext()

class InfoProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRetrograde: "",
            copyrights: "",
            dates: "",
            explanations: "",
            hdurls: "",
            titles: "",
            doggies: []
        }
        // storing whatever api keys i need for this project here 
        this.nasaKey = "mgqiJRvN21LOHGyNKVUUBNRdBgDlsakzpkFWRgRa"
    }
// methods to recieve the information i will be needing 
    getRetrograde = ({ date }) => {
        axios.get(`https://mercuryretrogradeapi.com?date=${date}`).then(response => {
            console.log(response.data.is_retrograde)
            this.setState({
                isRetrograde: JSON.stringify(response.data.is_retrograde)
            })
        })
            .catch(error => console.log(error))
    }
    // using async to get my nasa data because I am using multiple units of info
    getNasaData = async () => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`)
            console.log(response.data)
            const { copyright, date, explanation, hdurl, title } = response.data
            this.setState({
                copyrights: copyright,
                dates: date,
                explanations: explanation,
                hdurls: hdurl,
                titles: title
            })
        } catch (err) {
            console.log(err)
        } finally {
            return 'error'
        }
    }

    getDoggies = () => {
        axios.get("https://dog.ceo/api/breeds/image/random/12").then(response => {
            const { message } = response.data
            this.setState ({
                doggies: message
            })
    }).catch(err => console.log(err))
    }
        render() { 
            // when setting properties I didnt want to have to write all my state units so i set the spread operator 
            // when needing to use these props you will need to use this.prop beforehand
            return (
                <InfoContext.Provider
                    value={{     
                        ...this.state,
                        isRetrograde: this.state.isRetrograde,
                        getRetrograde: this.getRetrograde,
                        getNasaData: this.getNasaData,
                        getDoggies: this.getDoggies
                    }}>
                    {this.props.children}
                </InfoContext.Provider>
            )
        }
    }
// setting InfoContext consumer you will need to use withInfo

export const withInfo = C => props => (
    <InfoContext.Consumer >
        {value => <C {...props} {...value} />}
    </InfoContext.Consumer>
)

export default InfoProvider