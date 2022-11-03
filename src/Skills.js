import React from 'react';
import HTML from './images/html.png';
import CSS from './images/css.png';
import JavaScript from './images/javascript.png';
import ReactImg from './images/react.png';
import FireBase from './images/firebase.png';
import GitHub from './images/github.png';
import Tailwind from './images/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full pt-8 bg-[#252525] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-orange-400  '>Skills</p>
            <p className='py-6'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8  '>
           {/* begin */}
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-2  ' src={HTML} alt="HTML icon " />
                <h1 className="mb-3 italic text-xl" > <span className="text-white not-italic " > HTMl </span></h1>
            </div>
            {/* end */}
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src={CSS} alt="HTML icon " />
                <h1 className=" mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > CSS </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-[] mx-auto mt-6 mb-3 h-[80px] ' src="https://logodix.com/logo/374736.png" alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > JavaScript </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src={ReactImg} alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > React.js </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src={FireBase} alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > Firebase </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src={GitHub } alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > Github </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src={Tailwind} alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > Tailwind CSS </span></h1>
            </div>
            <div className='bg-[#161616] shadow-md shadow-orange-600/100 hover:scale-110 duration-500 rounded-lg 
               border border-orange-400 '>
                <img className='w-20 mx-auto mt-6 mb-3  ' src="https://mui.com/static/logo.png" alt="HTML icon " />
                <h1 className="mb-3 hover:text-[#0b0b0b] text-[#0b0b0b] italic text-xl" > <span className="text-white not-italic" > Material UI</span></h1>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Skills