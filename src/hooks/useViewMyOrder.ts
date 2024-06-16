import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import axios from "axios";

const useViewMyOrder = () =>{
    const getMyOrders = async (token:string,userId:string)=>{
        let endpoint = `/api/v1/order/getmyorders/${userId}`
        try {
            const {getCall} = useAxios(endpoint,{userId:"sdsd"},token);
            const result = await getCall()
            if(result.status === "success"){
                return result.data;
            }
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data.message);
                return null;
            }
            toast.error("Something went wrong")

        }
    }

    return {getMyOrders}
}

export default useViewMyOrder