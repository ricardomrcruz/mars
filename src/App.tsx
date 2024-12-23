import './App.css'

import Marquee from './components/Marquee'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import HeroVideo from './components/HeroVideo'
import News from './components/News'

function App() {
  const [currentWord, setCurrentWord] = useState('émotion')

  const words = [
    'histoire',
    'passion',
    'tradition',
    'mission',
    'responsabilité',
    'innovation',
    'engagement',
    'expertise',
    'nostalgie',
  ]

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      setCurrentWord(words[currentIndex])
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className="w-full flex flex-col bg-gray-100 text-black overflow-hidden">
        <Nav />
        <HeroVideo />

        <div className="absolute top-[22rem] left-0 w-full z-40 text-white">
          <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full">
            <p className="lg:text-[6rem] md:text-[4rem] text-[3.5rem] font-medium lg:leading-[80px]  md:leading-[60px] leading-[50px] font-baskerville">
              Mars, bien plus
              <br /> qu'un chocolat, <br />
              une <span className="fade-in">{currentWord}</span>
            </p>
            <p className="text-gray-100 lg:text-lg text-md font-medium py-5 lg:leading-6 lg:max-w-[36rem] md:max-w-[50%] max-w-[75%]">
              Implanté en France depuis 1967, Mars Incorporated compte
              aujourd'hui plus de 4 000 collaborateurs dans l'hexagone, répartis
              sur 9 sites dont 8 usines (4 en Alsace). Ces cinq dernières
              années, Mars a investi en France plus de 300 millions d'euros.
            </p>
          </div>
        </div>
        <Marquee />
        <News />
      </div>
    </>
  )
}

export default App
