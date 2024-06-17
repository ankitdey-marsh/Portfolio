import React from 'react';
import { LuHome,LuUser,LuLightbulb,LuLayers, LuPhone,LuLanguages } from "react-icons/lu";
import { GoDot } from "react-icons/go";

const about = () => {
  return (
      <div className='md:p-22 md:pt-24 md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:flex justify-normal space-x-28 md:mt-0 mt-6 pt-16'>
        <div className='md:w-6/12'>
            <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                <LuUser className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100' size={22}/>
                <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-1 md:-top-0 -top-1 md:pb-0 pb-2 md:pt-0'>About me</span>
            </div>
            <div className='md:pt-5'>
                <h1 className='md:text-5xl text-4xl md:font-medium font-semibold'>DevOps <br className='md:hidden'/><span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent md:w-48'>Developer </span><br/> <span className='md:text-4xl text-3xl font-poppins font-normal md:font-medium'>Based In India.</span></h1>
                <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
            </div>
            <div className='md:w-12/12 md:mt-10 '>
                <h1 className='font-poppins text-justify'>I am a DevOps Developer from Kolkata, India. Currently with a year of experience, I put my time learning essentials from other fields as well. I am very comfortable with adapting to new software and new technologies. With a strong passion for innovation and a keen eye for detail, I'm confident in my ability to collaborate with cross-functional teams, drive projects forward, and deliver high-quality results. </h1>
            </div>
        </div>
        <div className='relative md:-left-0 -left-28 md:pt-4 pt-12'>
            <div className='md:w-96'>
                <h1 className='text-3xl font-poppins font-medium md:ml-10'>Languages</h1>
                <hr className='md:w-64 w-32 md:mb-0 mb-2 md:h-1 h-1 mt-3 md:ml-10 lg:mt-1 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                <h1 className='md:mt-5 mt-3 md:ml-2 font-poppins'><GoDot className='inline'/><span className='md:pl-12  text-xl pl-4'>English</span></h1>
                <h1 className='md:mt-2 md:ml-2 font-poppins'><GoDot className='inline'/><span className='md:pl-12 text-xl pl-4'>Hindi</span></h1>
                <h1 className='md:mt-2 md:ml-2 font-poppins mb-2'><GoDot className='inline'/><span className='md:pl-12 text-xl pl-4'>Bengali</span></h1>
            </div>
            <div className='md:mt-3'>
                <h1 className='text-3xl font-poppins font-medium md:ml-10 md:mt-0 mt-5'>Nationality</h1>
                <hr className='md:w-64 w-32 md:mb-0 mb-4 md:h-1 h-1 mt-3 md:ml-10 lg:mt-1 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                <h1 className='md:mt-4 md:ml-2 font-poppins'><GoDot className='inline'/><span className='md:pl-12 text-xl pl-4'>Indian</span></h1>
            </div>
            <div className='md:mt-4'>
                <h1 className='text-3xl font-poppins font-medium md:ml-10 md:mt-0 mt-5'>Hobbies</h1>
                <hr className='md:w-64 w-32 md:mb-0 mb-4 md:h-1 h-1 mt-3 md:ml-10 lg:mt-1 bg-gradient-to-r from-[#c580f0ed] to-[#c580f0c8]'></hr>
                <h1 className='md:mt-5 md:ml-2 font-poppins'><GoDot className='inline'/><span className='md:pl-3 text-xl pl-4'>Project <span>Building</span></span><br className='md:hidden'/><GoDot className='md:inline md:ml-4  inline'/><span className='md:pl-4 text-xl md-inline inline md:ml-0 ml-4'>Coding</span></h1>
            </div>
        </div>
      </div>
    )
}
export default about;