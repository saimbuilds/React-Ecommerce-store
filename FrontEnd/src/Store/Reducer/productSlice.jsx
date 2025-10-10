import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products : []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   loadProduct: (state, action) =>{
    state.products = action.payload
   }
  },
})




export default productSlice.reducer;
export const {loadProduct} = productSlice.actions