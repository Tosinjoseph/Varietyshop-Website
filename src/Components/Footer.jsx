import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const Navigate = useNavigate()
  return (
    <div className='px-4 md:px-25 h-140 md:h-100 pb-6 lg:px-30 justify-center pt-12 items-center mx-auto bg-black'>
        <h2 className='w-full text-center text-4xl text-white pt-6 font-bold'>D-Answer</h2>
        <div className='w-2/3 flex justify-center relative mx-auto items-center '>
           <div className='w-full  border  border-b-white    flex mt-12 h-6 justify-center mx-auto'>
            <input type="email" placeholder='Your Email'  className='w-full absolute bottom-0 outline-none   py-4  text-white pl-2 pr-30 text-2xl mx-auto justify-center ' />
            <h3 className='text-orange-700 bottom-4 right-2 absolute text-2xl cursor-pointer  hover:text-white'>SUBSCRIBE</h3>
            </div> 
        </div>
        <div className='justify-center flex-wrap w-full text-xl space-x-2 md:space-x-4  flex text-white pt-6 pb-14 items-center mx-auto'>
          <a className='cursor-pointer hover:text-orange-700' href="">Best Sellers</a>
          <a className='cursor-pointer hover:text-orange-700' href="">Gift Ideas</a>
          <a className='cursor-pointer hover:text-orange-700' href="">New Releases</a>
          <a className='cursor-pointer hover:text-orange-700' href="">Today's Deal</a>
          <a className='cursor-pointer hover:text-orange-700' href="">Customers' Service</a>
        </div>
        <h3 className='text-white text-center text-xl'>Help Line : +2349070217736</h3>
        <h3 className='text-white text-center text-xl mt-3'>2025 All Right Reserved. Coded by Tosin Joseph</h3>
        <p className='text-white text-center cursor-pointer' onClick={()=>Navigate('/')}>Home</p>
        
    </div>
  )
}

export default Footer