import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json"; // Import JSON data

function Experience(){
    return (
        <>
            <div className="space-mono-regular">
                <h2 className="page-heading ">Work Experience</h2>
                <div className="experience-container">
                    <div className="timeline"></div>
                    {data.experiences.map((exp, index) => (
                        <Link  key={index} to={`/experience/${index}`} className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="content">
                                <h4 className="content-title">{exp.title}</h4>
                                <h5 className="content-name">{exp.company}</h5>
                                <p className="content-duration">{exp.duration}</p>
                                <p className="content-location">{exp.location}</p>
                                <ul className="experience-points content-section">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Link >
                    ))}
                </div>
            </div>
        </>
    )
}

export default Experience;