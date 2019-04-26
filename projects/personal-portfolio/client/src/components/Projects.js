import React from 'react'
import Juan from "./pics/Juan.png"
import Park from './pics/Park.png'
import api from './pics/api.png'
import Todo from './pics/Todo.png'
import Zen from './pics/Zen.png'

const Projects = () => {
    return (

        <div className="projects">
            <span className="project-card" style={{ background: `url(${Juan})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Juan's Photography
                <a href="https://github.com/nicole-cedano/juan-photography">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Park})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Parking U
                <a href="gradient">View App</a>
                <a href="https://github.com/nicole-cedano/vschool-group-proj">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${api})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Space Mumbo Jumbo
                <a href="http://spacemumbojumbo.surge.sh/">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/personal-react-api">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Todo})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Todo List
                <a href="http://todoaxiosnc.surge.sh/">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/axiosToDo">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Zen})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Css Zen Garden
                <a href="http://csszengardennc.surge.sh/">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/cssZenGarden">View Git</a>
                </div>
            </span>
        </div>
    )
}

export default Projects