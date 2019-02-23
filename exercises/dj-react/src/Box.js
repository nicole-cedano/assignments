import React from 'react'


const Box = (props) => {

    const boxStyle = {
        borderRadius: props.borderRadius,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        alignItems: 'center',
        height: '100pt',
        width: '100pt',
        backgroundColor: props.color
    }


    return (
        <div style ={boxStyle}>
        </div>
    )
}





export default Box