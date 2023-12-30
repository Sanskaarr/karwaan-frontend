import axios from "axios"

export const useAxios = (API: string, payload?: any, token?: string) => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000"
        // baseURL: process.env.BACKEND_BASE_URL!
    });

    const getCall = async () => {
        const options = {
            url: API,
            method: 'GET',
            headers: {},
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const postCall = async () => {
        const options = {
            url: API,
            method: 'POST',
            headers: {},
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const putCall = async () => {
        const options = {
            url: API,
            method: 'PUT',
            headers: {},
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const deleteCall = async () => {
        const options = {
            url: API,
            method: 'DELETE',
            headers: {
                accept: 'application/json'
            },
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    return {getCall, postCall, putCall, deleteCall};
}

const {getCall} = useAxios('/api/v1/products')

console.log(getCall);