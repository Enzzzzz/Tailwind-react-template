import { useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex py-3 justify-between items-center navbar absolute md:fixed shadow-xl shadow-tertiary/5 top-0 left-0 z-50'>
      <ul>
        <li>
            <a href='/'>
              <img src='/logo.png' alt='logo' className='md:ml-32 cursor-pointer transform duration-200 hover:scale-[0.90] sm:hover:scale-100 md:hover:scale-150 scale-[0.8] sm:scale-90 md:scale-125 w-12 xl:w-18' />
            </a>
        </li>
      </ul>
      <ul className='sm:flex hidden justify-end items-center flex-1 mr-10'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-nome cursor-pointer text-[14px] md:text-[16px] lg:text-[18px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-3 md:mr-10 lg:mr-12' } text-white/80 hover:text-white sub`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
          
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end  mr-10 items-center'>
        <img 
        src={toggle ? close : menu} 
        alt="menu"
        className='w-[24px] h-[24px] object-contain'
        onClick={() => setToggle((prev) => !prev)}
        />

<div className={`${toggle ? 'flex fixed inset-0 bg-black bg-opacity-50 z-50' : 'hidden'} sm:hidden`}>
        <div className='flex flex-col justify-between items-end p-6 bg-yellow-950/55 border border-pink-600/50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar'>
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-nome cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}
              >            
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <button className='text-white/80 hover:text-white' onClick={() => setToggle(false)}>Fechar</button>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default Navbar