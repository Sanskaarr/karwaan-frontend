'use client'
import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { ClipLoader } from 'react-spinners'
import { useAppSelector } from '@/redux/hooks';
import { useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/useUser';

function page (){
 
const searchParams = useSearchParams()
 
const token = searchParams.get('token');
const _id = searchParams.get('id');

  (async function verifyMail(){
    const {handleVerifyMailUser} = useUser(token,_id);
    await handleVerifyMailUser()
  })();


const {loading} = useAppSelector((state) => state.userRequest.verifyEmail);
  //  `http://localhost:3000/verify-email?token=${token}&id=${user?._id}`
  // console.log(token,_id);
  return (
    <div className={styles.verifyEmail}>
  <div className={styles.verifyEmailSpinner} style={!loading?{display:"none"}:{display:"flex",alignItems:"center"}}>
 <ClipLoader  color="blue" cssOverride={{}}  size={40} speedMultiplier={0.5}/>
</div>
 <h1>{!loading?"your email has been verified":"Processing..."}</h1>

    </div>
  )
}

export default page
