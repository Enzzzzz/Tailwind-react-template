import Navbar from "../Layout/navbar"
import Logo from "/logo.png" // <--- Test Logo

function Home() {
  return (
    <div className="">
      <Navbar />
        <div id="firstLayer" className="section bg-[theme('colors.primary')] flex flex-wrap">
          <img src={Logo} width={"240px"} className="mt-24" />
          <h1 className="text-9xl font-extrabold text-[theme('colors.primary')]"> Camila Gonçalves Advocacia </h1>
        </div>
        <div id="secondLayer" className="section bg-red-gradient-reverse">
        </div>
    </div>
  )
}

export default Home
