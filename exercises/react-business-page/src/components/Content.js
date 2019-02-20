import React from 'react'

function Content(props){
    return (
        <div className= 'main-content'>
        <box>
            <a href = {props.link}><img className = 'image'src ={props.image}></img></a>
            <p>
                {props.title}
            </p>
        </box>
        </div>
    )
}

export default Content
