import "./App.css";
import logo from "../src/assets/mars-logo.png";

function App() {
  return (
    <>
      <div className="w-full flex flex-col text-black overflow-hidden">
        <nav className="absolute top-0 left-0 w-full z-40">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 w-full">
            <div className="flex items-center justify-between py-2">
              <div className=" items-center">
                <img src={logo} className="h-8" alt="logo" />
              </div>

              <div className="flex gap-2 text-white">
                <a href="">À Propos</a>
                <a href="">Nos Marques</a>
                <a href="">Développement Durable</a>
                <a href="">Actus et témoignages</a>
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
      </div>
    </>
  );
}

export default App;
