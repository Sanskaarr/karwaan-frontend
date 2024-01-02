"use client"
import { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
export default  function ContactForm() {
  const [status,setStatus]=useState<null|String>(null);
  const [messageToShow,setMessageToShow]=useState<null|String>(null);
//   async function handleSubmit( formData:FormData){
// try{
//   const response=await submitContact({
//     userName:formData.get("userName"),
//     phone:formData.get("phone"),
//     email:formData.get("email"),
//     description:formData.get("description"),
//   })
//   if(response.status==="ok"){
//   setStatus('success');
//   setMessageToShow(response.message);
// }else{
//   setStatus("error");
//   setMessageToShow(response.message);
// }
// }catch(e){
//   console.log("error",e);
// }
//   }
  useEffect(()=>{
setTimeout(()=>{
  setMessageToShow(null);
},4000);
  },[messageToShow]);
    return (
    <form className={styles.contactForm}  action="mailto:yashgupta1mole@gmail.com" method='post' encType='text/plain' >
    <div className={styles.userName}>       
     <input className={styles.inputField} type="text" name='userName' id='userName'  required/>
    <label className={`${styles.nameLable}${styles.lables}`}>Name</label>
    </div>
    <div className={styles.phone}>     
     <input className={styles.inputField} type="number" name='phone' id='phone'  required/>
    <label className={`${styles.phoneLable}${styles.lables}`}> Mobile Number</label>
    </div>
    <div className={styles.email}>      
     <input className={styles.inputField} type="text" name='email' id='email' required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
    <div className={styles.description}>
      <input className={styles.inputField} type="text" name='description' id='description' required/>
     <label className={`${styles.descriptionLable}${styles.lables}`}>Description  </label>
    </div>
    <div className={styles.messages} style={status=="error"?{color:"red"}:{color:"blue"}}>{messageToShow&&messageToShow}</div>
    <button className={styles.sendMail}>Send Mail</button>
    {/* <input  type='submit' name="submit" className={styles.sendMail} value={"Send Mail"}/> */}

  </form>
  )
}