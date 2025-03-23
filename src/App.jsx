import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navigation';
import Home from "./components/Home";
import Experience from "./components/Experience";
// import ExperienceDetail from "./components/ExperienceDetail";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/experience/:index" element={<ExperienceDetail />} /> */}
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/skills/:skillName" element={<Details />} /> */}
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
