import logo from '../assets/mars-logo.png'
import { FiSearch } from 'react-icons/fi'

export default function Nav() {
  return (
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
  )
}
