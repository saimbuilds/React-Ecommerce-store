import axios from 'axios'
import React, { useEffect } from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from './Components/Nav'
import Button from '@mui/material/Button';

const App = () => {
 
  
  return (
    <div className='w-screen h-screen bg-gray-800 text-white p-5'>
      <Nav/>
      <MainRoutes/>
       
    </div>
  )
}

export default App