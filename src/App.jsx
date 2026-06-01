import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/experience' element={ <ContactPage /> } />
          <Route path='/contact-us' element={ <ExperiencePage /> } />

          <Route path='*' element={ <HomePage /> } replace></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
