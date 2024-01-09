'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import { ClipLoader } from 'react-spinners';
import { useAppSelector } from '@/redux/hooks';
import { useUser } from '@/hooks/useUser';
const forgotPassword = () => {
  if (typeof window !== 'undefined') {
    var { token, _id } = JSON.parse(localStorage.getItem('user') as string);
}
  const {handleSendOtp}=useUser(token, _id );
  const [otp, setOtp] = useState<string>("");
  const  isVerifyLoading:boolean = useAppSelector((state:any) => state.userRequest.otp.loading);
  return (
    <div className={styles.VerifyMail} >
      <form className={styles.contactForm} >
        <h1>Verify Mail</h1>
        <div className={styles.email}>
          <input className={styles.inputField} type="number" name='otp' id='otp' value={otp}
            onChange={(e) => {
              e.preventDefault();
              setOtp(e.target.value);
            }}
            required />
          <label className={`${styles.emailLable}${styles.lables}`}>OTP</label>
        </div>
        <button className={styles.Signin} onClick={(e)=>handleSendOtp(e,Number(otp))} >
          {!isVerifyLoading ? "Verify OTP" :
            <div  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <ClipLoader color="white" cssOverride={{}} size={15} speedMultiplier={0.5} />
            </div>}
        </button>



      </form>
    </div>
  )
}

export default forgotPassword
