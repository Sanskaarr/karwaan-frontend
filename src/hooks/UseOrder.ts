import { useAxios } from "./useAxios";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import {
    createOrder_request, createOrder_success, createOrder_failure,
    updateOrderPaymentStatus_request, updateOrderPaymentStatus_success, updateOrderPaymentStatus_failure,
} from "../redux/reducers/OrderRequestReducer";
import { useRouter } from "next/navigation";

export const useOrder = (token?: string | null, userId?: string | null, products?: any[]|null, orderId?: string | null) => {
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
                if(error.response?.status===400){
                    router.push('/products/my-account')
                }
                if (error.response?.status === 403) {
                    if (localStorage.getItem("user")) {
                        localStorage.removeItem("user");
                    }
                    if (localStorage.getItem('cartItems')) {
                        localStorage.removeItem("cartItems");
                    }
                    router.push('/signup');
                }
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
                return result;
            }
           
        } catch (error: any) {
            dispatch(updateOrderPaymentStatus_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateOrderPaymentStatus_failure(error.response?.data.message));
             
                if (error.response?.status === 403) {
                    if (localStorage.getItem("user")) {
                        localStorage.removeItem("user");
                    }
                    if (localStorage.getItem('cartItems')) {
                        localStorage.removeItem("cartItems");
                    }
                    router.push("/signup");
                }
            }

        }
    };
   
    // update Order Payment Status 
    const handleGetMyOrders = async () => {
        dispatch(updateOrderPaymentStatus_request());

        try {
            let endpoint = `/api/v1/order/all-orders/${userId}`;
            const { getCall } = useAxios(endpoint, null, token);
            const result = await getCall();
            if (result.status === "success") {
                dispatch(updateOrderPaymentStatus_success());
                return result;
            }
           
        } catch (error: any) {
            dispatch(updateOrderPaymentStatus_failure(error.message));

            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateOrderPaymentStatus_failure(error.response?.data.message));
             
                if (error.response?.status === 403) {
                    if (localStorage.getItem("user")) {
                        localStorage.removeItem("user");
                    }
                    if (localStorage.getItem('cartItems')) {
                        localStorage.removeItem("cartItems");
                    }
                    router.push("/signup");
                }
            }

        }
    };
   

    return { handleCreateOrder, updateOrderPaymentStatus, handleGetMyOrders };
};

