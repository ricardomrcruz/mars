import logo from '../assets/mars-logo.png'
import { FiSearch } from 'react-icons/fi'

import { motion } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Nav() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 50

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-11 transition-colors duration-300 ${isScrolled ? 'bg-gray-100 shadow-md text-slate-900' : 'bg-none text-gray-200'}`}
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{
        backgroundColor: isScrolled ? '#f3f4f6' : 'rgba(255, 255, 255, 0)',
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="absolute top-0 left-0 w-full z-40 ">
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between py-6">
            <div className=" items-center">
              <img src={logo} className="h-10" alt="logo" />
            </div>

            <div className="flex gap-5 uppercase text-lg">
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
            <div className="text-white text-2xl">
              <FiSearch color={`${isScrolled ? 'black' : 'white'}`} />
            </div>
          </div>
        </div>
      </nav>
    </motion.nav>
  )
}
