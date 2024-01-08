import React, { useState } from 'react'
import styles from './style.module.css'
const forgotPassword = () => {
  const [email,setEmail]=useState<string>("");
  return (
    <div className={styles.VerifyMail} >
          <form className={styles.contactForm} >
            <h1>Verify Mail</h1>
    <div className={styles.email}>      
     <input className={styles.inputField} type="text" name='email' id='email' value={email}
     onChange={(e)=>{
      e.preventDefault();
      setEmail(e.target.value);
    }}
     required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
    <button className={styles.Signin}>Verify Mail</button>
    


  </form>
    </div>
  )
}

export default forgotPassword
