import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../Store/Reducer/Actions/userAction";
import { toast } from "react-toastify";




const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (user) => {
    dispatch(asyncLoginUser(user))
    const isLoggedIn = await dispatch(asyncLoginUser(user));
    console.log(isLoggedIn);
    if(isLoggedIn){
      toast.success("Logged in successfully", { pauseOnHover: false, autoClose: 1600 });
     
        navigate("/");
     
    }else{
      toast.error("Invalid credentials: No matching user found.", { pauseOnHover: false, autoClose: 1600 });
        }
        reset()
    }
    
    return (
      <div className="flex w-full justify-center ">
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="flex flex-col w-1/2 text-white gap-5 items-center mt-10 "
        >
          
          <input {...register("email")} type="text" placeholder="email" className="outline-0 border-b py-1 w-1/2" />
          <input {...register("password")} type="text" placeholder="password" className="outline-0 border-b py-1 w-1/2" />
          <button className="bg-blue-500 px-2 py-1 rounded-lg cursor-pointer">Login</button>
          <p className="text-sm mt-3">Don't have an account? <Link to="/register" className="text-blue-400 cursor-pointer">Register</Link></p>
        </form>
      </div>
    );
  };


export default Login;
