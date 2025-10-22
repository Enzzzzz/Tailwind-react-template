import Navbar from "../components/navbar"
import Logo from "/Logo2-Sem-Fundo.png"
import Logo2 from "/Logo-Sem-Fundo.png"

function Page2() {
  return (
    <div className="">
      <Navbar />
        <div id="firstLayer" className="section bg-blue-gradient flex flex-col">
          <img src={Logo} className="mt-24 sm:-mt-32 w-64 sm:w-96 md:w-[450px] 2xlg:w-[550px]"/>
          <h1 className="text-3xl text-center m-10 font-extrabold text-text sm:text-4xl lg:text-5xl xl:text-7xl">This is the second page</h1>
        </div>
        <div id="secondLayer" className="section bg-red-gradient-reverse">
          <img src={Logo2} className="mt-24 w-64 sm:w-96 md:w-[450px] 2xlg:w-[550px]" />
          <h1 className="text-3xl text-center m-10 font-extrabold text-tertiary sm:text-4xl lg:text-5xl xl:text-7xl">This is the second page</h1>
        </div>
    </div>
  )
}

export default Page2
