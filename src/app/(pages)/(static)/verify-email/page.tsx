'use client'
import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { ClipLoader } from 'react-spinners'
import { useAppSelector } from '@/redux/hooks';
import { useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/useUser';
// import { useRouter } from 'next/navigation';

function page (){
 
const searchParams = useSearchParams()
//  const router=useRouter();
const token = searchParams.get('token');
const _id = searchParams.get('id');

(async()=>{
   
    const {handleVerifyMailUser} = useUser(token,_id);
    await handleVerifyMailUser()

})()

if(typeof(window)!=="undefined"){
  var{isEmailValid}=JSON.parse(localStorage.getItem("user") as string);
 
}
const {loading} = useAppSelector((state) => state.userRequest.verifyEmail);
  return (
    <div className={styles.verifyEmail}>
  <div className={styles.verifyEmailSpinner} style={!loading?{display:"none"}:{display:"flex",alignItems:"center"}}>
 <ClipLoader  color="blue"  size={40} speedMultiplier={0.5}/>
</div>
 <h1>{isEmailValid?"your email has been verified":"Processing..."}</h1>

    </div>
  )
}

export default page
