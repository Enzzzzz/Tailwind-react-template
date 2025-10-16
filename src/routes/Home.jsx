import Navbar from "../components/navbars/navbar"
import Logo from "../assets/logo.png" // <--- Test Logo

function Home() {
  return (
    <div className="home">
      <div className="bg-blue-gradient w-full">
      <Navbar/>
      </div>
        <div id="firstLayer" className="section bg-blue-gradient items-start flex flex-column ">
          <img src={Logo} width={"200px"} className="" />
          <h1 className=""> Tailwind Multi-page Template </h1>
          
        </div>
        <div id="secondLayer" className="section bg-blue-gradient-reverse">

        </div>
    </div>
  )
}

export default Home
