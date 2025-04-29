import React from 'react'
import { useSelector } from 'react-redux'


const Store = () => {
    const products = useSelector(state=>state.product.products)
  return (
    <div className='px-4 md:px-25 lg:px-30 min-w-screen py-4 mx-auto justify-center items-center'>
        <h2 className='text-center mx-auto font-bold overflow-hidden py-2 w-full text-5xl'>Main Store</h2>
        <div className='grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
        {
            products.map(((product)=>(
                <div key={product.id} className='justify-center hover:scale-90 transition-all ease-in-out duration-700 shadow-xl  w-full mx-auto items-center'>
                    <h3 className='text-2xl pt-4 font-bold text-center'>{product.name}</h3>
                    <p className='text-xl pt-4 font-semibold text-center'><span className='text-orange-700'>price</span> ${product.price}</p>
                    <img className='justify-center  flex mx-auto object-contain h-50' src={product.image} alt="" />
                    <div className='flex items-center justify-between px-6'>
                  <p className='font-bold text-xl text-orange-700 cursor-pointer'>Buy Now</p>
                  <p className='cursor-pointer'>See More</p>
                </div>
                </div>
            )))
        }
        </div>
    </div>
  )
}

export default Store