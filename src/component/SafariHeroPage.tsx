
import Link from "next/link";
import About from '@/component/about/About';
import styles from "../app/(pages)/style.module.css"
const SafariHeroPage = () => {
  return (
    <div className={styles.home}>
        <video onLoad={(e)=>{e.currentTarget.play()}} className={styles.moblieBgvideo} autoPlay muted loop disableRemotePlayback disablePictureInPicture playsInline>
            <source src="https://trekmunk.b-cdn.net/insanetraveller/videos/home_mobile.webm" type="video/webm" />
            <source src="https://karwaan.b-cdn.net/Main/Mobile%20Background.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.homePartition} >
            <div className={styles.firstPartition} 
            >
              <Link className={`${styles.homeVideo} ${styles.hover}`}  href={"/videos"}>
              VIDEOS
              </Link>
            

              <div className={styles.leftLine}></div>
            </div>
    
            <div className={styles.secondPartition} 
            >
              <Link href={"/about"} className={styles.homeAbout}
               
              >ABOUT US</Link>
              <div className={styles.aboutUs}

              ><About /></div>
              <span className={styles.bottomLine}
               
              ></span>
            </div>
            <div className={styles.thirdPartition} >
    
              <Link href={"/picture"} className={`${styles.homePicture} ${styles.hover}`}
              >PICTURES</Link>

      
              <span className={styles.rightLine}></span>
            </div>
          </div>
    </div>
  )
}

export default SafariHeroPage