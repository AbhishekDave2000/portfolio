import "../css/navbar.css";

function Navigation() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><i className="fa-solid fa-code"></i> Abhishek Dave</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/skills"><i className="fa-solid fa-laptop-code"></i>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/experience"><i className="fa-solid fa-cubes-stacked"></i>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/projects"><i className="fa-solid fa-diagram-project"></i>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/education"><i className="fa-solid fa-user-graduate"></i>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="resume"><i className="fa-regular fa-file-lines"></i>Resume</a>
                            </li>
                        </ul>
                        <div className="navbar-icons">
                            <i className="fa-solid fa-moon"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;