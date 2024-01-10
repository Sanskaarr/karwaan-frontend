import { useAxios } from "./useAxios";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import {
    createOrder_request, createOrder_success, createOrder_failure,
    updateOrderPaymentStatus_request, updateOrderPaymentStatus_success, updateOrderPaymentStatus_failure,
} from "../redux/reducers/OrderRequestReducer";
import { update_product_data } from "@/redux/reducers/ProductReducer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useOrder = (token?: string | null, userId?: string | null, products?: string | null, orderId?: string | null) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    // create Order
    const handleCreateOrder = async (e: any) => {
        e.preventDefault();
        dispatch(createOrder_request());

        try {
            let endpoint = '/api/v1/order';

            const { postCall } = useAxios(endpoint, {
                userId: userId,
                products: products
            }, token);
            const result = await postCall();

            if (result.status === "success") {
                dispatch(createOrder_success());
                // setOrderResponse(result);
                toast.success(result.message);
                window.open(result.data.payment_details.short_url)
            }
        } catch (error: any) {
            dispatch(createOrder_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(createOrder_failure(error.response?.data.message));
            }
        }
    };

    // update Order Payment Status 
    const updateOrderPaymentStatus = async () => {
        dispatch(updateOrderPaymentStatus_request());

        try {
            let endpoint = `/api/v1/order/${orderId}`;
            const { putCall } = useAxios(endpoint, null, token);
            const result = await putCall();
            if (result.status === "success") {
                dispatch(updateOrderPaymentStatus_success());
                console.log("result",result);
                toast.success(result.message);
                return result;
            }
            // console.log("result",result);

           
        } catch (error: any) {
            dispatch(updateOrderPaymentStatus_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateOrderPaymentStatus_failure(error.response?.data.message));
            }
        }
    };


    return { handleCreateOrder, updateOrderPaymentStatus };
    // return {  handleCreateOrder, orderResponse ,updateOrderPaymentStatus, checkoutResponse};
};

