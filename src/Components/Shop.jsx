import React from 'react'
import data from '../Slider.json'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
const Shop = () => {
  return (
    <div className='px-4 md:px-20 lg:px-30 mx-auto justify-center items-center'>
        <h2 className='text-center mx-auto font-bold overflow-hidden pt-2 w-full text-5xl'>Man & Woman Fashion</h2>
     
       
       <Swiper  className='px-4 min-h-screen py-20 md:px-20 lg:px-30'
       spaceBetween={40}
       breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
        >
        {
        data.map((item, i)=>(
            <SwiperSlide key={i} className=' justify-center items-center mt-10'>
             <div className='bg-white mt-12   rounded-sm shadow-2xl h-140  '>
                <h3 className='text-2xl pt-4 font-bold text-center'>{item.name}</h3>
                <p className='text-xl pt-4 font-semibold text-center'><span className='text-orange-700'>price</span> ${item.price}</p>
                <img className='justify-center flex mx-auto items-center mt-6' src={item.image} alt="" />
                <div className='flex justify-between px-6 pt-3'>
                  <p className='font-bold text-xl text-orange-700 cursor-pointer'>Buy Now</p>
                  <p className='cursor-pointer'>See More</p>
                </div>
             </div>
             
            </SwiperSlide>
        ))    
        }
       </Swiper>
       
    </div>
  )
}

export default Shop