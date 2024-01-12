'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import { ClipLoader } from 'react-spinners';
import { useAppSelector } from '@/redux/hooks';
import { useUser } from '@/hooks/useUser';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import withAuth from '@/component/RoutesProtect/withAuth';
const getOtp = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    var { _id } = JSON.parse(localStorage.getItem('user') as string)?._id;
    var { token } = JSON.parse(localStorage.getItem('user') as string)?.token;
  }
  const { handleSendOtp } = useUser({ token: token, _id: _id });
  const [otp, setOtp] = useState<string>("");
  const isVerifyLoading: boolean = useAppSelector((state: any) => state.userRequest.otp.loading);
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
        <button className={styles.Signin} onClick={(e) => { e.preventDefault(); (otp.length >= 4) ? (handleSendOtp(e, Number(otp))) : toast.warn("Enter a valid Otp") }} >
          {!isVerifyLoading ? "Verify OTP" :
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ClipLoader color="white" cssOverride={{}} size={15} speedMultiplier={0.5} />
            </div>}
        </button>



      </form>
    </div>
  )
}

export default withAuth(getOtp)
