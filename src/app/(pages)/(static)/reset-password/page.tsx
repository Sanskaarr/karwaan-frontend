'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const forgotPassword = () => {
  const [isPassVisible,setIsPassVisible]=useState(false);

  return (
    <div className={styles.resetPassword} >
          <form className={styles.contactForm} >
            <h1>Reset Password</h1>
    <div className={styles.password}>     
     <input className={styles.inputField} type={isPassVisible?"text":"password"} name='password' id='password'  required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>New Password</label>
    <div className={styles.visibility} onClick={()=>setIsPassVisible(!isPassVisible)}>{isPassVisible?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>}</div>
    </div>
    <div className={styles.password}>     
     <input className={styles.inputField} type={isPassVisible?"text":"password"} name='password' id='password'  required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>Confirm Password</label>
    <div className={styles.visibility} onClick={()=>setIsPassVisible(!isPassVisible)}>{isPassVisible?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>}</div>
    </div>
    {/* <div className={styles.messages} style={status=="error"?{color:"red"}:{color:"blue"}}>{messageToShow&&messageToShow}</div> */}
    <button className={styles.Signin}>Reset Password</button>

  </form>
    </div>
  )
}

export default forgotPassword
