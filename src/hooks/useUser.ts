
import { useAxios } from "./useAxios"
import axios from 'axios'
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { deleteUser_failure, deleteUser_request, deleteUser_success, getUser_failure, getUser_request, getUser_success, signoutUser_failure, signoutUser_request, signoutUser_success, updatePhoneNumber_failure, updatePhoneNumber_request, updatePhoneNumber_success, updateUser_failure, updateUser_request, updateUser_success, verifyEmail_failure, verifyEmail_request, verifyEmail_success } from "../redux/reducers/userRequestReducer";
import { update_user_data } from "../redux/reducers/userReducer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export const useUser = (token?: string | null, _id?: string | null,firstName?:string, lastName?:string) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const handleGetUser = async () => {
        dispatch(getUser_request());
        // if(!token) return;
        try {
            const { getCall } = useAxios(`/api/v1/user/${_id}`, null, token);
            const response = await getCall();
            if (response.status === "success") {
                dispatch(getUser_success());
                dispatch(update_user_data(response.data.user));
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user', JSON.stringify({ ...data, ...response.data.user }));
                return { ...data, ...response.data.user };
            }
        } catch (error: any) {
            dispatch(getUser_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(getUser_failure(error.response?.data.message));
            }
        }
    }
    const handleLogOutUser = async (e: any) => {
        e.preventDefault();
        dispatch(signoutUser_request());
        const user = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            dispatch(signoutUser_success());
            const user = {
                _id: null,
                firstName: null,
                lastName: null,
                email: null,
                isEmailValid: false,
                password: null,
                phoneNumber: null,
                isPhoneNumberValid: false,
                image: null,
                role: null,
                resetPasswordToken: null,
                resetPasswordTokenExpire: null,
                verifyEmailToken: null,
                verifyTokenEmailExpire: null,
                token: null,
            }
            dispatch(update_user_data(user));
            localStorage.removeItem("user");
            return function success() {
                toast.success("loging out");
                setTimeout(() => router.push('/'), 3000)
            }()
        }
    }
    const handleDeleteUser = async (e: any) => {
        e.preventDefault();
        dispatch(deleteUser_request());
        // if(!token) return;
        try {
            const { deleteCall } = useAxios(`/api/v1/user/${_id}`, null, token);

            const response = await deleteCall();
            if (response.status === "success") {
                dispatch(deleteUser_success());
                localStorage.removeItem("user");
                //  const  success=()=>{
                // };
                toast.success(response.message && response.message);
                setTimeout(() => router.push('/'), 3000)
                dispatch(update_user_data(response.data.user));
                return;
            }
        } catch (error: any) {
            dispatch(deleteUser_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(deleteUser_failure(error.response?.data.message));
            }
        }
    }
    // pending
    const handleVerifyMailUser = async () => {
        dispatch(verifyEmail_request());
        // const { isEmailValid } = JSON.parse(localStorage.getItem('user') as string);
        // if (isEmailValid) return;
        try {
            // http://localhost:3000/verify-email?token=eyJhbGciOiJIUzI1NiJ9.eWFzaGd1cHRhMW1vbGVAZ21haWwuY29t.-Z3lxVIYiqxad9AbO0s-WzlaWP5phWXTbG87d32ARJM&id=65969fba8225f67c4f7be977
            console.log("function chal gaya")
            const { postCall } = useAxios(`/api/v1/user/verify-email`, { token, _id });
            const response = await postCall();
            console.log("response",response);
            if (response.status === "success") {
                dispatch(verifyEmail_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                console.log("success toh hogya")
                localStorage.setItem('user', JSON.stringify({ ...data, ...response.data.user }));
                dispatch(update_user_data(response.data.user));
                if (response.data.user.isEmailValid) {
                    toast.success(response.message && response.message);
                    console.log("sab badiya si")
                    setTimeout(() => { router.push("/") }, 2000);
                } else {
                    toast.success(response.message && response.message);
                    console.log("not valid")
                }

            } else {
                toast.error(response.message && response.message);

                return;
            }
        } catch (error: any) {
            dispatch(verifyEmail_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(verifyEmail_failure(error.response?.data.message));
            }
        }
    }
    const handleUpdateFieldsUser = async (e: any) => {
        e.preventDefault();
        const user=JSON.parse(localStorage.getItem("user") as string);
        dispatch(updateUser_request());
        // if(!token) return;
        try {
            const { putCall } = useAxios(`/api/v1/user/${_id}`, {
          ...user,firstName:firstName,lastName:lastName
            }, token);

            const response = await putCall();

            if (response.status === "success") {
                dispatch(updateUser_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user', JSON.stringify({ ...data, ...response.data.user }));
                dispatch(update_user_data(response.data.user));
                toast.success(response.message && response.message);
                return;
            } else {
                toast.error(response.message && response.message);
                return;
            }
        } catch (error: any) {
            dispatch(updateUser_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateUser_failure(error.response?.data.message));
            }
        }

    }
    const handleUpdatePhoneNumberUser = async (e: any) => {
        e.preventDefault();
        dispatch(updatePhoneNumber_request());
        // if(!token) return;
        try {
            const { putCall } = useAxios(`/api/v1/user/${_id}`, token);

            const response = await putCall();

            if (response.status === "success") {
                dispatch(updatePhoneNumber_success());
                dispatch(update_user_data(response.data.user));
                localStorage.setItem('user', JSON.stringify({ ...response.data.user, token: response.data.token }));
                return function success() {
                    toast.success(response.message && response.message);
                }()
            }
        } catch (error: any) {
            dispatch(updatePhoneNumber_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updatePhoneNumber_failure(error.response?.data.message));
            }
        }
    }

    return { handleGetUser, handleDeleteUser, handleLogOutUser, handleUpdateFieldsUser, handleUpdatePhoneNumberUser, handleVerifyMailUser }
} 