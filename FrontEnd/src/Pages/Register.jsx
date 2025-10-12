import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {asyncRegisterUser} from '../Store/Reducer/Actions/userAction'

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        dispatch(asyncRegisterUser(user));
        navigate("/login")
        
      };
  return (
     <div className="flex w-full justify-center h-screen">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="flex flex-col w-1/2 text-white gap-5 items-center mt-10 "
      >
        
        <input {...register("username")} type="text" placeholder="username" className="outline-0 border-b py-1 w-1/2" />
        <input {...register("email")} type="text" placeholder="email" className="outline-0 border-b py-1 w-1/2" />
        <input {...register("password")} type="text" placeholder="password" className="outline-0 border-b py-1 w-1/2" />
        <button className="bg-blue-500 px-2 py-1 rounded-lg cursor-pointer">Register</button>
        <p className="text-sm mt-3">Already have an account? <Link to="/login" className="text-blue-400 cursor-pointer">Login</Link></p>
      </form>
    </div>
  )
}

export default Register