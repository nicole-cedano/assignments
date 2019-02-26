import React from 'react'
import Name from './Name.js'

const List = props => {
    const mappedNames = props.names.map((name, i) => <Name key={i} name={name} />)
    return (
        <ul style ={{
            display: "flex" , 
            flexDirection: 'column' , 
            justifyContent: "center", 
            alignItems: 'center'}}>
            {mappedNames}
        </ul>
    )
}






export default List