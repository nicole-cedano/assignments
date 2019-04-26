import React from 'react'
import Juan from "./pics/Juan.png"
import Park from './pics/Park.png'
import api from './pics/api.png'

const Projects = () => {
    return (
        <div className="projects">
            <span className="project-card" >
                <img src={Juan} />
                Juan's Photography
                <a href="https://github.com/nicole-cedano/juan-photography">View Git</a>
        <div className="project-overlay"></div>
            </span>

            <span className="project-card" >
                <img src={Park} />
                Parking U
        <div className="project-overlay"></div>
        <a href="https://parkingu.herokuapp.com/">View App</a>
            </span>
            <span className="project-card">
                <img src={api} />
                Space Mumbo Jumbo
                <a href="http://spacemumbojumbo.surge.sh/">View App</a>
        <div className="project-overlay"></div>
            </span>
        </div>
    )
}

export default Projects