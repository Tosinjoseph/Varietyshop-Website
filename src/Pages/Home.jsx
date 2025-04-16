import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx';
import { Link } from 'react-router-dom';
import { CgCalendarNext, CgMenuRight } from 'react-icons/cg';





const Home = ({heroList,heroText,setHeroText}) => {
  const[showSidebar, setShowSidebar]= useState(false)
  useEffect(()=>{
    if(showSidebar){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }
  },[showSidebar])
  
  return (
    <div id='Home'  className=" relative min-h-screen overflow-hidden justify-center  bg-center bg-fixed  bg-no-repeat bg-cover py-4 items-center mx-auto" style={{backgroundImage: "url('./banner-bg.png')" }}>
        <Navbar/>
        <h2 className='w-full text-center text-4xl text-white pt-6 font-bold'>D-Answer</h2>
        <Hero showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='absolute text-4xl text-white md:text-7xl  px-4 md:px-25 lg:px-40 mx-auto justify-center font-bold space-x-4 text-center w-full top-90'>
        <h1>{heroList.text1}</h1>
        <h1>{heroList.text2}</h1>
      </div>
       
      <div>
      <div className='justify-between px-4 md:px-20 lg:px-30 pt-70  items-center mx-auto flex'>
        <img onClick={()=>setHeroText(0)} src='./less-than.png' alt='' className='px-2 py-2 cursor-pointer z-20 object-contain rounded-full bg-white/30'/><CgMenuRight/>
       <img onClick={() => setHeroText(prev => prev === 1 ? 1 : prev + 1)} src='./more-than.png'  className='px-2 py-2 object-contain z-20  cursor-pointer rounded-full bg-white/30'/>
      </div> 
      <button className='px-12 py-3 bg-black rounded text-white cursor-pointer hover:bg-orange-700 transition ease-in-out duration-700 flex justify-center mx-auto z-19 mt-30 md:mt-25 lg:mt-20'>BUY NOW</button>
      </div>
      <div className={`fixed ${showSidebar? '' : '-translate-x-80 ease-in-out transition duration-700'} font-semibold top-0 text-xl pt-20 pl-10 space-y-5 flex flex-col text-white  bottom-0 left-0 w-76  z-90 transition-all ease-in-out bg-black`}>
       
       <a href='#Home' to='/' className='hover:text-orange-700'>Home</a>
      <a href="#Fashion" className='hover:text-orange-700'>Fashion</a> 
       <a href='#Electronic' className='hover:text-orange-700'>Electronic</a>
       <a href='#Jewel' className='hover:text-orange-700'>Jewellery</a>
      </div>
      
      <img src="./cross-desktop.png" onClick={()=>setShowSidebar(false)} className={`fixed z-90 top-5 left-51 filter ${showSidebar? '' : 'hidden'} invert object-contain  w-8 cursor-pointer`} alt="" />

      
    </div>
  )
}

export default Home