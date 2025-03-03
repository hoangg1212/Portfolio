import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import PortFolio from './pages/PortFolio'
import Experiance from './pages/Experiance'
import Footer from './components/Footer'
import Contact from './pages/Contact'

import './i18n';

import { Toaster } from 'react-hot-toast';
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-screen-2xl w-full mx-auto px-4 md:px-20 '>
        <Header />
        <main className='container my-20 '>
          <Home />
          <About />
          <PortFolio />
          <Experiance />
          <Contact />
        </main>
        <Footer />
        <Toaster />
        <ScrollToTopButton/>
      </div>
      
      
    </>
  )
}

export default App
