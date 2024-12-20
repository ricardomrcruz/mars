export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/video_header.mp4"
        playsInline
        className="w-full
            h-screen
            object-cover
            brightness-[75%] absolute inset-0"
        autoPlay
        muted
        loop
      ></video>
    </div>
  )
}
