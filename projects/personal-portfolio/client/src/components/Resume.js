import React from 'react'
import { useToggle } from '../shared/hooks'
import resume from "./NicoleCedanoResume.png"


const Resume = () => {
    const { toggler, toggle } = useToggle(true)
    return (
        <div>
            <button onClick={toggler} className={`resbutton resbutton-${!toggle ? "open" : "closed"}`}>View My Resume</button>
            <img src={resume} onClick={toggler} className={`resume resume-${!toggle ? "open" : "closed"}`} />
        </div>
    )
}

export default Resume
