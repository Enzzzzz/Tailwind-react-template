import Navbar from "../components/navbar"
import Logo from "/logo.png" // <--- Test Logo

function Home() {
  return (
    <div className="">
      <Navbar />
        <div id="firstLayer" className="section bg-blue-gradient flex flex-col">
          <img src={Logo} width={"240px"} className="mt-24 sm:-mt-32" />
          <h1 className="text-3xl text-center m-10 font-extrabold text-text">Template Tailwind and ReactJS</h1>
        </div>
        <div id="secondLayer" className="section bg-red-gradient-reverse">
        </div>
    </div>
  )
}

export default Home
