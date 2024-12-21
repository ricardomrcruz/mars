import './App.css'

import Marquee from './components/Marquee'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import HeroVideo from './components/HeroVideo'

import news1img from './assets/news1.jpg'

function App() {
  const [currentWord, setCurrentWord] = useState('émotion')

  const words = [
    'histoire',
    'passion',
    'tradition',
    'aventure',
    'tentacion',
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
            <p className="text-[6rem] font-medium leading-[80px] font-baskerville">
              Mars, bien plus
              <br /> qu'un chocolat, <br />
              c'est une <span className="fade-in">{currentWord}</span>
            </p>
            <p className="text-gray-100 text-lg font-medium py-5 leading-6 max-w-[35rem]">
              Implanté en France depuis 1967, Mars Incorporated compte
              aujourd'hui plus de 4 000 collaborateurs dans l'hexagone, répartis
              sur 9 sites dont 8 usines (4 en Alsace). Ces cinq dernières
              années, Mars a investi en France plus de 300 millions d'euros.
            </p>
          </div>
        </div>
        <Marquee />
        <div className="min-h-screen ">
          <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full ">
            <h3 className="uppercase text-gray-400 font-extrabold text-xl pt-20 pb-4">
              Actualités Mars France
            </h3>
            <div className="w-full flex h-[60vh] justify-between">
              <div className="w-[65%] h-full bg-slate-200">
                <img
                  src={news1img}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-[35%] h-full relative ">
                <div className="px-10">
                  <div>
                    <p className="uppercase text-sm">futur green</p>

                    <p className="font-bold text-gray-900 text-3xl pt-[2rem] capitalize">
                      Mars réalise une réduction record de ses émissions de
                      carbone en 2024
                    </p>
                    <p className="uppercase text-sm pt-4 font-light">
                      Juillet 24 2024
                    </p>
                  </div>

                  <p className="absolute bottom-0 font-light w-[80%]  justify-start text-justify">
                    Mars continue de découpler les émissions de carbone de sa
                    croissance économique en réduisant les émissions absolues de
                    GES dans l'ensemble de sa chaîne de valeur de 16 % depuis
                    2015.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-7 bg-gray-300 h-[1px]"></div>
            <div className="w-full flex  justify-between">
              <div className="bg-slate-300 w-[20%] h-24 flex justify-between">
                <div className="w-[70%]">
                  <p></p>
                  <p></p>
                </div>
                <img src={news1img} className=" w-[45%]  object-cover" alt="" />
              </div>
              <div className="w-[1px] h-[7rem] bg-slate-300" />
              <div className="bg-slate-300  w-[20%] h-24"></div>
              <div className="w-[1px] h-[7rem] bg-slate-300 " />
              <div className="bg-slate-300  w-[20%] h-24"></div>
              <div className="w-[1px] h-[7rem] bg-slate-300 " />
              <div className="bg-slate-300  w-[20%] h-24"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
