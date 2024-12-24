import logo from '../assets/mars-logo.png'
import { FiSearch } from 'react-icons/fi'
import {
  IoIosMenu,
  IoIosClose,
  IoMdArrowDropdown,
  IoMdReturnRight,
  IoIosBusiness,
} from 'react-icons/io'
import { CiSquareChevRight } from 'react-icons/ci'
import { FaDog, FaBowlRice, FaEarthAmericas } from 'react-icons/fa6'
import { FaCat } from 'react-icons/fa'
import { RiCommunityFill, RiMentalHealthFill } from 'react-icons/ri'
import { LuNewspaper } from 'react-icons/lu'
import { GiEcology, GiMaterialsScience, GiChocolateBar } from 'react-icons/gi'
import { MdDiversity1 } from 'react-icons/md'
import { GrTechnology, GrArticle } from 'react-icons/gr'
import { SiFuturelearn } from 'react-icons/si'
import { PiTelevision } from 'react-icons/pi'
import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Nav() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 50

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState([
    false,
    false,
    false,
    false,
  ])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // dropdown multiple menus without repeating state func
  const dropMenu = (index: any) => {
    setIsDropdownOpen(
      isDropdownOpen.map((state, i) => (i === index ? !state : state))
    )
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 "
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{
        backgroundColor:
          isScrolled || isMenuOpen ? '#f3f4f6' : 'rgba(255, 255, 255, 0)',
      }}
      // transition={{ duration: 0.3 }}
    >
      <div
        className={` absolute top-0 left-0 w-full z-40 ${
          isScrolled || isMenuOpen
            ? 'bg-gray-100 shadow-md text-slate-900'
            : 'bg-none text-gray-200'
        }`}
      >
        <div
          className={` mx-auto w-full py-2 flex ${
            isScrolled || isMenuOpen ? 'bg-gray-200' : 'bg-none '
          }`}
        >
          <div className="lg:w-[50%]  lg:ml-[60%] lg:max-w-[1700px] md:ml-[50%] ml-[20%] flex text-sm tracking-tighter lg:gap-3  gap-3">
            <button
              className={`capitalize border ${isScrolled ? 'border-slate-900 hover:bg-slate-900 hover:text-gray-100' : 'border-white opacity-80 hover:bg-gray-100 hover:text-gray-900'}  px-2`}
            >
              Nous Contacter
            </button>
            <button
              className={`capitalize border ${isScrolled ? 'border-slate-900 hover:bg-slate-900 hover:text-gray-100' : 'border-white opacity-80 hover:bg-gray-100 hover:text-gray-900'}  px-2`}
            >
              Demande des médias
            </button>
            <button
              className={`capitalize border ${isScrolled ? 'border-slate-900 hover:bg-slate-900 hover:text-gray-100' : 'border-white opacity-80 hover:bg-gray-100 hover:text-gray-900'}  px-2`}
            >
              Carrières
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-[1605px] h-[1px] bg-gray-100 opacity-30"></div>
        <div className="max-w-[1700px] mx-auto w-full">
          <div className="flex items-center px-4 md:px-8 lg:px-12 justify-between py-3">
            {/* LOGO */}
            <div className="items-center">
              <img
                src={logo}
                className="lg:h-10 md:h-10 h-8 w-auto object-contain aspect-auto"
                alt="logo"
              />
            </div>

            {/* NAV DESKTOP LINKS */}
            <div
              className={`lg:flex hidden gap-[5.5rem] uppercase lg:text-[16px] text-sm  ${isScrolled ? 'text-slate-950 ' : 'text-white '}  `}
            >
              <button className="px-2 tracking-wider capitalize ">
                Notre mission
              </button>
              <button className="px-2 tracking-wider capitalize">
                Nos Marques
              </button>
              <button className="px-2 tracking-wider capitalize">
                Développement Durable
              </button>
              <button className="px-2 tracking-wider capitalize">
                Actus et témoignages
              </button>
            </div>
            <div className="hidden lg:block text-white  ">
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

          {/* -------------------------- MOBILE MENU NAV -------------------------------- */}

          {isMenuOpen ? (
            <div className="lg:hidden fixed inset-0 top-[6.5rem] bg-gray-100   overflow-y-auto">
              {/* <div className="h-[1px] w-[95%] mx-auto bg-slate-300"></div> */}
              <div className="relative mx-auto text-center pb-5 ">
                <input
                  type="text"
                  placeholder="Recherche..."
                  className=" bg-white w-[96%] md:w-[94%] mx-auto uppercase border-gray-900 border p-1 pl-2 rounded-sm text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-gray-200 "
                />
              </div>
              <div className="flex flex-col gap-2 text-lg  px-4 md:px-8 lg:px-12 text-slate-900">
                <button
                  className=" text-left  py-1  group"
                  onClick={() => dropMenu(0)}
                >
                  <div className="hover:text-blue-800 hover:font-semibold flex uppercase tracking-tight">
                    À propros
                    <span className="  px-3 pt-1">
                      <IoMdArrowDropdown color="black" />
                    </span>
                  </div>
                  {/* DROPDOWN LINK1 */}
                  {isDropdownOpen[0] ? (
                    <div className="pt-3  bg-gray-200 ">
                      <p className="text-sm text-left px-1">
                        Depuis plus d'un siècle, nous sommes convaincus que le
                        monde que nous voulons demain dépend de la façon dont
                        nous agissons aujourd'hui.
                      </p>
                      <button className="hover:underline hover:text-blue-800 text-sm flex  pt-2 px-1 group/a">
                        Vue d'ensemble
                        <span className="pt-1 px-2">
                          <IoMdReturnRight className="text-black group-hover/a:text-blue-800 hover:font-bold" />
                        </span>
                      </button>
                      <div className="pt-8 p-1">
                        <div className=" leading-loose">
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <p className="py-3 flex  hover:text-blue-800 hover:underline group/b">
                            Les 5 Principes
                            <span className="pt-2 px-2 text-lg">
                              <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                            </span>
                          </p>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>

                          <p className="py-3 flex hover:underline hover:text-blue-800 group/c">
                            Mars Compass
                            <span className="pt-2 px-3">
                              <CiSquareChevRight className="text-black text-xl group-hover/c:text-blue-800 hover:text-blue-800 transition-colors " />
                            </span>
                          </p>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <p className="py-3 flex hover:underline hover:text-blue-800 group/d">
                            L'équipe de direction
                            <span className="pt-2 px-3">
                              <CiSquareChevRight className="text-black text-xl group-hover/d:text-blue-800 hover:text-blue-800 transition-colors" />
                            </span>
                          </p>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <p className="py-3 flex hover:underline hover:text-blue-800 group/e">
                            Notre histoire
                            <span className="pt-2 px-3">
                              <CiSquareChevRight className="text-black text-xl group-hover/e:text-blue-800 hover:text-blue-800 transition-colors" />
                            </span>
                          </p>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <p className="py-3 flex hover:underline hover:text-blue-800 group/f">
                            Politiques et pratiques
                            <span className="pt-2 px-3">
                              <CiSquareChevRight className="text-black text-xl group-hover/f:text-blue-800 hover:text-blue-800 transition-colors" />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>
                {/* nav link 2 */}
                <button className=" py-1 group" onClick={() => dropMenu(1)}>
                  <div className="flex uppercase hover:font-semibold  hover:text-blue-800 tracking-tight">
                    Nos marques
                    <span className="  px-3 pt-1">
                      <IoMdArrowDropdown color="black" />
                    </span>
                  </div>
                  {/* DROPDOWNLINKS2 */}
                  {isDropdownOpen[1] ? (
                    <div className="pt-3  bg-gray-200">
                      <p className="text-sm text-left px-1">
                        Depuis plus d'un siècle, nous sommes convaincus que le
                        monde que nous voulons demain dépend de la façon dont
                        nous agissons aujourd'hui.
                      </p>
                      <button className="hover:underline hover:text-blue-800 text-sm flex  pt-2 px-1 group/a">
                        Vue d'ensemble
                        <span className="pt-1 px-2">
                          <IoMdReturnRight className="text-black group-hover/a:text-blue-800 hover:font-bold" />
                        </span>
                      </button>
                      <div className="pt-8 p-1 text-left">
                        <div className="leading-loose">
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* PETCARE */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <FaDog className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Petcare
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Nutrition, santé, et services vétérinaires pour
                                créer un monde meilleur pour les animaux de
                                compagnie.
                              </p>
                            </div>
                          </div>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* SNACKING */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <GiChocolateBar className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Snacking
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Nutrition, santé, et services vétérinaires pour
                                créer un monde meilleur pour les animaux de
                                compagnie.
                              </p>
                            </div>
                          </div>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* FOODNUTRITION */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <FaBowlRice className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Snacking
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Nutrition, santé, et services vétérinaires pour
                                créer un monde meilleur pour les animaux de
                                compagnie.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>
                {/* NAVLINK */}
                <button className=" py-1 group" onClick={() => dropMenu(2)}>
                  <div className="flex uppercase hover:font-semibold  hover:text-blue-800 tracking-tight">
                    développement durable
                    <span className="  px-3 pt-1">
                      <IoMdArrowDropdown color="black" />
                    </span>
                  </div>
                  {/* DROPDOWNLINKS2 */}
                  {isDropdownOpen[2] ? (
                    <div className="pt-3  bg-gray-200 ">
                      <p className="text-sm text-left px-1">
                        Nous avons à cœur de bâtir un monde durable et sûr pour
                        l'ensemble des partenaires et des communautés avec
                        lesquels nous travaillons.
                      </p>
                      <button className="hover:underline hover:text-blue-800 text-sm flex  pt-2 px-1 group/a">
                        Vue d'ensemble
                        <span className="pt-1 px-2">
                          <IoMdReturnRight className="text-black group-hover/a:text-blue-800 hover:font-bold" />
                        </span>
                      </button>
                      <div className="pt-8 p-1 text-left">
                        <div className="leading-loose">
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* PLANET */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <FaEarthAmericas className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Engagés pour la planète
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Découvrez comment nos objectifs environnementaux
                                ambitieux guident notre vision d'une planète
                                plus saine.
                              </p>
                            </div>
                          </div>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* COMMUNITY */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <RiCommunityFill className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Engagés pour les communautés
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Découvrez comment nos objectifs environnementaux
                                ambitieux guident notre vision d'une planète
                                plus saine.
                              </p>
                            </div>
                          </div>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          {/* FOODNUTRITION */}
                          <div className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <RiMentalHealthFill className="text-[4rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Engagés pour le bien-être
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                              <p className="text-sm pb-3 text-left max-w-[85%]">
                                Découvrez nos engagements pour le bien-être des
                                personnes et des animaux à travers nos produits
                                et services.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>
                {/* ACTUS ET TEMOIGNAGES */}
                <button className=" py-1 group" onClick={() => dropMenu(3)}>
                  <div className="flex uppercase hover:font-semibold  hover:text-blue-800 tracking-tight">
                    Actus et Témoignages
                    <span className="  px-3 pt-1">
                      <IoMdArrowDropdown color="black" />
                    </span>
                  </div>
                  {/* DROPDOWNLINKS2 */}
                  {isDropdownOpen[3] ? (
                    <div className="pt-3  bg-gray-200 ">
                      <p className="text-sm text-left px-1">
                        Découvrez comment nos Associés créent un monde meilleur
                        pour demain dans nos derniers articles, actualités et
                        communiqués de presse internationaux.
                      </p>
                      <button className="hover:underline hover:text-blue-800 text-sm flex  pt-2 px-1 group/a">
                        Dernières actualités
                        <span className="pt-1 px-2">
                          <IoMdReturnRight className="text-black group-hover/a:text-blue-800 hover:font-bold" />
                        </span>
                      </button>
                      <div className="pt-8 p-1 text-left">
                        <div className="leading-loose">
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <div className="pt-4 pb-2 text-xl text-blue-900">
                            Explorer par sujet
                          </div>
                          {/* EXPLORER PAR SUJET */}
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <IoIosBusiness className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Actualité de l'entreprise
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <LuNewspaper className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                L'actualité de nos marques
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <GiEcology className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Développement durable
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <FaCat className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Prendre soin des animaux
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <MdDiversity1 className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Inclusion et diversité
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <GrTechnology className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Innovation et technologie
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <RiMentalHealthFill className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Santé et bien-être
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <GiMaterialsScience className="text-[1.5rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Science et recherche
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>

                          <div className="pt-4 pb-2 text-xl text-blue-900">
                            Explorer par type
                          </div>
                          {/* EXPLORER PAR TYPE */}
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <SiFuturelearn className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Perspectives
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <PiTelevision className="text-[1.5rem]" />
                            </div>

                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Communiqués de presse
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                          <div className="h-[1px] w-full mx-auto bg-slate-300"></div>
                          <button className="flex">
                            <div className="mt-4 mb-2 ml-1 max-h-[4.5rem] mr-3 p-1 rounded-md  bg-gray-300">
                              <GrArticle className="text-[1.5rem]" />
                            </div>
                            <div>
                              <p className="pt-3 flex  hover:text-blue-800 hover:underline group/b">
                                Articles
                                <span className="pt-2 px-2 text-lg">
                                  <CiSquareChevRight className="text-black text-xl group-hover/b:text-blue-800 hover:text-blue-800 transition-colors " />
                                </span>
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </button>

                {/* BOTTOM LINKS MOBILE NAV */}
                <div className="pt-[8.5rem] pb-[2rem]   text-sm font-semibold leading-[3rem]">
                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200">
                        Nous Contacter
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200">
                        Carrières
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200">
                        Rapports sur le développement durable
                      </span>
                    </button>
                  </div>

                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200">
                        Demande des médias
                      </span>
                    </button>
                  </div>

                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200 ">
                        Chaine d'approvisionnnement
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="uppercase text-left">
                      <span className="border-black border-2 p-2 hover:bg-slate-200">
                        Politique et pratiques
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mx-auto text-gray-500 text-[2.7rem] font-semibold  py-[1rem]">
                  <div className="gap-4 flex">
                    <button>
                      <FaInstagramSquare />
                    </button>
                    <button>
                      <FaFacebook className="text-[2.5rem]" />
                    </button>
                    <button>
                      <FaLinkedin />
                    </button>
                    <button>
                      <FaYoutube className="text-[3rem]" />
                    </button>
                  </div>
                  <p className="text-xs mx-auto text-center pt-3">
                    All Rights Reserved Mars Inc. 2025
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* finish navbar */}
        </div>
      </div>
    </motion.nav>
  )
}
