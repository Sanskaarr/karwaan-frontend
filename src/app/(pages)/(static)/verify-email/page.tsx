'use client'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { ClipLoader } from 'react-spinners'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/useUser';
import { useSelector } from 'react-redux'
import { verifyEmail_failure } from '@/redux/reducers/userRequestReducer'
import { RootState } from '@/redux/store'

function page (){
 
const searchParams = useSearchParams()
const token = searchParams.get('token');
const _id = searchParams.get('id');
const [isemailVerified,setIsEmailVerified] = useState(false)
const result = useSelector((state:RootState)=>state.userRequest.verifyEmail.isEmailVerified)   
    const {handleVerifyMailUser} = useUser({token: token as string ,_id: _id as string});
    const router = useRouter()
    useEffect(()=>{
    if(token&&_id){
      handleVerifyMailUser()
      
    }

    
   },[_id,token]) 
   useEffect(()=>{
    if(result){
      setIsEmailVerified(true)
      router.replace("/products")
    }
   },[result])

  //  const faliure = useSelector(verifyEmail_failure)
  return (


    <div className={styles.verifyEmail}>
  <div className={styles.verifyEmailSpinner} style={{display:"flex",alignItems:"center"}}>
 <ClipLoader  color="blue"  size={40} speedMultiplier={0.5}/>
</div>
 <h1>{"Processing..."}</h1>

    </div>
  )
}

export default page
