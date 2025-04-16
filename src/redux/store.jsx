import {configureStore} from '@reduxjs/toolkit';
import productSlice from "./productSlice.jsx";
import electronicSlice from "./electronicSlice.jsx";
import cartSlice from "./cartSlice.jsx"


const store = configureStore({
reducer: {

  product: productSlice, 
  electronic: electronicSlice,
  cart : cartSlice

}
}

)

export default store;