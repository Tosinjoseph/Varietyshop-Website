import React from 'react'

const Navbar = () => {
  return (
    <div className='w-9/12 px-4  text-xl  hidden  font-semibold bg-black text-white
     md:px-16 lg:px-24 py-4 mx-auto items-center space-x-6 justify-center md:flex'  style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}>
        <a  className='cursor-pointer hover:text-orange-600' href="">Best Seller</a>
        <a className='cursor-pointer hover:text-orange-600' href="">Gift Ideas</a>
        <a  className='cursor-pointer hover:text-orange-600' href="">New Releases</a>
        <a  className='cursor-pointer hover:text-orange-600' href="">Today's Deal</a>
        <a  className='cursor-pointer hover:text-orange-600' href="">Customer's Service</a>
    </div>
  )
}

export default Navbar