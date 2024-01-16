'use client'
import React, { useRef, useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import videoData from '@/constants/VideoData';
import { motion } from 'framer-motion';
import styles from './style.module.css';

export default function Videos() {
  const videosContainerRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const router = useRouter();

  const handleScroll = (direction: any) => {
    const scrollAmount = 600; // Adjust the scroll amount as needed
    const container = videosContainerRef.current;
    if (container) {
      if (direction === 'left' && currentIndex !== videoData.length - 1) {
        container.scrollLeft -= scrollAmount;
        // container.scrollRight += scrollAmount;
        setCurrentIndex(currentIndex + 1);
      } else if (direction === 'right' && currentIndex !== 0) {
        container.scrollLeft += scrollAmount;
        // container.scrollRight -= scrollAmount;
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handleMouseEnter = (e: any) => {
    e.target.play();
  };

  const handleMouseLeave = (e: any) => {
    e.target.pause();
  };
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  
    // Use a timeout to wait for the scrolling to finish before updating the index
    setTimeout(() => {
  
      // Update the current index based on the visible video
      const container = videosContainerRef.current;
      if (container) {
              // Calculate the scrollRight value
      let scrollRight = container.scrollWidth - container.offsetWidth + container.scrollLeft;
            // Ensure scrollRight is at least 0 (on extreme left)
            scrollRight = Math.round(scrollRight);
        const visibleVideos = Math.abs(Math.round(container.scrollLeft / 600));
        const currentInd =  (scrollRight>5)?Math.abs( Math.max(0, Math.min(videoData.length - 1, visibleVideos))):6;
       

      if(currentInd!=currentIndex){
        setCurrentIndex(currentInd);
      
  
        // Update the video name in the scroll bar
        if (videoData && videoData.length) {
          const currentVideo = videoData[currentInd];
          // Display the current video name wherever you need it
        }
      }}
    }, 500);
  };
  // const handleScrollOnHover = (e: React.WheelEvent<HTMLDivElement>) => {
  
  //   // Use a timeout to wait for the scrolling to finish before updating the index
  //   setTimeout(() => {
  
  //     // Update the current index based on the visible video
  //     const container = videosContainerRef.current;
  //     if (container) {
  //             // Calculate the scrollRight value
  //     let scrollRight = container.scrollWidth - container.offsetWidth + container.scrollLeft;
  //           // Ensure scrollRight is at least 0 (on extreme left)
  //           scrollRight = Math.round(scrollRight);
  //       const visibleVideos = Math.abs(Math.round(container.scrollLeft / 600));
  //       const currentInd =  (scrollRight>5)?Math.abs( Math.max(0, Math.min(videoData.length - 1, visibleVideos))):6;
       

  //     if(currentInd!=currentIndex){
  //       setCurrentIndex(currentInd);
      
  
  //       // Update the video name in the scroll bar
  //       if (videoData && videoData.length) {
  //         const currentVideo = videoData[currentInd];
  //         // Display the current video name wherever you need it
  //       }
  //     }}
  //   }, 500);
  // };

  return (
    <div className={styles.videos} >
      <div className={styles.videosSection}>
        
        <div className={styles.videosSectionHome}>
          <span onClick={() => router.push("/")}>Home</span>
        </div>

        <motion.div style={{ color: "black" }} className={styles.motion}  initial={{  x:100 , y: 0 }}
                animate={{  x: 0, y: 0 }}
                transition={{ ease: "easeIn", delay:0, duration:0.5 }}>Motion</motion.div>
        <div className={styles.videosGallary} >

          <div className={styles.videosGallary }onWheel={handleWheel}
            ref={videosContainerRef}
            // onMouseOver={() => setScrollPosition(videosContainerRef.current.scrollLeft)}
            // onMouseLeave={() => setScrollPosition(0)}
          >
            {videoData ?(videoData.length)?
              videoData.map((data: any) => (
                <motion.a   initial={{  x:-100 , y: 0 }}
                animate={{  x: 0, y: 0 }}
                transition={{ ease: "easeIn", delay:0, duration:0.5 }} target='_blank' key={data.id} href={ data.videoHref}>
                <motion.img src={data.imgSrc} alt={data.name}
                  className={styles.videosGallarySectionImg}
                  initial={{  opacity: 0.3 }}animate={{  opacity: 1 }} transition={{ ease: "easeIn", delay:0, duration:0.3 }} />
                  <video   
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
        autoPlay={false}  muted loop className={styles.videosGallarySection}>
                    <source src={data.videoHref} type="video/mp4" />
                  </video>

                </motion.a>
              )):<div className={styles.ClipLoader}>
              <ClipLoader color="blue" size={60} speedMultiplier={0.5}  />
               <div>No video is available.</div>
            </div>:
              <div className={styles.ClipLoader}>
              <ClipLoader color="blue" size={60} speedMultiplier={0.5}  />
               <div>loading</div>
            </div>
              }
          </div>
          </div>

      </div>

        {/* Scroll Bar */}
        <div className={styles.videosScrollBar}>
          <div className={styles.videosScrollBarLeft} onClick={(e) => handleScroll('left')}>
            <WestIcon className={styles.videosIcons} />
          <div className={styles.videosScroll}>Scroll</div>
          </div>
          <div className={styles.videosScrollBarCenter}>{videoData ?videoData.length?(`${currentIndex+1}/${videoData.length} ${videoData[currentIndex]?.name}`):"No video is available":""}</div>
          <div className={styles.videosScrollBarRightSide} onClick={(e) => handleScroll('right')}>
          <div className={styles.videosScroll}>Scroll</div>
            <EastIcon className={styles.videosIcons} />
          </div>
        </div>
      </div>

  );
}


