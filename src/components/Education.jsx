import data from "../data/data.json"; // Import JSON data

function Education(){
    return (
        <>
            <div className="space-mono-regular">
                <h2 className="page-heading ">Education</h2>
                <div className="experience-container">
                    <div className="timeline"></div>
                    {data.education.map((edu, index) => (
                        <div key={index} className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="content d-flex flex-column justify-content-between">
                                <div className="d-flex flex-row mb-2">
                                    <span className="mr-1">{edu.degree}</span>
                                </div>
                                <div className="d-flex flex-row mb-2 justify-content-between">
                                    <span>{edu.institution}</span>
                                    <span className="text-nowrap">{edu.location}</span>
                                </div>
                                <div className="d-flex flex-column mb-2">
                                    <span>{edu.duration}</span>
                                </div>
                                <div className="d-flex mb-2">
                                    <span>GPA: {edu.gpa}</span>
                                </div>
                                { 
                                edu.achievements ? 
                                <div className="d-flex mb-2">
                                    <span>{edu.achievements}</span>
                                </div> : "" 
                                }
                                <div className="coursework-container d-flex mb-2 d-flex-flex-column">
                                    <span className="dots">...</span>
                                    <span className="coursework d-flex flex-column">
                                        {edu.relevant_coursework.map((course, index) => (
                                            <span key={index}>{index+1}. {course}</span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Education;