"use client"
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default  function Signup() {
  const [status,setStatus]=useState<null|String>(null);
  const [submit,setSubmit]=useState<boolean>(false);
  const [messageToShow,setMessageToShow]=useState<null|String>(null);
  const [formData,setFormData]=useState({firstName:"", lastName:"", email:"", password:""} );
  
  useEffect(()=>{
setTimeout(()=>{
  setMessageToShow(null);
},4000);
  },[messageToShow]);
  const router=useRouter();
  console.log(formData);
  const handleClick = () => {
    // form validation
    if (formData.firstName.length === 0){
      setMessageToShow("Enter your first name" );
    }
    else if (formData.lastName.length ===0){
      setMessageToShow("Enter your last name Name" );
    }
   else if ( formData.email.length === 0 ){
      setMessageToShow("Enter your email" );
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      setMessageToShow("Invalid email address" );
    }
    else if(formData.password.length === 0 ){
      setMessageToShow("Enter your password" );
    }
    else if(formData.password.length <6 || formData.password.length >16 ){
      setMessageToShow("password length must be of 6-15 characters" );
    }
    else {
      setSubmit(!submit);
    } 
    setTimeout(()=>{
      setMessageToShow("");
    
     },4000)
  };
  const tostNotify=()=> toast("Registration successfull");
  
  // response.token&&(function goToDashboard  (){
  //   // tostNotify();
  //   setTimeout(()=>{
  //     router.push("/");
  //   },2000) 
  // }
  // )();
    // tostNotify();

    return (
        <div className={styles.login}>
            <Splide
      options={ {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : true,
        resetProgress: true,
        height       : '100%',
      } }
      aria-label="My Favorite Images"
      className={styles.sideslider}
     >
      <SplideSlide data-splide-interval="2000" className={styles.SignUpSliderSlide}>
        <img className={styles.images} src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_1.jpg"  alt="Image 1"/>

      </SplideSlide>
    <SplideSlide data-splide-interval="2000" className={styles.SignUpSliderSlide}>
        <img className={styles.images} src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg"  alt="Image 2"/>
      </SplideSlide>
    <SplideSlide data-splide-interval="2000" className={styles.SignUpSliderSlide}>
        <img className={styles.images} src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_3.jpg"  alt="Image 3"/>
      </SplideSlide>
     
    </Splide>
            {/* </div> */}
    <form className={styles.contactForm} >
            <h1>Sign up</h1>
    <div className={styles.userName}>       
     <input className={styles.inputField} type="text" name='userFName' id='userFName' 
       value={formData.firstName} 
       onChange={(e)=>{
      setFormData({...formData,firstName:e.target.value})
       }} required/>
    <label className={`${styles.nameLable}${styles.lables}`}>First Name</label>
    </div>
    <div className={styles.userName}>       
     <input className={styles.inputField} type="text" name='userLName' id='userLName' 
     value={formData.lastName} 
     onChange={(e)=>{
    setFormData({...formData,lastName:e.target.value})
     }} required/>
    <label className={`${styles.nameLable}${styles.lables}`}>Last Name</label>
    </div>
    <div className={styles.email}>      
     <input className={styles.inputField} type="text" name='email' id='email'
       value={formData.email} 
       onChange={(e)=>{
      setFormData({...formData,email:e.target.value})
       }} required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
    <div className={styles.password}>     
     <input className={styles.inputField} type="password" name='password' id='password' 
       value={formData.password} 
       onChange={(e)=>{
      setFormData({...formData,password:e.target.value})
       }} required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>password</label>
    </div>
  
    <button className={styles.Signup} onClick={handleClick}>Sign up</button>
    <div className={styles.messages} style={{color:"red", marginTop:"10px",textAlign:"center"}}>{messageToShow&&messageToShow}</div>
    {/* <button className={styles.Signup} onClick={()=>{router.push("/verifymail")}}>Sign up</button> */}
  </form>
  <ToastContainer 
    position="top-right"
autoClose={1000}
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