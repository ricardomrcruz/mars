import b1 from "../assets/Bounty.png";
import b2 from "../assets/catsan.jpg";
import b3 from "../assets/Cesar.png";
import b4 from "../assets/Maltesers.png";
import b5 from "../assets/mars.svg";
import b6 from "../assets/Milky.jpg";
import b7 from "../assets/Pedigree.png";
import b8 from "../assets/RoyalCanin.jpg";
import b9 from "../assets/Sheba.png";
import b10 from "../assets/Skittles.png";
import b11 from "../assets/snickers.png";
import b12 from "../assets/Twix.png";

export default function Marquee() {
  const row1 = [b1, b2, b3, b4, b5, b6];

  const row2 = [b7, b8, b9, b10, b11, b12];

  return (
    <div className="z-40 min-h-screen w-full bg-gray-100">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-[4rem] text-center md:px-8 lg:px-12">
        <div className="mx-auto max-w-[800px] rounded-sm border-2 border-gray-100 bg-white shadow-xl ring-1 ring-gray-200/50">
          <p className="mx-auto max-w-[35rem] py-5 text-2xl font-semibold text-blue-900 leading-6">
            Une Famille Des Marques Iconiques.
          </p>
          <p className="text-neutral-600">
            Des saveurs qui nous unissent depuis plus de 50 ans.
          </p>
        </div>
        <div className="flex gap-4 mx-auto justify-center align-center pt-10">
          {row1.map((item, index) => (
            <div key={index} className="w-40 h-24 items-center justify-center ">
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 mx-auto justify-center align-center pt-10">
          {row2.map((item, index) => (
            <div key={index} className="w-40 h-24 items-center justify-center ">
              <img
                src={item}
                alt={item.valueOf()}
                className="p-4 w-full  h-full object-contain bg-white border-2 border-gray-100 shadow-xl ring-1 ring-gray-200/50 rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
