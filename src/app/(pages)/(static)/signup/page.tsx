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
export default  function Signup() {
  const [status,setStatus]=useState<null|String>(null);
  const [messageToShow,setMessageToShow]=useState<null|String>(null);

  useEffect(()=>{
setTimeout(()=>{
  setMessageToShow(null);
},4000);
  },[messageToShow]);
    return (
        <div className={styles.login}>
            {/* <div className={styles.sideslider}> */}
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
        {/* <p className={styles.review}> " environment."</p> */}

      </SplideSlide>
    <SplideSlide data-splide-interval="2000" className={styles.SignUpSliderSlide}>
        <img className={styles.images} src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg"  alt="Image 2"/>
        {/* <p className={styles.review}>"The team also escorts doctors to high-altitude regions to treat the less fortunate residents"</p> */}
      </SplideSlide>
    <SplideSlide data-splide-interval="2000" className={styles.SignUpSliderSlide}>
        <img className={styles.images} src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_3.jpg"  alt="Image 3"/>
        {/* <p className={styles.review}>"The team also escorts doctors to high-altitude regions to treat the less fortunate residents"</p> */}
      </SplideSlide>
     
    </Splide>
            {/* </div> */}
    <form className={styles.contactForm} >
            <h1>Sign up</h1>
    <div className={styles.userName}>       
     <input className={styles.inputField} type="text" name='userFName' id='userFName'  required/>
    <label className={`${styles.nameLable}${styles.lables}`}>First Name</label>
    </div>
    <div className={styles.userName}>       
     <input className={styles.inputField} type="text" name='userLName' id='userLName'  required/>
    <label className={`${styles.nameLable}${styles.lables}`}>Last Name</label>
    </div>
    <div className={styles.email}>      
     <input className={styles.inputField} type="text" name='email' id='email' required/>
    <label className={`${styles.emailLable}${styles.lables}`}>Email</label>
    </div>
    <div className={styles.password}>     
     <input className={styles.inputField} type="password" name='password' id='password'  required/>
    <label className={`${styles.passwordLable}${styles.lables}`}>password</label>
    </div>
  
    <div className={styles.messages} style={status=="error"?{color:"red"}:{color:"blue"}}>{messageToShow&&messageToShow}</div>
    <button className={styles.Signup}>Sign up</button>

  </form></div>
  )
}