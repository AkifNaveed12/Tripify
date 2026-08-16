import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import CtaOne from './sections/CtaOne'
import Packages from './sections/Packages'
import Features from './sections/Features'
import Footer from './sections/Footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <CtaOne />
    <Packages />
    <Features />
    <Footer />
    </>
  )
}

export default App
