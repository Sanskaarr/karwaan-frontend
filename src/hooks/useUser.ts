
import { useAxios } from "./useAxios"
import axios from 'axios'
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { deleteUser_failure, deleteUser_request, deleteUser_success, forgotPassword_failure, forgotPassword_request, forgotPassword_success, getUser_failure, getUser_request, getUser_success, otp_failure, otp_request, otp_success, resetPassword_failure, resetPassword_request, resetPassword_success, signoutUser_failure, signoutUser_request, signoutUser_success, updatePhoneNumber_failure, updatePhoneNumber_request, updatePhoneNumber_success, updateUser_failure, updateUser_request, updateUser_success, verifyEmail_failure, verifyEmail_request, verifyEmail_success } from "../redux/reducers/userRequestReducer";
import { update_user_data } from "../redux/reducers/userReducer";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const useUser = (token?: string | null, _id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [updatedResponse, setUpdatedResponse] = useState<any>(null);
    // handle Get User
    const handleGetUser = async () => {
        if (!_id) return;
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
    }
    // handle LogOut User
    const handleLogOutUser = async (e: any) => {
        e.preventDefault();
        dispatch(signoutUser_request());
        const user = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            // dispatch(signoutUser_success());
            const userData = {
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
            dispatch(update_user_data(userData));
            if (localStorage.getItem('user')) {
                localStorage.removeItem("user");
            }
            if (localStorage.getItem('cartItems')) {
                localStorage.removeItem("cartItems");
            }
            return function success() {
                toast.success("Loging out");
                router.push('/shop')
            }()
        }
    }
    // handle Delete User
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
                if (localStorage.getItem('cartItems')) {
                    localStorage.removeItem("cartItems");
                }
                //  const  success=()=>{
                // };
                toast.success(response.message && response.message);
                router.push('/')
                dispatch(update_user_data(response.data.user));
                return;
            }
        } catch (error: any) {
            dispatch(deleteUser_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(deleteUser_failure(error.response?.data.message));
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
    }
    // handle Verify EMail User
    const handleVerifyMailUser = async () => {
        if(!token && !_id)return;
        const data: any = JSON.parse(localStorage.getItem("user") as string);
        if (data.isEmailValid) {
            return;
        }
        dispatch(verifyEmail_request());
        try {

            const endpoint = `/api/v1/user/verify-email`;
            const { postCall } = useAxios(endpoint, { token: token, _id: _id });
            const result = await postCall();


            if (result.status === "success") {
                dispatch(verifyEmail_success());

                localStorage.setItem('user', JSON.stringify({ ...data, isEmailValid: true }));
                dispatch(update_user_data({ ...data, isEmailValid: true }));
                toast.success(result.message && result.message);
                router.push("/shop");
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
    // handle Update Fields User
    type fields = {
        e: any,
        emailId?: string | null,
        phoneNo?: string | null
    };
    const handleUpdateFieldsUser = async ({ e, emailId, phoneNo }: fields) => {
        e.preventDefault();
        if (!firstName && !lastName && !emailId && !phoneNo) return;
        dispatch(updateUser_request());
        try {
            const { putCall } = useAxios(`/api/v1/user/${_id}`, {
                firstName: firstName, lastName: lastName, email: emailId, phoneNumber: phoneNo
            }, token);

            const response = await putCall();

            if (response.status === "success") {
                dispatch(updateUser_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);

                toast.success(response.message && response.message);
                if (response.message === "An otp has been sent to your new phone number, please use that otp to verify your phone number.") {
                    localStorage.setItem('user', JSON.stringify({ ...data, ...response.data.user }));
                    dispatch(update_user_data(response.data.user));
                    router.push('/otp')
                } else {
                    localStorage.setItem('user', JSON.stringify({ ...data, ...response.data }));
                    dispatch(update_user_data(response.data));
                }
                setUpdatedResponse(response);
                return;
            }

        } catch (error: any) {
            dispatch(updateUser_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateUser_failure(error.response?.data.message));
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

    }
    // handle send Otp
    const handleSendOtp = async (e: any, otp?: number | null,) => {
        e.preventDefault();
        if (!otp) return;
        dispatch(otp_request());
        try {
            const { putCall } = useAxios(`/api/v1/user/validate-otp/${_id}`, {
                otp: otp,
            }, token);

            const response = await putCall();

            if (response.status === "success") {
                dispatch(otp_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user', JSON.stringify({ ...data, isPhoneNumberValid: true }));
                dispatch(update_user_data({ ...data, isPhoneNumberValid: true }));
                toast.success(response.message && response.message);
                router.push('/products/my-account')
                setUpdatedResponse(response);
                return;
            }

        } catch (error: any) {
            dispatch(otp_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(updateUser_failure(error.response?.data.message));
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

    }
    // handle Reset Password 
    const handleResetPasswordUser = async (e: any, newPassword?: string | null, confirmPassword?: string | null) => {
        e.preventDefault();
        // if(!firstName && !lastName && !emailId&& !phoneNo) return;
        dispatch(resetPassword_request());
        try {
            const { putCall } = useAxios(`/api/v1/user/reset-password/${token}`, {
                newPassword: newPassword, confirmNewPassword: confirmPassword, _id: _id
            });

            const response = await putCall();

            if (response.status === "success") {
                dispatch(resetPassword_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user', JSON.stringify({ ...data, ...response.data }));
                dispatch(update_user_data(response.data));
                toast.success(response.message && response.message);
                router.push('/')
                // setUpdatedResponse(response);
                return;
            }

        } catch (error: any) {
            dispatch(resetPassword_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(resetPassword_failure(error.response?.data.message));
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

    }
    // handle forget Password 
    const handleForgetPasswordUser = async (e: any, email?: string | null) => {
        e.preventDefault();
        // if(!firstName && !lastName && !emailId&& !phoneNo) return;
        const user = JSON.parse(localStorage.getItem("user") as string);
        dispatch(forgotPassword_request());
        try {
            const { postCall } = useAxios(`/api/v1/user/forgot-password`, {
                email: email
            });

            const response = await postCall();

            if (response.status === "success") {
                dispatch(forgotPassword_success());
                const data: any = JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user', JSON.stringify({ ...data, ...response.data }));
                dispatch(update_user_data(response.data));
                toast.success(response.message && response.message);
                // setUpdatedResponse(response);
                return;
            }

        } catch (error: any) {
            dispatch(forgotPassword_failure(error.message));
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message);
                dispatch(forgotPassword_failure(error.response?.data.message));

                if (error.response?.data?.message === "This email is not registered, please signup first") {
                    router.push('/signup');
                }

            }
        }

    }


    // handle Update Phone Number User
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
                // localStorage.setItem('user', JSON.stringify({ ...response.data.user, token: response.data.token }));
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

    return { handleGetUser, handleDeleteUser, handleSendOtp, handleLogOutUser, handleResetPasswordUser, handleForgetPasswordUser, handleUpdateFieldsUser, updatedResponse, handleUpdatePhoneNumberUser, handleVerifyMailUser }
} 