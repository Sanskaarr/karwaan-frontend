'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useAppSelector } from '@/redux/hooks'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'
import withAuth from '@/component/RoutesProtect/withAuth'
const VerifyMail = () => {
  const router=useRouter()
  if(typeof(window)!=="undefined"){
    var {email,isEmailValid}=JSON.parse(localStorage.getItem("user") as string);
      if(isEmailValid)router.push('/');
  }
  const [formData] = useState({ email: email });
  const { handleSendVerifyEmail } = useAuth(formData.email);
  const { loading } = useAppSelector((state) => state.userRequest.sendVerifyEmail);
  return (
    <div className={styles.VerifyMail} >
      <form className={styles.contactForm} >
        <h1>Verify Mail</h1>
        <div className={styles.email}>
          <input className={styles.inputField} type="text" name='email' id='email'
            value={formData.email}  />
          <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
        </div>

        <button className={styles.Signin} onClick={handleSendVerifyEmail}style={!loading ? { display: "flex",pointerEvents:"all"}:{ display: "flex",pointerEvents:"none"}}>
         {!loading ? "Verify Mail":
          <div >
            <ClipLoader color="white" cssOverride={{}} size={15} speedMultiplier={0.5} />
          </div>}
        </button>

        <p className={styles.skip} onClick={() => { router.push("/") }}>skip for now</p>

      </form>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" /> */}
    </div>
  )
}

export default withAuth(VerifyMail);
