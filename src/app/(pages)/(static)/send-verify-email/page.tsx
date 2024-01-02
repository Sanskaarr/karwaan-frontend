'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useAppSelector } from '@/redux/hooks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const VerifyMail = () => {
  const [formData,setFormData]=useState({ email:""} );
  const {handleSendVerifyEmail} = useAuth(formData.email);
  const {loading,isEmailSend} = useAppSelector((state) => state.userRequest.sendVerifyEmail);
  const router =useRouter();
  const {email}=useAppSelector((state)=>state.user.user);
  return (
    <div className={styles.VerifyMail} >
          <form className={styles.contactForm} >
            <h1>Verify Mail</h1>
    <div className={styles.email}>      
     {/* <input className={styles.inputField} type="text" name='email' id='email'
      value={`${email}`}
     disabled/> */}
     <input className={styles.inputField} type="text" name='email' id='email'
      value={formData.email} 
      onChange={(e)=>{
     setFormData({...formData,email:e.target.value})
      }}
     required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
  
    <button className={styles.Signin}  onClick={handleSendVerifyEmail}>Verify Mail {loading&&"loading..."}</button>
    
    <p className={styles.skip} onClick={()=>{router.push("/")}}>skip for now</p>

  </form>
  <ToastContainer
    position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
    </div>
  )
}

export default VerifyMail
