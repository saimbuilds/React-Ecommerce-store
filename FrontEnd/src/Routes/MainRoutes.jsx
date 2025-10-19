import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// ✅ Lazy load all pages
const Home = lazy(() => import("../Pages/Home"));
const Products = lazy(() => import("../Pages/Products"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));
const UpdateProduct = lazy(() => import("../Pages/Admin/UpdateProduct"));
const CreateProduct = lazy(() => import("../Pages/Admin/CreateProduct"));
const ProductDetails = lazy(() => import("../Pages/ProductDetails"));
const UserProfile = lazy(() => import("../Pages/User/UserProfile"));
const Cart = lazy(() => import("../Pages/User/Cart"));

const MainRoutes = () => {
  return (
    // ✅ Suspense shows fallback while lazy components load
    
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-cart" element={<Cart />} />
      </Routes>
    
  );
};

export default MainRoutes;
