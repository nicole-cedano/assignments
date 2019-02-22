import React from 'react'
// import Color from './Color.js'
import Person from './Person.js'
const App = () => {
    // const colors = ['green', 'yellow','purple', 'black', 'blue', 'orange', 'pink', 'red']

    // const mappedColors = colors.map((color, i) =>  <h1 key = {i}>{i+1}: {color}</h1>)
    // const mappedColors = colors.map((color, i) => <Color color={color} key = {i} />)

    const people = [
        {
            name: 'Rick',
            age: 70,
            favColor: 'teal',
            friends:['Morty, Birdman']
        },
        {
            name: 'Morty',
            age: 13,
            favColor: 'yellow',
            friends:['Rick, Jerry, Birdman']

        },
        {
            name: 'Jerry',
            age: 54,
            favColor: 'purple',
            friends:['Morty, Birdman']


        },
        {
            name: 'Birdman',
            age: 135,
            favColor: 'brown',
            friends:['Morty, Rick']

        }
    ]
    const mappedCharacters = people.map((character, i) => 
                                                <Person 
                                                key ={i}
                                                name = {character.name} 
                                                age ={character.age} 
                                                favColor={character.favColor}
                                                friends = {character.friends}/>)
    
    return (
        <div>
            {/* <h1>My Mapped Colors</h1> */}
            {/* { mappedColors } */}
            {mappedCharacters}
        </div>
    )
}

export default App

