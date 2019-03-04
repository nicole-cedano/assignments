import React from 'react'
import UglyThing from './UglyThing.js'


const UglyThingsList = (props) => {
    const mappedUglyThings = props.todos.map(uglyThing =>
        <UglyThing 
        {...uglyThing}
        /> )

        return (
        <div>
        {mappedUglyThings}
        </div>)
    
}
export default UglyThingsList
