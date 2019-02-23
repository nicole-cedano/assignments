import React from 'react'
import Box from './Box'


const BoxesContainer = (props) => {
    const boxGrid = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: "center",
        justifyContent: 'space-around',
        gridGap: '50pt',
    }

    return (
        <div style= {boxGrid}>
            <Box color={props.state.color1} borderRadius = {props.state.borderRadius1} />
            <Box color={props.state.color2} borderRadius = {props.state.borderRadius2}/>
            <Box color={props.state.color3} borderRadius = {props.state.borderRadius3}/>
            <Box color={props.state.color4} borderRadius = {props.state.borderRadius4}/>
        </div>
    )



}





export default BoxesContainer