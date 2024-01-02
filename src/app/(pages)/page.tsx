'use client'
import { useRouter } from 'next/navigation'
import styles from './style.module.css'
import About from '@/component/about/About';
import { useEffect, useState } from 'react';
export default function Home() {
  const router = useRouter();
  type hoverObjType = {
    isVideoHover: Boolean,
    isAboutHover: Boolean,
    isPictureHover: Boolean,
  }
  const hoverObj = {
    isVideoHover: false,
    isAboutHover: false,
    isPictureHover: false,
  }
  const [isHover, setIsHover] = useState<hoverObjType>(hoverObj);
  const pictureSrc = [
    { src: 'https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_3.jpg' },
    { src: 'https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_1.jpg' },
    { src: 'https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg' },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    }, 2000);
  }, [currentIndex])
  return (
    <div className={styles.home}>
      <video className={`${styles.bgvideo}`} autoPlay muted loop>
        {/* <video  className={`${styles.bgvideo} ${styles.mobileHidden}`} autoPlay muted loop> */}
        <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.homePartition} >
        <div className={styles.firstPartition} style={
          isHover.isVideoHover ? {
            width: "50%",
            background: "rgba(0,0,0,0.7)",
            transition: "all ease-in 0.5s"
          } : (isHover.isAboutHover || isHover.isPictureHover) ? {
            background: "rgba(0,0,0,0.7)",
            width: "33.3%",
            transition: "all ease-in 0.5s"
          }
            : {
              width: "33.3%",
              transition: "all ease-in 0.5s"
            }
        }>
          <div className={`${styles.homeVideo} ${styles.hover}`} onClick={() => router.push("/videos")}
            onMouseEnter={() => setIsHover({ ...hoverObj, isVideoHover: true })} onMouseLeave={() => setIsHover({ ...hoverObj, isVideoHover: false })} 
            >VIDEOS</div>
          <video autoPlay muted loop className={styles.slideVideos}>
            <source src="https://karwaan.b-cdn.net/Front/motion%20(1).webm" type="video/mp4" />
          </video>
          <div className={styles.leftLine}></div>
        </div>

        <div className={styles.secondPartition} style={
          isHover.isAboutHover ? {
            width: "50%",
            background: "rgba(0,0,0,0.7)",
            transition: "all ease-in 0.5s"
          } : (isHover.isVideoHover || isHover.isPictureHover) ? {
            background: "rgba(0,0,0,0.7)",
            width: "33.3%",
            transition: "all ease-in 0.5s"
          }
            : {
              width: "33.3%",
              transition: "all ease-in 0.5s"
            }}
        >
          <div className={styles.homeAbout} 
          style={isHover.isAboutHover==true?{opacity:"0"}:{opacity:"1"}}
           onClick={() => router.push("/about")}
            onMouseEnter={() => {
              setIsHover({ ...hoverObj, isAboutHover: true });
            }} 
            onMouseLeave={() => {
              setIsHover({ ...hoverObj, isAboutHover: false });
            }}
            >ABOUT US</div>
          <div className={styles.aboutUs}
            onMouseEnter={() => setIsHover({ ...hoverObj, isAboutHover: true })}
            onMouseLeave={() => setIsHover({ ...hoverObj, isAboutHover: false })}
            ><About /></div>
          <span className={styles.bottomLine}
          style={isHover.isAboutHover===true?{visibility:"hidden"}:{visibility:"visible"}}
          ></span>
        </div>
        <div className={styles.thirdPartition} style={
          isHover.isPictureHover ?
            {
              width: "50%",
              transition: "all ease-in 0.5s",
              background: "rgba(0,0,0,0.7)",

            } : (isHover.isAboutHover || isHover.isVideoHover) ? {
              background: "rgba(0,0,0,0.7)",
              width: "33.3%",
              transition: "all ease-in 0.5s"
            }
              : {
                width: "33.3%",
                transition: "all ease-in 0.5s"
              }}>

          <div className={`${styles.homePicture} ${styles.hover}`} onClick={() => router.push("/picture")}
            onMouseEnter={() => setIsHover({ ...hoverObj, isPictureHover: true })} onMouseLeave={() => setIsHover({ ...hoverObj, isPictureHover: false })}
          >PICTURES</div>
          <img style={currentIndex === 0 ? { display: "flex" } : { display: "none" }} className={styles.slidePictures} src={pictureSrc[0].src} alt="not found" />
          <img style={currentIndex === 1 ? { display: "flex" } : { display: "none" }} className={styles.slidePictures} src={pictureSrc[1].src} alt="not found" />
          <img style={currentIndex === 2 ? { display: "flex" } : { display: "none" }} className={styles.slidePictures} src={pictureSrc[2].src} alt="not found" />
          <span className={styles.rightLine}></span>
        </div>
      </div>
    </div>
  )
}
