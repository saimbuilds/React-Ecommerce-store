import axios from 'axios'
import React, { useEffect } from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from './Components/Nav'
import { useDispatch } from 'react-redux';
import { asyncCurrentUser } from './Store/Reducer/Actions/userAction';
import { asyncLoadProduct } from './Store/Reducer/Actions/productAction';

const App = () => {
  const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(asyncCurrentUser());
  dispatch(asyncLoadProduct());
 }, [])
  
  return (
    <div className='w-screen overflow-x-hidden h-auto  bg-gray-800 text-white p-5'>
      <Nav/>
      <MainRoutes/>
       
    </div>
  )
}

export default App