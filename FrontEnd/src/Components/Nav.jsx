import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userSlice.users);
  // console.log(user)
  
  
  return (
    <nav className="flex justify-center items-center gap-x-5 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {
        (user && user.username) ?
        <>
          {(user.isAdmin)?<>
            <NavLink to="/admin/create-product">Create Product</NavLink>
            <NavLink to="/admin/update-product">Update Product</NavLink>
          </>:<></>}
        </>
        :<>
          <NavLink to="/login">Login</NavLink>
        </>
      }
     
    </nav>
  );
};

export default Nav;
