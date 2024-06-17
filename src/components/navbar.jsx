import React,{useState} from 'react';
import { LuHome,LuUser,LuLightbulb,LuLayers, LuPhone,LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import {Divide as Hamburger} from 'hamburger-react'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav =() =>{
        setNav(!nav)
    }
  return (

      <div className=' select-none md:flex md:justify-center justify-end md:w-full md:h-12 absolute md:mt-8 md:mr-0 mt-6 md:pt-0 md:pr-0 pr-3'>
        <div className='md:h-12 px-2 border hidden  md:px-4 md:flex border-black absolute rounded-full justify-evenly md:space-x-8 space-x-4 hover:scale-110 transition-all duration-300 z-20'>
            <a href='/' className='mt-1 w-9 h-9 pl-1 rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:border-black hover:bg-[#c580f03c] transition-all duration-500'>
                <LuHome size={24} className='relative top-1.5 left-0.5'/>
            </a>
            <a href='/about' className='mt-1 w-9 h-9 pl-1 rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:border-black hover:bg-[#c580f03c] transition-all duration-500'>
                <LuUser size={24} className='relative top-1.5 left-0.5'/>
            </a>
            <a href='/skills' className='mt-1 w-9 h-9 pl-1 rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:border-black hover:bg-[#c580f03c] transition-all duration-500'>
                <LuLightbulb size={24} className='relative top-1.5 left-0.5'/>
            </a>
            <a href='/contact' className='mt-1 w-9 h-9 pl-1 rounded-full hover:border-spacing-0 hover:scale-110 hover:translate-y-px hover:border-black hover:bg-[#c580f03c] transition-all duration-500'>
                <LuPhone size={24} className='relative top-1.5 left-0.5'/>
            </a>
        </div>
        <div className='md:invisible inline-block absolute -top-6 rounded-full ml-1.5 hover:bg-[#c580f04e] active:bg-[#c271f49f] duration-300 transition-all' onClick={handleNav}>
            <Hamburger color='#5521c595'/>
        </div>
        <div className={!nav ? 'md:hidden font-poppins bg-gradient-to-r from-[#833be7e7] rounded-r-xl to-[#5521c595] w-44 h-56 -translate-x-44 absolute mt-10 px-5 text-center text-white  transition-all duration-300 z-30': 'z-30 md:hidden font-poppins bg-gradient-to-r from-[#833be7e7] rounded-r-xl to-[#5521c595] w-44 h-56 absolute mt-10 px-5 text-center text-white  transition-all duration-300'}>
            <ul className=''>
                <a href="/"><li className='p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out'>Home</li></a><hr />
                <a href="/about"><li className='p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out'>About</li></a><hr />
                <a href="/skills"><li className='p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out'>Skills</li></a><hr />
                <a href="/contact"><li className='p-4 font-semibold text-md hover:scale-125 active:scale-75 hover:translate-y-px transition-all duration-300 ease-in-out'>Contact</li></a>
            </ul>
        </div>
        
      </div>
    )
}
export default Navbar;