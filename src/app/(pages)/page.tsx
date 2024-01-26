'use client'
import { useRouter } from 'next/navigation'
import styles from './style.module.css'
import About from '@/component/about/About';
import { useEffect, useLayoutEffect, useState } from 'react';
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
    const timeoutId = setTimeout(() => {
      if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);
  useLayoutEffect(() => {
    console.clear();
    console.log('%cThis website is developed by WONDOR VENDORS ', 'color: green; font-size: 18px; font-weight: bold;');
  }, [])
  return (
    <div className={styles.home}>
        <video className={styles.bgvideo} autoPlay muted loop>
        <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
        <source src="https://jmp.sh/s/QS83c6Eoq1mIk5hLFBPE" type="video/mp4" />

         {/* <img src="mainheader.webp" alt="not fonud"  width={"100%"} height={"100%"}/> */}
      </video>
      {/* for big screens */}
      {/* <img src="mainheader.webp" alt="not fonud"  width={"100%"} height={"100%"}/> */}
      {/* <video className={styles.bgvideo} autoPlay muted loop playsInline  poster="mainheader.webp">
  <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
  <source src="https://karwaan.b-cdn.net/Front/home1.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video> */}
      {/* for small screens */}
      <video className={styles.moblieBgvideo} autoPlay muted loop>
        <source src="https://trekmunk.b-cdn.net/insanetraveller/videos/home_mobile.webm" type="video/webm" />
        <source src="https://jmp.sh/s/QS83c6Eoq1mIk5hLFBPE" type="video/mp4" />
         {/* <img src="mainheader.webp" alt="not fonud"  width={"100%"} height={"100%"}/> */}
        Your browser does not support HTML5 video.
      </video>
      {/* <video className={styles.bgvideo} autoPlay muted loop playsInline poster="mainheader.webp">
  <source src="https://trekmunk.b-cdn.net/insanetraveller/videos/home_mobile.webm" type="video/webm" />
  <source src="https://trekmunk.b-cdn.net/insanetraveller/videos/home_mobile.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
</video> */}
      <div className={styles.homePartition} >
        <div className={styles.firstPartition} style={
          isHover.isVideoHover ? {
            width: "50%",
            background: "rgba(0,0,0,0.7)",
            transition: "all 0.5s ease-in"
          } : (isHover.isAboutHover || isHover.isPictureHover) ? {
            background: "rgba(0,0,0,0.7)",
            width: "33.3%",
            transition: "all 0.5s ease-in"
          }
            : {
              width: "33.3%",
              transition: "all  0.5s ease-in"
            }
        }>
          <div className={`${styles.homeVideo} ${styles.hover}`} onClick={() => router.push("/videos")}
            onMouseEnter={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isVideoHover: true })
            }
            } onMouseLeave={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isVideoHover: false })
            }}
          >VIDEOS</div>
          <video autoPlay muted loop className={styles.slideVideos} >
            <source src="https://karwaan.b-cdn.net/Front/motion%20(1).webm" type="video/mp4" />
          </video>
          <div className={styles.leftLine}></div>
        </div>

        <div className={styles.secondPartition} style={
          isHover.isAboutHover ? {
            width: "50%",
            background: "rgba(0,0,0,0.7)",
            transition: "all 0.5s ease-in"
          } : (isHover.isVideoHover || isHover.isPictureHover) ? {
            background: "rgba(0,0,0,0.7)",
            width: "50%",
            transition: "all 0.5s ease-in"
          }
            : {
              width: "50%",
              transition: "all 0.5s ease-in"
            }}
        >
          <div className={styles.homeAbout}
            style={isHover.isAboutHover == true ? { opacity: "0" } : { opacity: "1" }}
            onClick={() => router.push("/about")}
            onMouseEnter={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isAboutHover: true });
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isAboutHover: false });
            }}
          >ABOUT US</div>
          <div className={styles.aboutUs}
            onMouseEnter={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isAboutHover: true })
            }}
            onMouseLeave={(e) => {
              e.preventDefault(); setIsHover({ ...hoverObj, isAboutHover: false })
            }}
          ><About /></div>
          <span className={styles.bottomLine}
            style={isHover.isAboutHover === true ? { opacity: "0" } : { opacity: "1" }}
          ></span>
        </div>
        <div className={styles.thirdPartition} style={
          isHover.isPictureHover ?
            {
              width: "50%",
              transition: "all 0.5s ease-in",
              background: "rgba(0,0,0,0.7)",

            } : (isHover.isAboutHover || isHover.isVideoHover) ? {
              background: "rgba(0,0,0,0.7)",
              width: "33.3%",
              transition: "all 0.5s ease-in"
            }
              : {
                width: "33.3%",
                transition: "all 0.5s ease-in"
              }}>

          <div className={`${styles.homePicture} ${styles.hover}`} onClick={() => router.push("/picture")}
            onMouseEnter={(e) => {
              e.preventDefault();
              setIsHover({ ...hoverObj, isPictureHover: true })
            }
            } onMouseLeave={(e) => {
              e.preventDefault(); setIsHover({ ...hoverObj, isPictureHover: false })
            }}
          >PICTURES</div>
          <div className={styles.slidePictures}>
            <img style={currentIndex === 0 ? { display: "flex" } : { display: "none" }} src={pictureSrc[0].src} alt="not found" />
            <img style={currentIndex === 1 ? { display: "flex" } : { display: "none" }} src={pictureSrc[1].src} alt="not found" />
            <img style={currentIndex === 2 ? { display: "flex" } : { display: "none" }} src={pictureSrc[2].src} alt="not found" />
          </div>
          <span className={styles.rightLine}></span>
        </div>
      </div>
    </div>
  )
}
