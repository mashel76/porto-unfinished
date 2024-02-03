import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Skills from '../pages/skills'
import Contact from '../pages/contact'
import Porto from '../pages/porto'
import { AnimatePresence } from 'framer-motion'

function Ani() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <div className="bg-white bg-opacity-60 shadow-inner backdrop-blur-sm w-full rounded-r-lg drop-shadow-2xl flex flex-col">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/porto' element={<Porto />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default Ani