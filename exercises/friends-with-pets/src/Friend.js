import React from 'react'
import Pet from './Pet.js'



const Friend = (props) => {
    const mappedPets = props.pets.map((pet, i) => <Pet 
                                                name={pet.name}
                                                breed={pet.breed} 
                                                key ={i}/> )
    return (
        <box  className = 'friend'>
            <h3> {props.name}</h3>
            <h5>{props.age} years old</h5>
            <h5>owns:</h5>
            <ul>
                {mappedPets}
            </ul>
        </box>
    )

}













export default Friend