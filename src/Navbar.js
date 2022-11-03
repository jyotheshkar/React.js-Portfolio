import React, {useState,useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import reactspinner from '../src/video/reactnav.gif';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav , setNav ] = useState(false)
    const handleClick = ( ) => setNav(!nav)

     return (
    <div  className='fixed  w-full h-[80px] flex justify-between items-center px-4 bg-[#252525] text-gray-100 shadow-lg shadow-orange-500/50'>
<div> 
<img src={reactspinner}  className='w-[50px] border-none border-hidden'   />
</div>

{/* menu */}
     <div className=" hidden  md:flex  "  >
       <ul className="hidden md:flex mx-4 ">

        <li className='hover:rounded hover:bg-black-100 text-xl hover:border-orange-400 hover:border mx-1
        hover:text-orange-400 hover:shadow-md py-2 rounded-3xl hover:shadow-orange-500/50 '>

         <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className='hover:rounded hover:bg-black-100 text-xl hover:border-orange-400 hover:border mx-1
        hover:text-orange-400 hover:shadow-md py-2 rounded-3xl hover:shadow-orange-500/50  '> 
         <Link to='about' smooth={true} duration={500}>
        About
      </Link> </li>

         <li className='hover:rounded hover:bg-black-100 text-xl hover:border-orange-400 hover:border mx-1
        hover:text-orange-400 hover:shadow-md py-2 rounded-3xl hover:shadow-orange-500/50  '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

         <li className='hover:rounded hover:bg-black-100 text-xl hover:border-orange-400 hover:border mx-1
        hover:text-orange-400 hover:shadow-md py-2 rounded-3xl hover:shadow-orange-500/50 '>
           <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>

          <li className='hover:rounded hover:bg-black-100 text-xl hover:border-orange-400 hover:border mx-1
        hover:text-orange-400 hover:shadow-md py-2 rounded-3xl hover:shadow-orange-500/50  '>
           <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
     
        </ul>
    </div>
{/* hamburger */}
<div onClick={handleClick} className="md:hidden z-10" > {
    !nav 
    ? 
    < MenuIcon className='hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out' /> 
    : 
    < CloseIcon className='hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out' />
} </div>
{/* mobile menu */}

<ul  className=" hidden" 
  className={ !nav ? 'hidden'
   : ' absolute shadow-lg  shadow-orange-500/50 border-orange-400 border ml-[280px] mt-[300px] w-[180px] h-[336px] bg-[#252525] flex flex-col  justify-end items-center '  } >
       
        <li className="py-4 hover:underline  hover:underline-offset-4 text-xl hover:rounded-3xl  hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out  " >
        <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
       
        <li className="py-4  hover:underline  hover:underline-offset-4 text-xl hover:rounded-3xl  hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out  " >
        <Link to='about' smooth={true} duration={500}>
        About
      </Link>
          </li>
       
        <li className="py-4  hover:underline  hover:underline-offset-4 text-xl hover:rounded-3xl  hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out  " >
        <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
       
        <li className="py-4  hover:underline  hover:underline-offset-4 text-xl hover:rounded-3xl  hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out  " >
        <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
       
        <li className="py-4 hover:underline  hover:underline-offset-4 text-xl hover:rounded-3xl  hover:bg-black-100 hover:text-orange-400 hover:shadow-orange-400 hover:scale-110 transition transform duration-400 ease-out  " >
        <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
       
        </ul>
{/* Social icons
<div className="hidden">    </div> */}
    </div>
  )
}

export default Navbar