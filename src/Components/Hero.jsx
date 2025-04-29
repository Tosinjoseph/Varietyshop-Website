import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {  CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Hero = ({showSidebar,setShowSidebar}) => {
  const[category, showCategory]= useState(false)
 const toggleCategory =()=>{
    category? showCategory(false): showCategory(true)
  }
  const[lang, setLang]= useState(false)
 const toggleLang =()=>{
    lang? setLang(false): setLang(true)
  }

  const products = useSelector(state=>state.cart.products)
  useEffect(()=>{
    if(category){
      document.body.style.overflow ='hidden'
    }else{
      document.body.style.overflow ='auto'
    }
  },[category])

  useEffect(()=>{
    if(lang){
      document.body.style.overflow ='hidden'
    }else{
      document.body.style.overflow ='auto'
    }
  },[lang])
  return (
    <div className=''>
    <div className='absolute w-full    overflow-hidden justify-center flex-wrap py-6 gap-4 space-x-4 px-4 md:px-16 lg:px-20   flex-column items-center md:flex-row  mx-auto lg:flex'>
        <div className='flex  items-center gap-4 py-6 relative'>
            <img className='cursor-pointer' onClick={()=>setShowSidebar(true)} src="./toggle-icon.png" alt="" />
           <div> <button onClick={toggleCategory}  className='px-8  text-white  cursor-pointer py-2.5 items-center rounded hidden md:flex bg-black'>Allcategory<IoMdArrowDropdown className='ml-2'/></button>
           <div className={`fixed ${category? '': 'hidden h-60 z-100'} bg-white   w-42 px-5 py-5 space-y-3 rounded-sm mt-2  `}>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>
           </div>
            <div className='flex items-center w-full md:w-xl  '>
                <input placeholder='search this blog' className='bg-white px-4 w-full mx-auto lg:w-xl py-2.5 rounded-l-sm' type="text" ></input>
                <img src="./search-icon.png" className='object-contain border-orange-700 border-2.5 bg-orange-700 p-3 rounded-r-sm' alt="" />
            </div>
        </div>

        <div className='items-center justify-center'>
        <div className=' flex gap-4 justify-between '>
           
           <div> <button onClick={toggleLang} className='px-8 space-x-4 py-2.5 cursor-pointer items-center bg-white flex  rounded'>
              <img src="./flag-uk.png" alt="" className='object-contain' />  English 
              <IoMdArrowDropdown className=''/></button> 
              <div className={`fixed ${lang? '' : 'hidden'}  bg-white  w-42 px-5 py-5 space-y-3 rounded-sm mt-2  `}>
        <p className='flex'><img className='object-contain mr-3' src="./flag-france.png" alt="" />France</p>
        
      </div>
              </div>
        
        <div className='text-white text-xl gap-2 items-center flex font-semibold mt-4 mx-auto'>
         <Link className='relative' to='/cart'><AiOutlineShoppingCart className=''/>
         <span className='absolute text-xs text-center top-0 left-2 bg-orange-700 rounded-full w-4 h-4 '>{products.length > 0 ? products.length: <></>}</span>
         </Link>
          <h3>CART</h3>
          <CgProfile className='' />
          <h3>USER</h3>
          </div>
              
        </div>
        
        </div>
       

    </div>
   
    
    </div>
  )
}

export default Hero