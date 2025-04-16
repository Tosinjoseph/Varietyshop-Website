import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
    const cart = useSelector(state =>state.cart)
  return (
    <div>
      {cart.products.length > 0 ?
      <div>
        {cart.products.map((product)=>(
                  <div key={product.id} className='flex justify-between p-3 border-b'>
                     <div className='md:flex items-center space-x-4'>
                        <img src={product.image} alt="" className='w-16 h-16 object-contain rounded'/>
                        <div className='flex-1 ml-4'>
                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                        </div>
                     </div>
                     <div className='flex space-x-12 items-center'>
                      <p>${product.price}</p>
                      <div className='flex items-center justify-center border'>
                        <button className='text-xl font-bold border-r px-1.5' >-</button>
                        <p className='text-xl px-2'></p>
                        <button className='text-xl px-1 border-l'>+</button>
                      </div>
                      <p></p>
                      
                     </div>
                  </div>
                  ))}
                  </div>
                  : <div>
                    <h3>Your Cart is Empty</h3>
                  </div> }
    </div>
  )
}

export default Cart