import React from 'react'
import data from './Jewel.json'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'

const Jewel = () => {
  return (
    <div id='Jewel'>
        <h2 className='text-center pb-4 mx-auto font-bold overflow-hidden pt-2 w-full text-5xl'>Jewelleries</h2>
     
       
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
              <img className='justify-center h-90 object-contain flex mx-auto items-center mt-6' src={item.image} alt="" />
              <div className='flex justify-between px-6 pt-3'>
                <p className='font-bold text-xl text-orange-700 cursor-pointer'>Buy Now</p>
                <p className='cursor-pointer'>See More</p>
              </div>
           </div>
           
          </SwiperSlide>
      ))    
      }
      <SliderButton/>
     </Swiper>
    </div>
  )
}

export default Jewel

const SliderButton=()=>{
    const swiper = useSwiper()
    return(
      <div className='flex w-full justify-center space-x-2 items-center mx-auto py-12'>
  
       <div className='px-2 py-2 transition duration-700 ease-in-out hover:bg-orange-700 bg-black'><img  onClick={()=>swiper.slidePrev()}
        className='cursor-pointer filter invert   ' src="./less-than.png" alt="" /></div>
  
       <div className='px-2 py-2  transition duration-700 ease-in-out hover:bg-orange-700 bg-black'><img onClick={()=>swiper.slideNext()}
        className='cursor-pointer  filter invert ' src="./more-than.png" alt="" /></div>
      </div>
    )
  }