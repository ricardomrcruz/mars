import logo from '../assets/mars-logo.png'
import { FiSearch } from 'react-icons/fi'
import { IoIosMenu, IoIosClose } from 'react-icons/io'

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
              <a className="hover:text-blue-800 hover:font-semibold" href="">
                À Propos
              </a>
              <a className="hover:text-blue-800 hover:font-semibold" href="">
                Nos Marques
              </a>
              <a className="hover:text-blue-800 hover:font-semibold" href="">
                Développement Durable
              </a>
              <a className="hover:text-blue-800 hover:font-semibold" href="">
                Actus et témoignages
              </a>
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
            <div className="flex flex-col gap-4 uppercase text-lg pt-10 px-4 md:px-8 lg:px-12 text-slate-900">
              <a
                className="hover:text-blue-800 hover:font-semibold py-1"
                href=""
              >
                À propros
              </a>
              <a
                className="hover:text-blue-800 hover:font-semibold py-1"
                href=""
              >
                Nos marques
              </a>
              <a
                className="hover:text-blue-800 hover:font-semibold py-1"
                href=""
              >
                développement durable
              </a>
              <a
                className="hover:text-blue-800 hover:font-semibold py-1"
                href=""
              >
                Actus et témoignages
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
