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

