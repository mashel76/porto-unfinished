import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Porto from './pages/porto'
import { Routes, Route } from'react-router-dom'
function App() {

  return (
    <>
        <div className='bg-gambar w-full h-screen px-72 py-28 flex'>
          <Navbar />
          <div className="bg-white bg-opacity-60 shadow-inner shadow-2xl backdrop-blur-sm w-full rounded-r-lg drop-shadow-2xl flex flex-col">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/porto' element={<Porto />} />
            </Routes>
          </div>
        </div>
    </>
  )
}

export default App
