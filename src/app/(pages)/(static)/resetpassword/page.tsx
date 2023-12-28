import React from 'react'
import styles from './style.module.css'
const forgotPassword = () => {
  return (
    <div className={styles.resetPassword} >
          <form className={styles.contactForm} >
            <h1>Reset Password</h1>
    <div className={styles.password}>     
     <input className={styles.inputField} type="password" name='password' id='password'  required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>New Password</label>
    </div>
    <div className={styles.password}>     
     <input className={styles.inputField} type="password" name='password' id='password'  required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>Confirm Password</label>
    </div>
    {/* <div className={styles.messages} style={status=="error"?{color:"red"}:{color:"blue"}}>{messageToShow&&messageToShow}</div> */}
    <button className={styles.Signin}>Reset Password</button>

  </form>
    </div>
  )
}

export default forgotPassword
