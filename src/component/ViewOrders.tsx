"use client"
import { useProduct } from "@/hooks/useProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Product {
    productId: string;
    quantity: number;
    size: string;
    _id: string;
  }


interface productData{
    userId: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
    url: string;
}
interface ProductResponse {
    data: Product[];
  }

const ViewOrders = ({orders}:{orders:Product[]}) => {
    console.log(orders)
    const [products, setProducts] = useState<productData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProductDetails = async (productId: string): Promise<productData> => {
            const response = await axios.get<productData>(`https://api.karwaanfilms.com/api/v1/product/${productId}`);
            return response.data;
          };
    
          const fetchProducts = async () => {
            try {
              const productDetailsPromises = orders.map(product => fetchProductDetails(product._id));
              const detailedProducts = await Promise.all(productDetailsPromises);
              setProducts(detailedProducts);
            } catch (err) {
            console.log("erer",err)
            setError("Can't fetch products right now")
            toast.error("Something went wrong")
            } finally {
              setLoading(false);
            }
          };
    
        fetchProducts();
      }, [orders]);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    



    return (
    <div>
        
        <p>done</p>
    </div>
  )
}

export default ViewOrders