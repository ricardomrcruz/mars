import logo from '../assets/mars-logo.png'
import { FiSearch } from 'react-icons/fi'
import { IoIosMenu, IoIosClose, IoMdArrowDropdown } from 'react-icons/io'
import { CiSquareChevRight } from 'react-icons/ci'

{
  /* <IoIosClose /> */
}

import { useState } from 'react'

import { motion } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Nav() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 50

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-10 md:py-[2.62rem] lg:py-11  ${
        isScrolled || isMenuOpen
          ? 'bg-gray-100 shadow-md text-slate-900'
          : 'bg-none text-gray-200'
      }`}
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{
        backgroundColor:
          isScrolled || isMenuOpen ? '#f3f4f6' : 'rgba(255, 255, 255, 0)',
      }}
      // transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-full z-40 ">
        <div className="max-w-[1700px] mx-auto w-full py-6">
          <div className="flex items-center px-4 md:px-8 lg:px-12 justify-between ">
            {/* LOGO */}
            <div className=" items-center">
              <img src={logo} className="md:h-10 h-8 " alt="logo" />
            </div>

            {/* NAV DESKTOP LINKS */}
            <div className="lg:flex hidden gap-5 uppercase lg:text-lg text-sm">
              <button className="hover:text-blue-800 hover:font-semibold">
                À Propos
              </button>
              <button className="hover:text-blue-800 hover:font-semibold">
                Nos Marques
              </button>
              <button className="hover:text-blue-800 hover:font-semibold">
                Développement Durable
              </button>
              <button className="hover:text-blue-800 hover:font-semibold">
                Actus et témoignages
              </button>
            </div>
            <div className="hidden lg:block text-white text-2xl">
              <FiSearch color={`${isScrolled ? 'black' : 'white'}`} />
            </div>

            {/* NAV TOGGLE BTN */}
            <button
              className="lg:hidden text-2xl px-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoIosClose
                  color={isScrolled || isMenuOpen ? 'black' : 'white'}
                  fontSize={42}
                />
              ) : (
                <IoIosMenu
                  color={isScrolled ? 'black' : 'white'}
                  fontSize={42}
                />
              )}
            </button>
          </div>

          {/* MOBILE MENU NAV */}
          <div className="lg:hidden fixed h-full w-full bg-gray-100 pt-10">
            <div className="h-[1px] w-[95%] mx-auto bg-slate-300"></div>
            <div className="flex flex-col gap-4  text-lg pt-10 px-4 md:px-8 lg:px-12 text-slate-900">
              <button className=" text-left  py-1  group">
                <div className="hover:text-blue-800 hover:font-semibold flex uppercase">
                  À propros
                  <span className=" hidden group-hover:block px-3 pt-1">
                    <IoMdArrowDropdown color="black" />
                  </span>
                </div>
                <div className="pt-3  bg-gray-200">
                  <p className="text-sm text-left px-1">
                    Depuis plus d'un siècle, nous sommes convaincus que le monde
                    que nous voulons demain dépend de la façon dont nous
                    agissons aujourd'hui.
                  </p>
                  <button className="hover:underline text-sm flex  pt-2 px-1">
                    Vue d'ensemble{' '}
                    <span className="pt-1 px-3">
                      <CiSquareChevRight color="black" />
                    </span>
                  </button>
                  <div className="pt-8 p-1">
                    <div className=" leading-loose">
                      <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                      <p className="py-3 flex hover:underline">
                        Les Cinq Principes
                        <span className="pt-2 px-3">
                          <CiSquareChevRight color="black" />
                        </span>
                      </p>
                      <div className="h-[1px] w-full mx-auto bg-slate-300"></div>

                      <p className="py-3 flex hover:underline">
                        Mars Compass
                        <span className="pt-2 px-3">
                          <CiSquareChevRight color="black" />
                        </span>
                      </p>
                      <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                      <p className="py-3 flex hover:underline">
                        L'équipe de direction
                        <span className="pt-2 px-3">
                          <CiSquareChevRight color="black" />
                        </span>
                      </p>
                      <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                      <p className="py-3 flex hover:underline">
                        Notre histoire
                        <span className="pt-2 px-3">
                          <CiSquareChevRight color="black" />
                        </span>
                      </p>
                      <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                      <p className="py-3 flex hover:underline">
                        Politiques et pratiques
                        <span className="pt-2 px-3">
                          <CiSquareChevRight color="black" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </button>
              <button className="hover:text-blue-800 hover:font-semibold py-1 group flex ">
                <div className="flex uppercase">
                  Nos marques
                  <span className=" hidden group-hover:block px-3 pt-1">
                    <IoMdArrowDropdown color="black" />
                  </span>
                </div>
              </button>
              <button className="hover:text-blue-800 hover:font-semibold py-1 group flex">
                <div className="flex uppercase">
                  développement durable{' '}
                  <span className=" hidden group-hover:block px-3 pt-1">
                    <IoMdArrowDropdown color="black" />
                  </span>
                </div>
              </button>
              <button className="hover:text-blue-800 hover:font-semibold py-1 group flex">
                <div className="flex uppercase">
                  Actus et témoignages{' '}
                  <span className=" hidden group-hover:block px-3 pt-1 ">
                    <IoMdArrowDropdown color="black" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
