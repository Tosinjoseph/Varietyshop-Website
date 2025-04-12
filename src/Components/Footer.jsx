import React from 'react'

const Footer = () => {
  return (
    <div className='px-4 md:px-25 h-50 pb-6 lg:px-30 justify-center pt-12 items-center mx-auto bg-black'>
        <h2 className='w-full text-center text-4xl text-white pt-6 font-bold'>D-Answer</h2>
        <div className='w-230 flex justify-center mx-auto items-center '>
           <div className='w-full relative flex mt-4 h-6 justify-center mx-auto'>
            <input type="text" placeholder='Your email'  className='w-full  py-3 border mx-auto justify-center   border-b-white' />
            <span className='text-orange-700 absolute text-2xl cursor-pointer right-0 bottom-3 hover:text-white'>SUBSCRIBE</span></div> 
        </div>
    </div>
  )
}

export default Footer