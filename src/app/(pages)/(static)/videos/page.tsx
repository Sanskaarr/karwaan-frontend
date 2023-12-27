'use client'
import styles from './style.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRouter } from 'next/router';
export default  function Videos() {
 
  const tempData=[
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
    {
      videoSrc:"https://karwaan.b-cdn.net/Videos/Pursuit%20of%20Success%20-%20Journey%20Of%20Glory%202021.mp4",
    },
  ]
 
  const router = useRouter();

  return (
    <div className={styles.videos} contextMenu="return false;">
    <div className={styles.videosSection}> 
    <div className={styles.videosSectionHome}>
      <span onClick={()=>router.push("/")}>Home</span>
       </div>
 
    <div style={{color:"black"}} className={styles.motion}>Motion</div>
    <div className={styles.videosGallary}>
      {
        tempData.map((data,index)=>{
         return(
            <a key={index} href={data.videoSrc}>
          	<video autoPlay muted loop className={styles.videosGallarySection}>
            <source src={data.videoSrc} type="video/mp4"/>
          </video></a>
         )
        })
      }
    </div>
    </div>

      {/* scroll bar */}
    <div className={styles.videosScrollBar}>
    <div className={styles.videosScrollBarLeft}>
    <WestIcon className={styles.videosIcons}/>
    <div className={styles.videosScroll}>Scroll</div>
     </div>
    <div className={styles.videosScrollBarRightSide}>
   

    <div className={styles.videosScrollBarRight}>
    <div className={styles.videosScroll}>Scroll</div>
    <EastIcon className={styles.videosIcons}/>
     </div>
     </div>
    </div>
    </div>
  )
}