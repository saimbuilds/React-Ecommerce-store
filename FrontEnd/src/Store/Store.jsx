import { configureStore } from '@reduxjs/toolkit'


import  userSlice  from './Reducer/userSlice'
import  productSlice  from './Reducer/productSlice'
import  cartSlice  from './Reducer/cartSlice'

export default configureStore({
  reducer: {
    userSlice: userSlice,
    productSlice: productSlice,
    cartSlice: cartSlice
  },
})