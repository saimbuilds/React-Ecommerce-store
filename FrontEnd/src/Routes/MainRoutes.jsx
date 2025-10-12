import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import UpdateProduct from '../Pages/Admin/UpdateProduct'
import CreateProduct from '../Pages/Admin/CreateProduct'
import ProductDetails from '../Pages/ProductDetails'


const MainRoutes = () => {
 
  
  
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/create-product' element={<CreateProduct/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>

    </Routes>
  )
}

export default MainRoutes