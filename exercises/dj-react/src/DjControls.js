import React from 'react'



const DjControls = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.handleClear}>CLEAR</button>
                <button onClick={props.handleBW}>B/W</button>
                <button onClick={props.handleTop}>GrapeFizz</button>

            </div>
            <div>
                <button onClick={props.handleBottomLeft}> BL-Blue</button>
                <button onClick={props.handleBottomRight}>BR-Blue</button>
                <button onClick={props.handleCircles}>o</button>
            </div>
        </div>

    )


}


export default DjControls


