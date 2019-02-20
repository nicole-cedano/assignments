import React from 'react'

function Box(props) {
    return (
        <div className='box-div' style= {{backgroundColor: props.color}}>
            <header>
                <h1>{props.title}</h1>
            </header>
            <subheader>
                <h3>{props.subtitle}</h3>
            </subheader>
            <section>
                <p>{props.info}</p>
            </section>
        </div>
    )
}







export default Box