import news1img from '../assets/news1.jpg'
import news2img from '../assets/news2.jpg'
import news3img from '../assets/news3.jpg'
import news4img from '../assets/news4.jpg'
import news5img from '../assets/news5.jpg'

export default function News() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 w-full ">
        <h3 className="uppercase text-gray-400 font-extrabold text-xl  pb-4">
          Actualités Mars France
        </h3>
        {/* FEATURED ARTICLE */}
        <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[60vh] justify-between">
          <div className="lg:w-[65%] w-full h-[40vh] lg:h-full bg-slate-200">
            <img
              src={news1img}
              className="h-full w-full object-cover cursor-pointer"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[35%] h-auto lg:h-full relative p-4 sm:p-0 lg:p-0 ">
            <div className="lg:px-10 ">
              <div>
                <p className="uppercase text-md md:block hidden">futur green</p>

                <p className="hover:underline underline-offset-2 hover:cursor-pointer font-bold text-gray-900 lg:text-3xl text-xl pt-4 lg:pt-[2rem] capitalize">
                  Mars réalise une réduction record de ses émissions de carbone
                  en 2024
                </p>
                <p className="uppercase text-sm pt-3 sm:pt-1 ">
                  Juillet 24 2024
                </p>
              </div>

              <p className="relative lg:absolute lg:bottom-0 font-light w-full lg:w-[80%] mt-2  justify-start text-justify">
                Mars continue de découpler les émissions de carbone de sa
                croissance économique en réduisant les émissions absolues de GES
                dans l'ensemble de sa chaîne de valeur de 16 % depuis 2015.
              </p>
            </div>
          </div>
        </div>
        {/* SUB ARTICLES */}
        <div className="my-4 bg-gray-300 h-[1px]"></div>
        <div className="w-full flex flex-wrap  justify-between">
          <div className="hover:bg-gray-200 cursor-pointer rounded-sm p-2 sm:w-[48%] lg:w-[24%] w-[24%] h-auto flex justify-between">
            <div className="w-[50%] h-auto">
              <p className="pb-4 text-xs">futur green</p>
              <p className="font-semibold text-sm">
                Mars réalise une réduction record de ses émissions de carbone en
                2024
              </p>
            </div>
            <img src={news2img} className=" w-[39%] object-cover" alt="" />
          </div>
          <div className="w-[1px] h-[8.5rem] bg-slate-300" />
          <div className="hover:bg-gray-200 cursor-pointer rounded-sm p-2 sm:w-[48%] lg:w-[24%] w-[24%] h-auto flex justify-between">
            <div className="w-[50%] ">
              <p className="pb-4 text-xs">futur green</p>
              <p className="font-semibold text-sm">
                Mars réalise une réduction record de ses émissions de carbone en
                2024
              </p>
            </div>
            <img src={news3img} className=" w-[39%] object-cover" alt="" />
          </div>
          <div className=" sm:hidden w-[1px] h-[8.5rem] bg-slate-300" />
          <div className="hover:bg-gray-200 cursor-pointer rounded-sm p-2 sm:w-[48%] lg:w-[24%] w-[24%] h-auto flex justify-between">
            <div className="w-[50%] ">
              <p className="pb-4 text-xs">futur green</p>
              <p className="font-semibold text-sm">
                Mars réalise une réduction record de ses émissions de carbone en
                2024
              </p>
            </div>
            <img src={news4img} className=" w-[39%] object-cover" alt="" />
          </div>
          <div className=" w-[1px] h-[8.5rem] bg-slate-300" />
          <div className="hover:bg-gray-200 cursor-pointer rounded-sm p-2 sm:w-[48%] lg:w-[24%] w-[24%] h-auto flex justify-between">
            <div className="w-[50%] ">
              <p className="pb-4 text-xs">futur green</p>
              <p className="font-semibold text-sm">
                Mars réalise une réduction record de ses émissions de carbone en
                2024
              </p>
            </div>
            <img src={news5img} className=" w-[39%] object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
