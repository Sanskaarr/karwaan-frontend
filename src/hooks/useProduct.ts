import { useAxios } from "./useAxios";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import {
  getAllProduct_request, getAllProduct_success, getAllProduct_failure,
  getProduct_request, getProduct_success, getProduct_failure
} from "../redux/reducers/ProductReqestReducer";
import {  useState } from "react";

export const useProduct = (type?: string|null, tag?: string|null, searchQuery?: string|null, id?: string) => {
  const dispatch = useAppDispatch();
  const [response, setResponse] = useState<any>(null);
  const [singleResponse, setSingleResponse] = useState<any>(null);

  const handleGetAllProduct = async () => {
    dispatch(getAllProduct_request());

    try {
      let endpoint = '/api/v1/product';

      if (type && tag) {
        // endpoint += `?type=${type.toLowerCase()}&tag=${tag.toLowerCase()}`;
        if(tag==="all") endpoint;
        else endpoint += `?tag=${tag.toLowerCase()}`;
      } else if (type) {
        endpoint += `?type=${type.toLowerCase()}`;
      } else if (tag) {
        if(tag==="all") endpoint;
        else endpoint += `?tag=${tag.toLowerCase()}`;
      } else if (searchQuery) {
        endpoint += `?searchQuery=${searchQuery}`;
      }

      const { getCall } = useAxios(endpoint);
      const result = await getCall();
      
      if (result.status === "success") {
        dispatch(getAllProduct_success());
      }
      setResponse(result.data);

    } catch (error:any) {
      dispatch(getAllProduct_failure(error.message));

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        dispatch(getAllProduct_failure(error.response?.data.message));
      }
    }
  };
  const handleGetProduct = async () => {
    dispatch(getProduct_request());
    try {
      const endpoint = `/api/v1/product/${id}`;
      const { getCall } = useAxios(endpoint);
      const result = await getCall();
      console.log("i am in",result);
      if (result.status === "success") {
        dispatch(getProduct_success());
      }
      setSingleResponse(result.data);

    } catch (error:any) {
      dispatch(getProduct_failure(error.message));

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        dispatch(getProduct_failure(error.response?.data.message));
      }
    }
  };

  return { response, handleGetAllProduct,handleGetProduct,singleResponse };
};


// import { useAxios } from "./useAxios"
// import axios, { Axios } from 'axios'
// import { toast } from "react-toastify";
// import { useAppDispatch } from "../redux/hooks";
// import {
//     getAllProduct_request, getAllProduct_success, getAllProduct_failure
//     , getProduct_request, getProduct_success, getProduct_failure
// }
//     from "../redux/reducers/ProductReqestReducer";
// import { update_product_data } from "@/redux/reducers/ProductReducer";
// import { useEffect, useState } from "react";
// export const useProduct = (type?: string, tag?: string, searchQuery?: string, id?: string) => {
//     const dispatch = useAppDispatch();

//     const handleGetAllProduct = () => {
//         dispatch(getAllProduct_request());
//         const [response, setResponse] = useState<any>(null);
//         try {
//             console.log("nice2")

//             useEffect(() => {

//                 const getProducts = async () => {
//                     try {

                
//                     if (type && tag) {
//                         const { getCall } = useAxios(`/api/v1/product?type=${type}&tag=${tag}`);
//                         return setResponse(await getCall());
//                     }
//                     if (type) {
//                         const { getCall } = useAxios(`/api/v1/product?type=${type}`);
//                         return setResponse(await getCall());
//                     }
//                     if (tag) {
//                         const { getCall } = useAxios(`/api/v1/product?tag=${tag}`);
//                         return setResponse(await getCall());
//                     }
//                     if (searchQuery) {
//                         const { getCall } = useAxios(`/api/v1/product?searchQuery=${searchQuery}`);
//                         return setResponse(await getCall());
//                     }
//                     const { getCall } = useAxios(`/api/v1/product`);
//                     return setResponse(await getCall());
//                 }catch (error) {
//                 if (axios.isAxiosError(error)) {
//                     toast.error(error.response?.data.message);
//                 }
//                 console.log("error agya bhai", error)
//             }}
//             getProducts();
//             console.log("dekho dekho voh aagya... 58");

//             }, [tag,type,searchQuery])
//             console.log("response",response);

//                 if (response.status === "success") {
//                     dispatch(getAllProduct_success());
//                     dispatch(update_product_data(response.data));
//                     console.log("response",response.data);
//                     return response.data;
//                 }
            
//         } catch (error: any) {
//             console.log("not nice")
//             dispatch(getProduct_failure(error.message));
//             if (axios.isAxiosError(error)) {
//                 toast.error(error.response?.data.message);
//                 dispatch(getProduct_failure(error.response?.data.message));
//             }
//         }

//     }

//     return { handleGetAllProduct }
// } 