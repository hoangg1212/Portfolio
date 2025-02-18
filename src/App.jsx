import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'

import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Home />
        <About/>
        <PortFolio/>
        <Experiance/>
        <Contact/>
      </main>
      <Footer/>
      <Toaster />
    </>
  )
}

export default App
