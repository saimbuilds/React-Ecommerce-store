import axios from "../Api/AxiosConfig";

import { useEffect, useState } from "react";


const useInfiniteProduct = () => {
    
  const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);
    const fetchProduct = async () => {
    try {
       
      const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`);
      
      if (data.length ==0){
        sethasMore(false);
      }else{
        sethasMore(true)
      }
          setproducts((prev) => [...prev, ...data]);

    } catch (error) {}
  };
  
  useEffect(() => {
    fetchProduct();

    return () => {};
  }, []);

  return  {products, hasMore, fetchProduct}
}

export default useInfiniteProduct