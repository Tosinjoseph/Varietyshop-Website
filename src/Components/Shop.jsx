import React from 'react'
import data from '../Slider.json'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
const Shop = () => {
  return (
    <div className='px-4 md:px-20 lg:px-30 mx-auto justify-center items-center'>
        <h2 className='text-center mx-auto font-bold overflow-hidden pt-2 w-full text-4xl'>Man & Woman Fashion</h2>
     
       
       <Swiper className='min-h-screen' >
        {
        data.map((item, i)=>(
            <SwiperSlide key={i} className='grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
             <div className='bg-white  rounded-sm shadow-2xl w-full md:w-1/3 '>
                <h3>{item.name}</h3>
                <p>price ${item.price}</p>
                <img src={item.image} alt="" />
             </div>
             
            </SwiperSlide>
        ))    
        }
       </Swiper>
       
    </div>
  )
}

export default Shop