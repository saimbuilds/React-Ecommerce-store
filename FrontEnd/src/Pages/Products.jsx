import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from '../Store/Reducer/Actions/userAction';


const Products = () => {
  const dispatch = useDispatch();

  const {users} = useSelector(state=>state.userSlice);
  const {products} = useSelector(state=>state.productSlice);
  const addToCartHandler = (product) =>{
    const copyUser = {...users, cart: [...users.cart]}
    // here the concept of deep and shallowcopy is used idk what it is
    console.log(copyUser);
    
    

    const x = copyUser.cart.findIndex ((c) => c?.product?.id==product.id);
    
    
    if (x==-1){
      
      
      copyUser.cart.push({product,  quantity: 1});
      console.log("if is running");
      
    }else{
      copyUser.cart[x]= {
        product, 
        quantity: copyUser.cart[x].quantity+1
      }
      console.log("else is running");
      
      
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser))
   
    
    
  }  
  const renderProduct = products.map((product)=>{
    return (
      
      <div className='w-[20%]  h-fit min-h-[65%] bg-blue-100 text-black p-2 rounded-xl flex flex-col gap-4'>
        <img className='w-full h-[30vh] object-cover' src={product.image} alt="" />
        <h1 className='text-2xl font-semibold'>{product.title}</h1>
        <small className='text-xl'>{product.description.slice(0,100)}....</small>
        <div className='flex justify-between'>
          <p className='text-2xl'>{product.price}$</p>
          <button onClick={()=>addToCartHandler(product)} className='bg-blue-400 px-2 py-1 rounded-lg cursor-pointer text-2xl'>Add to Cart</button>
        </div>
        <Link to = {`/product/${product.id}`} className=' bg-blue-600 text-xl text-white px-2 py-1 rounded-lg cursor-pointer w-fit'>More Info</Link>
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