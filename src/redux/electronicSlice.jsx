import { createSlice } from "@reduxjs/toolkit";

const initialState={
    productse: [],
    
}
const electronicSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       setProductse(state, action) {
        state.productse = action.payload
        
       } 
    }
})

export const {setProductse} =electronicSlice.actions;
export default electronicSlice.reducer;
