import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncDeleteProduct, asyncUpdateProduct } from "../Store/Reducer/Actions/productAction";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productSlice.products);
  const users = useSelector((state)=>state.userSlice.users);
  
  
  const product = products?.find((product) => product.id == id);
  console.log(product);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      category: product.category,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product))
    
  }; 

  const deleteHandler = ()=>{
    dispatch(asyncDeleteProduct(id));
    navigate("/products")
  }

  return (
    <>
      <div className="w-full h-auto bg-gray-800 flex flex-col overflow-hidden mt-20 px-8 justify-between">
        <div className="w-full flex justify-between border-b-2 py-10">
          <div className="w-[40%] h-[60vh] bg-blue-100 rounded-2xl overflow-hidden ">
            <img className="w-full h-full" src={product.image} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <h4 className="text-2xl text-green-300">Price: {product.price}$</h4>
            <p className="text-lg">{product.description}</p>
            <h3 className="text-lg">Category: {product.category}</h3>
          </div>
        </div>
        {users && (users.isAdmin)? <div className="w-[100%] ">
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="flex flex-col w-full text-white gap-8  mt-10 "
          >
            <input
              {...register("title")}
              type="text"
              placeholder="title"
              className="outline-0 border-b py-1 w-1/2"
            />
            <input
              {...register("image")}
              type="text"
              placeholder="image url"
              className="outline-0 border-b py-1 w-1/2"
            />
            <input
              {...register("price")}
              type="number"
              placeholder="0.00"
              className="outline-0 border-b py-1 w-1/2"
            />
            <textarea
              {...register("description")}
              className="w-1/2 outline-0"
              placeholder="Enter product description"
            ></textarea>
            <input
              {...register("category")}
              type="text"
              placeholder="Enter Category"
              className="outline-0 border-b py-1 w-1/2"
            />
            <button className="bg-blue-500 w-fit px-2 py-1 rounded-lg cursor-pointer">
              Update Product
            </button>
            <button onClick={deleteHandler} className="w-fit px-2 py-1 rounded-lg cursor-pointer bg-red-400">Delete Product</button>
          </form>
        </div>: ""}
       
      </div>
    </>
  );
};

export default ProductDetails;
