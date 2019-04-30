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
                <a href="https://github.com/nicole-cedano/juan-photography" target="_blank" rel="noopener noreferrer">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Park})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Parking U
                <a href="https://parkingu.herokuapp.com/" target="_blank" rel="noopener noreferrer">View App</a>
                <a href="https://github.com/nicole-cedano/vschool-group-proj" target="_blank" rel="noopener noreferrer">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${api})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Space Mumbo Jumbo
                <a href="http://spacemumbojumbo.surge.sh/" target="_blank" rel="noopener noreferrer">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/personal-react-api" target="_blank" rel="noopener noreferrer">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Todo})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Todo List
                <a href="http://todoaxiosnc.surge.sh/" target="_blank" rel="noopener noreferrer">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/axiosToDo" target="_blank" rel="noopener noreferrer">View Git</a>
                </div>
            </span>

            <span className="project-card" style={{ background: `url(${Zen})`, backgroundSize: "cover", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="project-overlay">
                    Css Zen Garden
                <a href="http://csszengardennc.surge.sh/" target="_blank" rel="noopener noreferrer">View App</a>
                <a href="https://github.com/nicole-cedano/assignments/tree/master/projects/cssZenGarden" target="_blank" rel="noopener noreferrer">View Git</a>
                </div>
            </span>
        </div>
    )
}

export default Projects