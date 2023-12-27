'use client'
import { useRouter } from 'next/navigation'
import styles from './style.module.css'
import About from '@/component/about/About';
export default  function Home() {
  const router=useRouter();
  return (
    <div className={styles.home}>
        <video  className={`${styles.bgvideo}`} autoPlay muted loop>
        {/* <video  className={`${styles.bgvideo} ${styles.mobileHidden}`} autoPlay muted loop> */}
            <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.homePartition}>
          <div className={styles.firstPartition}>
          <div className={`${styles.homeVideo} ${styles.hover}` } onClick={()=>router.push("/videos")}>VIDEOS</div>
          <video autoPlay muted loop className={styles.slideVideos}>
            <source src="https://karwaan.b-cdn.net/Front/motion%20(1).webm" type="video/mp4"/>
          </video>
            <div className={styles.leftLine}></div>
          </div>

          <div className={styles.secondPartition}>
            <div className={`${styles.homeAbout} ${styles.hover}` }onClick={()=>router.push("/about")}>ABOUT US</div>
           <div className={styles.aboutUs}><About /></div>
            <span className={styles.bottomLine}></span>
            </div>
          <div className={styles.thirdPartition}>

            <div className={`${styles.homePicture} ${styles.hover}` } onClick={()=>router.push("/picture")}>PICTURES</div>
            <img className={styles.slidePictures}  src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg" alt="not found" />
            <span className={styles.rightLine}></span>
          </div>
        </div>
    </div>
  )
}
