import Navbar from "../components/navbar"
import Logo from "/Logo2-Sem-Fundo.png"
import Logo2 from "/Logo-Sem-Fundo.png"

function Home() {
  return (
    <div className="">
      <Navbar />
        <div id="firstLayer" className="section bg-blue-gradient flex flex-col">
          <img src={Logo} width={"240px"} className="mt-24 sm:-mt-32" />
          <h1 className="text-3xl text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl">Template Tailwind and ReactJS</h1>
        </div>
        <div id="secondLayer" className="section bg-red-gradient-reverse">
          <img src={Logo2} width={"240px"} className="mt-24" />
          <h1 className="text-3xl text-center m-10 font-extrabold text-tertiary sm:text-4xl lg:text-5xl xl:text-7xl">Template Tailwind and ReactJS</h1>
        </div>
    </div>
  )
}

export default Home
