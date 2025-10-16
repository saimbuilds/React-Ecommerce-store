import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from '../Store/Reducer/Actions/userAction';


const Products = () => {
  const dispatch = useDispatch();

  const {userSlice: {users}, productSlice: {products}} = useSelector(state=>state)
  const addToCartHandler = (id) =>{
    const copyUser = {...users, cart: [...users.cart]}
    // here the concept of deep and shallowcopy is used idk what it is
    
    // const x=  copyUser.cart.findIndex(c => c);

    const x = copyUser.cart.findIndex ((c) => c.id==id);
    
    if (x==-1){
      console.log("-1 runed");
      
      copyUser.cart.push({productId: id, quantity: 1})
    }else{
      copyUser.cart[x].quantity+=1;
      console.log("i runned");
      
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser))
    
    
  }  
  const renderProduct = products.map((product)=>{
    return (
      
      <div className='w-[20%]  h-[75%]  bg-blue-100 text-black p-2 rounded-xl flex flex-col gap-4'>
        <img className='w-full h-[30vh] object-cover' src={product.image} alt="" />
        <h1 className='text-xl font-semibold'>{product.title}</h1>
        <small>{product.description.slice(0,100)}....</small>
        <div className='flex justify-between'>
          <p>{product.price}$</p>
          <button onClick={()=>addToCartHandler(product.id)} className='bg-blue-400 px-2 py-1 rounded-lg cursor-pointer'>Add to Cart</button>
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