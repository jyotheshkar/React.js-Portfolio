import React from 'react';

import Icons from './Icons';


const Home = () => {

  return (
    <div  className="bg-[#252525] h-screen ">

{/* container  */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-white pt-40 h-[550px]'>
<p className='text-orange-400'> Hi , my name is  </p>
<h1 className='text-4xl sm:text-7xl font-bold text-gray-300' > Jyothesh <span className='text-orange-400'>karnam</span></h1>
<h2 className='text-4xl sm:text-7xl font-bold pt-5 text-gray-300 ' >I'm a <span className='text-orange-400' >Frontend Developer
<span className='text-white'>.</span></span></h2>
<h2 className='py-4 max-w-[700px] text-gray-300 '> I'm a Fresher interseted in Frontend Development.
   I am specialized in building React.js web applications,
  I am currently focused on building responsive frontend web applications.</h2>
</div>

     {/* social icons */}
     <div>
      <Icons />
     </div>
     
    </div>
  )
}

export default Home