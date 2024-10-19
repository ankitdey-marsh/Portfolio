import React from 'react';
import { IoNewspaperOutline } from "react-icons/io5";

const resume = () => {
  return (
      <div className='border w-48 h-12 border-[#00000095] hover:border-[#9956C4] relative left-0 md:left-6 rounded-full visible group hover:text-white ease-in-out overflow-hidden md:top-0 top-6'>
        <a className=''  href="https://drive.google.com/file/d/1pjU6kEZkBtgYhXjKEGpPOCqQX5vtgHo9/view?usp=sharing">
            <div className='md:w-42 w-40 bg-gradient-to-t from-[#6002b8bb] to-[#a858b3] h-24 absolute md:left-16 left-20 rotate-90 origin-bottom-right group-hover:-rotate-0 transition-all duration-500 ease-out group-hover:rounded-full group-hover:scale-150 md:group-hover:translate-x-16 group-hover:translate-x-12 group-hover:w-64 group-hover:translate-y-0'>
                
            </div>
            <div className='md:w-48 md:h-12 border-[#d1d5db8f] rounded-full flex justify-evenly transition-all duration-300 md:top-0 relative top-0'>
                <div className='md:pt-3 md:pl-1 z-20 pt-3'>
                    <IoNewspaperOutline size={20}/>
                </div>
                <div>
                    <h1 className='text-left align-middle text-xl font-semibold font-rubix pt-1.5 relative top-0.5 md:pr-2'>View Resume</h1>
                </div>
            </div>
        </a>
      </div>
        
    )
}
export default resume;
