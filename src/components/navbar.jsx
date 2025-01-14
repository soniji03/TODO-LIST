import React from 'react'
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import Logo2 from '../assets/logo2.png'


export const SideMenu = ({ isOpen, setIsOpen }) => {
  
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    };

    return (
        <div
          className={`
            fixed top-0 left-0 h-full w-64 bg-[#D0D8FF] border-8 border-white text-xl font-bold shadow-lg transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            md:hidden
          `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500"
          >
            X
          </button>
          <nav className="mt-16 p-4">
            <ul className="space-y-4">
              <li onClick={() => scrollToSection('projects')}>HOME</li>
              <li onClick={() => scrollToSection('projects')}>TODO</li>

            </ul>
          </nav>
        </div>
      );
    };
    
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
 
  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  }

  return (
  
    <div style={font} className='nav items-center text-black bg-slate-500 fixed top-0 w-full p-4 cursor-pointer z-50'>
        <div className='flex justify-between items-center w-full max-w-7xl mx-auto'>
          <div>
            <ul className='flex gap-1 items-center font-bold'>
              <li>
              <img src={Logo2} alt="Logo 2" className='rounded-full w-9 h-9 ml-2' />
              </li>
              <li className='text-sm md:text-base'>TODO</li>
            </ul>
          </div>
          <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <div>
            <ul className='text-xl flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center font-medium  md:text-base'>
            <li className=''>HOME </li>
            <li className=' '>TASK </li>
            </ul>
          </div>
        </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      </div>
  )
}

export default Navbar
