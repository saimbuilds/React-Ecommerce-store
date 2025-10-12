import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login';
import { Link } from 'react-router-dom';


const Products = () => {
  const products = useSelector((state) => state.productSlice.products);
  const renderProduct = products.map((product)=>{
    return (
      
      <div className='w-[20%]  h-[75%]  bg-blue-100 text-black p-2 rounded-xl flex flex-col gap-4'>
        <img className='w-full h-[30vh] object-cover' src={product.image} alt="" />
        <h1 className='text-xl font-semibold'>{product.title}</h1>
        <small>{product.description.slice(0,100)}....</small>
        <div className='flex justify-between'>
          <p>{product.price}$</p>
          <button className='bg-blue-400 px-2 py-1 rounded-lg cursor-pointer'>Add to Cart</button>
        </div>
        <Link to = {`/product/${product.id}`} className='bg-blue-600 text-sm text-white px-2 py-1 rounded-lg cursor-pointer w-fit'>More Info</Link>
      </div>
    )
  })
  return (
    <>
     {products.length>0?<div className='bg-gray-800 h-screen flex flex-wrap gap-20 p-4 mt-10'>{renderProduct}</div>:"loading..."}
    </>
  )
}

export default Products