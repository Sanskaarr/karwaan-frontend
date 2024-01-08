import { useAxios } from "./useAxios";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import {
    addItemToCart_request, addItemToCart_success, addItemToCart_failure,
    removeItemFromCart_request, removeItemFromCart_success, removeItemFromCart_failure,
    getAllCartItems_request, getAllCartItems_success, getAllCartItems_failure,
    emptyCart_request, emptyCart_success, emptyCart_failure,
} from "../redux/reducers/CartRequestReducer";
import { useEffect, useState } from "react";

type Params = {
    token?: string | null;
    productId?: string | null;
    userId?: string | null;
    cartItemId?: string | null;
}

export const useCart = ({token, productId, userId, cartItemId}: Params) => {
    const dispatch = useAppDispatch();
    const [cartItems, setCartItems] = useState<any>(undefined);
    // handle Add Item To Cart
    const handleAddItemToCart = async (e: any) => {
        try {
            let endpoint = '/api/v1/cart-item';

            const { postCall } = useAxios(endpoint, {
                userId: userId,
                productId: productId
            }, token);
            const result = await postCall();

            if (result.status === "success") {
                dispatch(addItemToCart_success());

                if (result.message === "Item is already in cart") {
                    toast.warn(result.message);
                } else {
                    const products=[];
                    toast.success(result.message);
                }
            }
        } catch (error: any) {
            dispatch(addItemToCart_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(addItemToCart_failure(error.response?.data.message));
            }
        }
    };

    // handle Get All Item
    const handleGetAllItem = async () => {
        dispatch(addItemToCart_request());

        try {
            let endpoint = `/api/v1/cart-item/${userId}`;
            const { getCall } = useAxios(endpoint, null, token);
            const res = await getCall();
            
            if(!res){
                return console.log("Undefined at line 65");
            }
            
            if (res?.status === "success") {
                dispatch(addItemToCart_success());
                setCartItems(res.data);
                console.log(cartItems)
                return cartItems;
            }    
        } catch (error: any) {
            dispatch(addItemToCart_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(addItemToCart_failure(error.response?.data.message));
            }

            toast.error(error.message);
        }
    };
    // handle remove Item
    const HandleRemoveItemFromCart = async (e: any, cartItemId: string) => {
        e.preventDefault();
        if(!cartItemId) return;
        dispatch(removeItemFromCart_request());
        try {
            let endpoint = `/api/v1/cart-item/${cartItemId}`;
            const { deleteCall } = useAxios(endpoint, {
                userId: userId
            }, token);
            const result = await deleteCall();

            if (result.status === "success") {
                dispatch(removeItemFromCart_success());
            }
        } catch (error: any) {
            dispatch(removeItemFromCart_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(removeItemFromCart_failure(error.response?.data.message));
            }
        }
    };
    // handle remove all Item
    const HandleEmptyCart = async (e: any) => {
        dispatch(emptyCart_request());
        try {
            let endpoint = `/api/v1/cart-item/empty-cart/${userId}`;
            const { deleteCall } = useAxios(endpoint,null, token);
            const result = await deleteCall();

            if (result.status === "success") {
                dispatch(emptyCart_success());
            }
        } catch (error: any) {
            dispatch(emptyCart_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(emptyCart_failure(error.response?.data.message));
            }
        }
    };

    return { handleAddItemToCart, cartItems, handleGetAllItem, HandleRemoveItemFromCart, HandleEmptyCart };
};

