
import { useAxios } from "./useAxios"
import axios from 'axios'
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { deleteUser_failure, deleteUser_request, deleteUser_success, getUser_failure, getUser_request, getUser_success, signoutUser_failure, signoutUser_request, signoutUser_success, updatePhoneNumber_failure, updatePhoneNumber_request, updatePhoneNumber_success, updateUser_failure, updateUser_request, updateUser_success, verifyEmail_failure, verifyEmail_request, verifyEmail_success} from "../redux/reducers/userRequestReducer";
import { update_user_data } from "../redux/reducers/userReducer";
import { useRouter } from "next/navigation";
export const useUser = (token?:string|null, _id?:string|null) => {
    const router=useRouter();
    const dispatch = useAppDispatch();
    const handleGetUser= async () => {
        dispatch(getUser_request());
        // if(!token) return;
        try {
            const {getCall} = useAxios(`/api/v1/user/${_id}`,null,token);
            const response = await getCall();
            if(response.status === "success"){
                dispatch(getUser_success());
                dispatch(update_user_data(response.data.user));
                const data:any=JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user',JSON.stringify({...data,...response.data.user}));      
                return {...data,...response.data.user};
            }
        } catch (error: any) {
            dispatch(getUser_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(getUser_failure(error.response?.data.message));
            }
        }
    }
    const handleDeleteUser= async (e: any) => {
        e.preventDefault();
        dispatch(deleteUser_request());
        // if(!token) return;
        try {
            const {deleteCall} = useAxios(`/api/v1/user/${_id}`,null,token);

            const response = await deleteCall();
            if(response.status === "success"){
                dispatch(deleteUser_success());
                localStorage.removeItem("user");
                //  const  success=()=>{
                // };
                toast.success(response.message&&response.message);
                setTimeout(()=>router.push('/'),3000)
                dispatch(update_user_data(response.data.user));
                 return ; 
            }
        } catch (error: any) {
            dispatch(deleteUser_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(deleteUser_failure(error.response?.data.message));
            }
        }
    }
    const handleLogOutUser= async (e: any) => {
        e.preventDefault();
        dispatch(signoutUser_request());
        // if(!token) return;
        try {
            const {postCall} = useAxios(`/api/v1/user/signout`,null ,token);

            const response = await postCall();

            if(response.status === "success"){
                dispatch(signoutUser_success());
                dispatch(update_user_data(response.data.user));
                localStorage.removeItem("user");  
                return function success(){
                    toast.success(response.message&&response.message);
                    setTimeout(()=>router.push('/'),3000)
                 }()    
            }else{
                toast.success(response.message&&response.message);

            }
        } catch (error: any) {
            dispatch(signoutUser_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(signoutUser_failure(error.response?.data.message));
            }
        }
    }
    const handleUpdateFieldsUser= async (e: any) => {
        e.preventDefault();
        dispatch(updateUser_request());
        // if(!token) return;
        try {
            const {putCall} = useAxios(`/api/v1/user/${_id}`,null ,token);

            const response = await putCall();

            if(response.status === "success"){
                dispatch(updateUser_success());
                dispatch(update_user_data(response.data.user));
                const data:any=JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user',JSON.stringify({...data,...response.data.user}));      
                return function success(){
                    toast.success(response.message&&response.message);
                 }()    
            }
        } catch (error: any) {
            dispatch(updateUser_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(updateUser_failure(error.response?.data.message));
            }
        }
    
    }
    const handleUpdatePhoneNumberUser= async (e: any) => {
        e.preventDefault();
        dispatch(updatePhoneNumber_request());
        // if(!token) return;
        try {
            const {putCall} = useAxios(`/api/v1/user/${_id}` ,token);

            const response = await putCall();

            if(response.status === "success"){
                dispatch(updatePhoneNumber_success());
                dispatch(update_user_data(response.data.user));
                localStorage.setItem('user',JSON.stringify({...response.data.user, token:response.data.token}));
                return function success(){
                    toast.success(response.message&&response.message);
                 }()    
            }
        } catch (error: any) {
            dispatch(updatePhoneNumber_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(updatePhoneNumber_failure(error.response?.data.message));
            }
        }
    }
    const handleVerifyMailUser= async () => {
        dispatch(verifyEmail_request());
        // if(!token) return;
        try {
            const {postCall} = useAxios(`/api/v1/user/verify-email`);

            const response = await postCall();

            if(response.status === "success"){
                dispatch(verifyEmail_success());
                dispatch(update_user_data(response.data.user));
                const data:any=JSON.parse(localStorage.getItem("user") as string);
                localStorage.setItem('user',JSON.stringify({...data,...response.data.user}));      
                if(response.data.user.isEmailValid){
                    return function success(){
                        toast.success(response.message&&response.message);
                        setTimeout(()=>{router.push("/")},2000);
                     }()    
                }else{
                    return function success(){
                        toast.success(response.message&&response.message);
                        console.log("not valid")
                     }() 
                }
              
            }
        } catch (error: any) {
            dispatch(verifyEmail_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(verifyEmail_failure(error.response?.data.message));
            }
        }
    }
    return {handleGetUser,handleDeleteUser,handleLogOutUser,handleUpdateFieldsUser,handleUpdatePhoneNumberUser,handleVerifyMailUser}
} 