import React from 'react'
import Juan from "./pics/Juan.png"
import Park from './pics/Park.png'
import api from './pics/api.png'
import {useToggle} from '../shared/hooks'

const Projects = () => {
    return (
        <div className="projects">
        <a><img  src={Juan} /></a>
        <a><img src={Park} /></a>
        <a><img src={api}/></a>
        </div>
    )
}

export default Projects