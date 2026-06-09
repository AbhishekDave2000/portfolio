import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'
import { Toaster } from 'react-hot-toast' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path='/' element={ <HomePage /> } />

          <Route path='*' element={ <HomePage /> } replace></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
