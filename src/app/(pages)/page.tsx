'use client'
import { useRouter } from 'next/navigation'
import styles from './style.module.css'
import About from '@/component/about/About';
import { useState } from 'react';
export default  function Home() {
  const router=useRouter();
  type hoverObjType={
    isVideoHover:Boolean,
    isAboutHover:Boolean,
    isPictureHover:Boolean,
  }
  const hoverObj={
    isVideoHover:false,
    isAboutHover:false,
    isPictureHover:false,
  }
  const[isHover,setIsHover]= useState<hoverObjType>(hoverObj);
  return (
    <div className={styles.home}>
        <video  className={`${styles.bgvideo}`} autoPlay muted loop>
        {/* <video  className={`${styles.bgvideo} ${styles.mobileHidden}`} autoPlay muted loop> */}
            <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.homePartition} >
          <div className={styles.firstPartition} style={isHover.isVideoHover?{width:"50%",transition:"all ease-in 0.5s"}:{width:"33.3%",transition:"all ease-in 0.5s"}}>
          <div className={`${styles.homeVideo} ${styles.hover}` } onClick={()=>router.push("/videos")}
          onMouseEnter={()=>setIsHover({...hoverObj,isVideoHover:true})} onMouseLeave={()=>setIsHover({...hoverObj,isVideoHover:false})} >VIDEOS</div>
          <video autoPlay muted loop className={styles.slideVideos}>
            <source src="https://karwaan.b-cdn.net/Front/motion%20(1).webm" type="video/mp4"/>
          </video>
            <div className={styles.leftLine}></div>
          </div>

          <div className={styles.secondPartition}style={isHover.isAboutHover?{width:"50%",transition:"all ease-in 0.5s"}:{width:"33.3%",transition:"all ease-in 0.5s"}}>
            <div className={`${styles.homeAbout} ${styles.hover}` }onClick={()=>router.push("/about")} 
            onMouseEnter={()=>setIsHover({...hoverObj,isAboutHover:true})} onMouseLeave={()=>setIsHover({...hoverObj,isAboutHover:false})}>ABOUT US</div>
           <div className={styles.aboutUs}><About /></div>
            <span className={styles.bottomLine}></span>
            </div>
          <div className={styles.thirdPartition}style={isHover.isPictureHover?{width:"50%",transition:"all ease-in 0.5s"}:{width:"33.3%",transition:"all ease-in 0.5s"}}>

            <div className={`${styles.homePicture} ${styles.hover}` } onClick={()=>router.push("/picture")}
            onMouseEnter={()=>setIsHover({...hoverObj,isPictureHover:true})} onMouseLeave={()=>setIsHover({...hoverObj,isPictureHover:false})}
            >PICTURES</div>
            <img className={styles.slidePictures}  src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg" alt="not found" />
            <span className={styles.rightLine}></span>
          </div>
        </div>
    </div>
  )
}
