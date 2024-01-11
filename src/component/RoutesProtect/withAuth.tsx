'use client'
import {redirect} from 'next/navigation';
import {useEffect} from 'react';
export default function withAuth(Component :any){
    return function withAuth(props:any){
    const token =JSON.parse(localStorage.getItem("user")as string)?.token;
    useEffect(()=>{
        if(!token){
            redirect("/signup");
        }
    },[]);
    if(!token){
        return null;
    }
    return <Component {...props}/>
    }
}