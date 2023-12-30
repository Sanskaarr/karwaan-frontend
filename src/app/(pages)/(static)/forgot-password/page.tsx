import React from 'react'
import styles from './style.module.css'
const forgotPassword = () => {
  return (
    <div className={styles.VerifyMail} >
          <form className={styles.contactForm} >
            <h1>Verify Mail</h1>
    <div className={styles.email}>      
     <input className={styles.inputField} type="text" name='email' id='email' required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
  
    {/* <div className={styles.messages} style={status=="error"?{color:"red"}:{color:"blue"}}>{messageToShow&&messageToShow}</div> */}
    <button className={styles.Signin}>Verify Mail</button>
    


  </form>
    </div>
  )
}

export default forgotPassword
