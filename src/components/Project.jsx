import linkSvg from "../assets/img/link-icon.svg";
import data from "../data/data.json"; // Import JSON data

function Project(){
    return (
        <>
            <div className="space-mono-regular">
                <h2 className="page-heading ">Projects</h2>
                <a className="project-container d-flex flex-row">
                    {data.projects.map((project,index) => (
                        <div key={index} className="project d-flex flex-column">
                            <div className="project-heading d-flex flex-row justify-content-between align-items-center"> 
                                {project.name}
                                <a href={project.link} target="blank">
                                    <img src={linkSvg} alt="Project Link Icon" width="15" height="15" className="ms-2 mr-5" />  
                                </a>
                            </div>
                            <div className="d-flex flex-wrap mb-3">
                            <strong>Technologies: </strong><span className="ms-1">{project.technologies.join(", ")}</span>
                            </div>
                            <ul className="mb-3">
                                <li>{project.description}</li>
                            </ul>
                        </div>
                    ))}
                </a>
            </div>
        </>
    )
}

export default Project;