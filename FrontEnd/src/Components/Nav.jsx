import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogOutUser } from "../Store/Reducer/Actions/userAction";
import { toast } from "react-toastify";

const Nav = () => {
  const user = useSelector((state) => state.userSlice.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logoutHandler = ()=>{
    dispatch(asyncLogOutUser());
    navigate("/");
    toast.success("Logged out successfully", { pauseOnHover: false, autoClose: 1600 });
  }
  
  return (
    <nav className="flex justify-center items-center gap-x-5 ">
      <NavLink to="/">Products</NavLink>
     
      {
        (user && user.username) ?
        <>
          <NavLink to="/user-profile">Settings</NavLink>
          {(user.isAdmin)?<>
            <NavLink to="/admin/create-product">Create Product</NavLink>
            <NavLink to="/admin/update-product">Update Product</NavLink>
            <button onClick={logoutHandler} className="bg-blue-400  px-2 py-1 rounded-lg cursor-pointer">Log out</button> 
          </>:
            
          <>
           <button onClick={logoutHandler} className="bg-blue-400  px-2 py-1 rounded-lg cursor-pointer">Log out</button> 
          </>}
        </>
        :<>
          <NavLink to="/login">Login</NavLink>
        </>
      }
      
     
    </nav>
  );
};

export default Nav;
