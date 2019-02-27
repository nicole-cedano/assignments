import React from 'react'
import InputForm from './InputForm.js'
import BadgeList from './BadgeList.js'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            birthInput: '',
            phoneInput: '',
            foodInput: '',
            aboutInput: '',
            badges: []

        }
    }
    handleChange = (e) => {
        const { name } = e.target
        this.setState({
            [name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        let badgeObj = {
            firstNameInput: this.state.firstNameInput,
            lastNameInput: this.state.lastNameInput,
            emailInput: this.state.emailInput,
            birthInput: this.state.birthInput,
            phoneInput: this.state.phoneInput,
            foodInput: this.state.foodInput,
            aboutInput: this.state.aboutInput,
        }
        this.setState(prevState => {
            return {
                badges: [...prevState.badges, badgeObj],

                firstNameInput: '',
                lastNameInput: '',
                emailInput: '',
                birthInput: '',
                phoneInput: '',
                foodInput: '',
                aboutInput: ''
            }
        })
    }



    render() {
        // styling for the page 
        const mainStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }
        return (
            <div style={mainStyle}>
                <InputForm
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    firstNameInputValue={this.state.firstNameInput}
                    lastNameInputValue={this.state.lastNameInput}
                    emailInputValue={this.state.emailInput}
                    birthInputValue={this.state.birthInput}
                    phoneInputValue={this.state.phoneInput}
                    foodInputValue={this.state.foodInput}
                    aboutInputValue={this.state.aboutInput}/>
        
                <div>
                    <BadgeList badges={this.state.badges} />
                </div>
            </div>
            )
    }
}

export default App