


import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#252525] pt-40 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d182851c-7f86-4f21-b699-e3841548bcc8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-400  text-gray-300'>Contact</p>
                <p className='text-gray-300 py-6 '>  Submit the form below or shoot me an email - jyotheshkar@gmail</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' hover:text-black text-white border-2 hover:bg-orange-400 hover:border-white border-orange-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact