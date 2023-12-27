import styles from './style.module.css'

export default  function Home() {

  return (
    <div className={styles.home}>
        <video  className={`${styles.bgvideo}`} autoPlay muted loop>
        {/* <video  className={`${styles.bgvideo} ${styles.mobileHidden}`} autoPlay muted loop> */}
            <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.homePartition}>
          <div className={styles.firstPartition}>
          <div className={`${styles.homeVideo} ${styles.hover}` }>VIDEOS</div>
            <div className={styles.leftLine}></div>
          </div>

          {/* <hr className={styles.verticalPartition}/> */}
          <div className={styles.secondPartition}>
            <div className={`${styles.homeAbout} ${styles.hover}` }>ABOUT US</div>
            <span className={styles.bottomLine}></span>
            </div>
          {/* <hr className={styles.verticalPartition}/> */}
          <div className={styles.thirdPartition}>

            <div className={`${styles.homePicture} ${styles.hover}` }>PICTURES</div>
            <span className={styles.rightLine}></span>
          </div>
          <img  src="https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg" alt="not found" />
        </div>
    </div>
  )
}
