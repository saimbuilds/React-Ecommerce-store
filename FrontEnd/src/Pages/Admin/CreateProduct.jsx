import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateProduct } from '../../Store/Reducer/Actions/productAction';

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const createProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asyncCreateProduct(product))
        navigate("/products");
        
        
      };
  return (
     <div className="flex w-full justify-center ">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="flex flex-col w-1/2 text-white gap-8 items-center mt-10 "
      >
        
        <input {...register("title")} type="text" placeholder="title" className="outline-0 border-b py-1 w-1/2" />
        <input {...register("image")} type="text" placeholder="image url" className="outline-0 border-b py-1 w-1/2" />
        <input {...register("price")} type="number" placeholder="0.00" className="outline-0 border-b py-1 w-1/2" />
        <textarea {...register("description")} className='w-1/2 outline-0' placeholder='Enter product description'></textarea>
        <input {...register("category")} type="text" placeholder="Enter Category" className="outline-0 border-b py-1 w-1/2" />
        <button className="bg-blue-500 px-2 py-1 rounded-lg cursor-pointer">Create Product</button>
        
      </form>
    </div>
  )
}

export default CreateProduct