import b1 from '../assets/Bounty.png'
import b2 from '../assets/catsan.jpg'
import b3 from '../assets/Cesar.png'
import b4 from '../assets/Maltesers.png'
import b5 from '../assets/mars.svg'
import b6 from '../assets/Milky.jpg'
import b7 from '../assets/Pedigree.png'
import b8 from '../assets/RoyalCanin.jpg'
import b9 from '../assets/Sheba.png'
import b10 from '../assets/Skittles.png'
import b11 from '../assets/snickers.png'
import b12 from '../assets/Twix.png'

export default function Marquee() {
  const row1 = [b1, b2, b3, b4, b5, b6]

  const row2 = [b7, b8, b9, b10, b11, b12]

  return (
    <div className="z-40  w-full bg-gray-100 pt-16">
      <div className="relative overflow-hidden mx-auto max-w-[1400px]  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* row 1 */}
        <div className="flex gap-4 animate-marquee whitespace-nowrap ">
          {row1.map((item, index) => (
            <div
              key={index}
              className="w-40 h-24 items-center justify-center shrink-0"
            >
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}

          {row1.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-40 h-24 items-center justify-center shrink-0"
            >
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}
        </div>
        {/* row 2 */}
        <div className="flex gap-4 animate-marquee2 whitespace-nowrap py-10">
          {row2.map((item, index) => (
            <div
              key={index}
              className="w-40 h-24 items-center justify-center shrink-0"
            >
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}

          {row2.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-40 h-24 items-center justify-center shrink-0"
            >
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[1rem]  text-center md:px-8 lg:px-12">
        <div className="mx-auto max-w-[800px] ">
          <p className="mx-auto w-full py-2 text-3xl md:text-3xl lg:text-4xl font-semibold text-slate-700  ">
            Une Famille Des Marques Iconiques.
          </p>
          <p className="text-neutral-700 text-md md:text-base lg:text-lg  ">
            Un siècle d'innovation: du chocolat à la nutrition animale, <br />{' '}
            nous enrichissons le quotidien depuis plus de 100 ans.
          </p>
          <button
            className="mt-4 px-4 md:px-8 py-2 md:py-3 bg-blue-800 
            text-white rounded-md shadow-md transition-all
            duration-300 hover:bg-blue-700 hover:shadow-lg
            active:bg-gray-400 active:shadow-sm text-sm md:text-base"
          >
            Découvrez nos marques
          </button>
        </div>
      </div>
    </div>
  )
}
