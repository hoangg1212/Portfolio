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

import './i18n';

import { Toaster } from 'react-hot-toast';
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-screen-2xl w-full mx-auto px-4 md:px-20 my-20'>
        <Header />
        <main className='container'>
          <Home />
          <About />
          <PortFolio />
          <Experiance />
          <Contact />
        </main>

        <Toaster />
      </div>
      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default App
