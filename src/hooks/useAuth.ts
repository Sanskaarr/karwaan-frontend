import { useAxios } from "./useAxios"
import axios from 'axios'
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { signup_failure, signup_request, signup_success,
        signin_success, signin_failure, signin_request, 
        verifyEmail_request,verifyEmail_failure, verifyEmail_success,
        sendVerifyEmail_failure,sendVerifyEmail_success,
        sendVerifyEmail_request,} from "../redux/reducers/userRequestReducer";
import { runValidations } from "../utils/runValidations";
import { update_user_data } from "../redux/reducers/userReducer";
import { useRouter } from "next/navigation";
export const useAuth = (email?: string, password?: string, firstName?: string, lastName?: string,token?:string, id?:string) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleSignup = async (e: any) => {
        e.preventDefault();
        const {runSignupValidation} = runValidations(email, password, firstName, lastName);
        if(runSignupValidation() === false){
            return;
        }
        dispatch(signup_request());
        try {
            const {postCall} = useAxios('/api/v1/user/signup', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });

            const response = await postCall();

            if(response.status === "success"){
                dispatch(signup_success({user: response.data.user, token: response.data.token}));
                dispatch(update_user_data({...response.data.user, token:response.data.token}));
              
                localStorage.setItem('user',JSON.stringify({...response.data.user, token:response.data.token}));
                if(response.data.user.isEmailVerified === true){
                    return  (()=>{
                        toast.success("Registration successfull");
                         setTimeout(()=>router.push('/'),3000)
                     })() ;
                }else{
                    return function success(){
                        toast.success("Registration successfull");
                         setTimeout(()=>router.push('/send-verify-email'),3000)
                     }() ;
                }
            }
        } catch (error: any) {
            dispatch(signup_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(signup_failure(error.response?.data.message));
            }
        }
    }

    const handleSignin = async (e: any) => {
        e.preventDefault()
        const {runSigninValidation} = runValidations(email, password);
        if(runSigninValidation() === false){
            return ;
        }
        dispatch(signin_request());
        try {
            const {postCall} = useAxios('/api/v1/user/signin', {
                email: email,
                password: password
            });
            const response = await postCall();
            console.log("response",response)
            if(response.status === "success"){
                dispatch(signin_success({user: response.data.user, token: response.data.token}));
                dispatch(update_user_data({...response.data.user, token:response.data.token}));
                localStorage.setItem('user',JSON.stringify({...response.data.user, token:response.data.token}));
                if(response.data.user.isEmailVerified === true){
                    return function success(){
                   toast.success(response.message&&response.message);
                   setTimeout(()=>router.push('/'),3000)
                }() ;
                }else{
                    return function success(){
                        toast.success(response.message&&response.message);
                    setTimeout(()=>router.push('/send-verify-email'),3000)
                }() ;
                }
            }
        } catch (error:any) {
            dispatch(signin_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(signin_failure(error.response?.data.message));
                
            }
    
        }
    }
    const handleSendVerifyEmail = async (e:any) => {
        e.preventDefault();
        dispatch(sendVerifyEmail_request());
        try {
            const {postCall} = useAxios('/api/v1/user/send-verification-email', {email: email})
            const response = await postCall();  
            console.log("gdgdf",response);
            if(response.status === "success"){
                dispatch(sendVerifyEmail_success());
                    console.log("success")
                    return toast.success("Mail has been send. token valid for 15 minitues");
            }
        } catch (error:any) {
            dispatch(sendVerifyEmail_failure(error.message));
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                dispatch(sendVerifyEmail_failure(error.response?.data.message));
            }
        }
    }
 
    return {handleSignup, handleSignin, handleSendVerifyEmail}
} 