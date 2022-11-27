import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#252525] text-gray-300 " >

        <div className='flex flex-col justify-center items-center w-full h-full' >
      <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8  '>
        <div className='sm:text-right pb-8 pl-4' >
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">About</p>
        </div>

        <div>  </div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-4xl font-bold sm:text-right ' >
                <p className=' p-2 ' > Hi, I'm <span className='text-orange-400'>Jyothesh Karnam   </span>, nice to meet you. Please take a look around.</p>
            </div>
    
            <div className='md:' >
              <p className=' md:bg-gradient-to-r from-orange-400 bg-gradient-to-b from-orange-400 p-2 text-white'>I am passionate about building new softwares which helps me to understand the fundamentals of 
                frontend development. i am a fresher and have a personal coding experince over 
                an year in frontend development. i have learnt, developed and deployed a total of 8 websites based on React.js
                and Next.js. Earlier this year i have built demo versions of Airbnb, Instagram and Tesla.   </p>  
            </div>

        </div>
        </div>
    </div>
  )
}


{ /*  
 breakfast :
      brocolli -> 200gms 
      4 eggs -> egg white 
      180ml black coffee  { honey }

 10: 30 : Green tea 

 12 : 30 : lunch

 Raggi ball big 250gms 
veggies , chicken 

6: 30 pm : green tea
 
dinner: 
350ml lemon juice
150gms rice
     
*/}




export default About