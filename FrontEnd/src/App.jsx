import axios from 'axios'
import React, { useEffect } from 'react'
import { asyncGetUser } from './Store/Reducer/Actions/userAction'

const App = () => {
 
  useEffect (()=>{
    asyncGetUser()
  }, [])
  return (
    <div>App</div>
  )
}

export default App