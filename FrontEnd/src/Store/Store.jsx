import { configureStore } from '@reduxjs/toolkit'


import  userSlice  from './Reducer/userSlice'
import  productSlice  from './Reducer/productSlice'
import  cartSlice  from './Reducer/cartSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    carts: cartSlice
  },
})