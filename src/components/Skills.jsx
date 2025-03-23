import { Link } from "react-router-dom";

function Skills(){
    return (
        <>
            <div className="space-mono-regular skills-main-container">
                <h2 className="page-heading skills-heading">Skills</h2>
                {
                    Object.entries(skillsData).map(([categoryKey, skills]) => (
                        <div key={categoryKey} className="skill-div d-flex flex-column mt-3 mb-3">
                            <div className="skills-heading-div item-center gap-3 mb-3">
                                <div className="line left-line"></div>
                                <p className="skill-name-heading">{categoryKey.replace("-", " ")}</p>
                                <div className="line right-line"></div>
                            </div>

                            <div className="skills-listing-container d-flex flex-row">
                                {Object.entries(skills).map(([key, value]) => (
                                    <Link 
                                        to={`/skills/${key}`} 
                                        key={key} 
                                        className={`skills d-flex mb-3 justify-content-left align-items-center ${key}-skills-image`}
                                    >
                                        <h2 className="skill-name">{value}</h2>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const skillsData = {
    "programming-languages": {
        "ruby": "Ruby",
        "php": "PHP",
        "python": "Python",
        "java": "Java",
        "js": "JavaScript",
        "c-sharp": "C#"
    },
    "markup-languages": {
        "html": "HTML",
        "css": "CSS"
    },
    "frameworks-&-libraries": {
        "rails": "Rails",
        "asp": "ASP .NET",
        "react": "React",
        "node": "Node",
        "express": "Express",
        "jQuery": "jQuery"
    },
    "databases": {
        "mysql": "MySQL",
        "mssql": "MS SQL",
        "postgres": "PostgreSQL",
        "mongo": "MongoDB",
        "redis": "Redis"
    }
};

export default Skills;