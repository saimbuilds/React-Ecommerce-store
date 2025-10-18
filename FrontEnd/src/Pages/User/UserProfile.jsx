import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncDeleteUser, asyncLogOutUser, asyncUpdateUser } from '../../Store/Reducer/Actions/userAction';
import { toast } from 'react-toastify';

const UserProfile = () => {
   const user = useSelector((state) => state.userSlice.users);
   const {id} = user;
    
    const { register, handleSubmit} = useForm({
        defaultValues:{
            username: user.username,
            password: user.password,
            email: user.email
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const userProfileHandler = (user) => {
        dispatch(asyncUpdateUser(id, user))
        navigate("/");
        
        
      };
      const logOutUser  = (user) =>{
        dispatch(asyncLogOutUser(user));
        toast.success("Logged Out Successfully", { pauseOnHover: false, autoClose: 1600 });
             
                navigate("/");
      }
      const deleteUser = () =>{
        dispatch(asyncDeleteUser(id));
        toast.error("Deleted Successfully!", { pauseOnHover: false, autoClose: 1600 });
        navigate("/");
      }
  return (
    <div className="flex justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit(userProfileHandler)}
        className="flex flex-col w-1/2 text-2xl text-white gap-8 items-center mt-10 "
      >
        
        <input {...register("username")} type="text"  className="outline-0 border-b py-1 w-1/2" />
        <input {...register("email")} type="text"  className="outline-0 border-b py-1 w-1/2" />
        <input {...register("password")} type="text"  className="outline-0 border-b py-1 w-1/2" />
        <div className='flex gap-4'>
        <button className="bg-blue-500 px-2 py-1 rounded-lg cursor-pointer">Update User</button>
        <button onClick={logOutUser} type='button' className="bg-green-500 px-2 py-1 rounded-lg cursor-pointer">Log Out</button>
        <button type='button' onClick={deleteUser} className="bg-red-500 px-2 py-1 rounded-lg cursor-pointer">Delete User</button>

        </div>
        
      </form>
    </div>
  )
}

export default UserProfile