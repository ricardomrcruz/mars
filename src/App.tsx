import "./App.css";
import logo from "../src/assets/mars-logo.png";
import Marquee from "./components/Marquee";
import { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";

function App() {
  const [currentWord, setCurrentWord] = useState("émotion");

  const words = [
    "histoire",
    "passion",
    "tradition",
    "aventure",
    "tentacion",
    "responsabilité",
    "innovation",
    "engagement",
    "expertise",
    "nostalgie",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col text-black overflow-hidden">
        <nav className="absolute top-0 left-0 w-full z-40 ">
          <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full">
            <div className="flex items-center justify-between py-6">
              <div className=" items-center">
                <img src={logo} className="h-10" alt="logo" />
              </div>

              <div className="flex gap-5 text-white text-xl">
                <a href="">À Propos</a>
                <a href="">Nos Marques</a>
                <a href="">Développement Durable</a>
                <a href="">Actus et témoignages</a>
              </div>
              <div className="text-white text-2xl">
                <FiSearch />
              </div>
            </div>
          </div>
        </nav>
        <div className="relative w-full h-full ">
          <video
            src="/video_header.mp4"
            playsInline
            className="w-full
            h-screen
          object-cover
          brightness-[75%]"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="absolute top-[22rem] left-0 w-full z-40 text-white">
          <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full">
            <p className="text-[6rem] font-medium leading-[80px] font-baskerville">
              Mars n'est pas
              <br /> qu'un chocolat, <br />
              c'est une <span className="fade-in">{currentWord}</span>
            </p>
            <p className="text-slate-200 text-lg font-medium py-5 leading-6 max-w-[35rem]">
              L’implantation du Groupe Mars en France date de 1967. Mars compte
              aujourd’hui dans l’hexagone plus de 4 000 collaborateurs, 9 sites
              dont 8 usines (4 en Alsace). Ces cinq dernières années, Mars a
              investi en France plus de 300 millions d’euros.
            </p>
          </div>
        </div>
        <Marquee />
      </div>
    </>
  );
}

export default App;
