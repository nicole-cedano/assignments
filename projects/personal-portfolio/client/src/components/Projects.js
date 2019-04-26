import React from 'react'
import Juan from "./pics/Juan.png"
import Park from './pics/Park.png'
import api from './pics/api.png'
import Todo from './pics/Todo.png'
import Zen from './pics/Zen.png'

const Projects = () => {
    return (

        <div className="projects">
            <div className="gradient">
                <span className="project-card" style={{ background: `url(${Juan})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    Juan's Photography
                <a href="https://github.com/nicole-cedano/juan-photography">View Git</a>
                </span>
            </div>
            <div className="gradient">
                <span className="project-card" style={{ background: `url(${Park})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    Parking U
                    <a href="gradient">View App</a>
                </span>
            </div>
            <div className="gradient">
                <span className="project-card" style={{ background: `url(${api})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    Space Mumbo Jumbo
                <a href="http://spacemumbojumbo.surge.sh/">View App</a>
                </span>
            </div>
            <div className="gradient">
                <span className="project-card" style={{ background: `url(${Todo})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    Todo List
                <a href="http://todoaxiosnc.surge.sh/">View App</a>     
                </span>
            </div>
            <div className="gradient">
                <span className="project-card" style={{ background: `url(${Zen})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    Css Zen Garden
                <a href="http://csszengardennc.surge.sh/">View App</a>
                </span>
            </div>
        </div>
    )
}

export default Projects