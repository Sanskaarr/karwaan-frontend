"use client";
import React, { useEffect, useRef, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import videoData from "@/constants/VideoData";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useRouter } from "next/navigation";

export default function Videos() {
  const videosPageOptions = [
    { id: 0, OptionName: "Short Films" },
    { id: 1, OptionName: "Documentry" },
    { id: 2, OptionName: "Commercials Films" },
    { id: 3, OptionName: "Corporate Films" },
    { id: 4, OptionName: "CSR Films" },
    { id: 5, OptionName: "Events" },
  ];

  const handleMouseEnter = (e: any) => {
    setIsVideoPlaying(true)
    e.target.play();
  
  };
  const router = useRouter();

  const handleMouseLeave = (e: any) => {
    setIsVideoPlaying(false)
    e.target.pause(); 
  };
  const [isVideoPlaying,setIsVideoPlaying] = useState(false)
  const [selectedSnap, setSelectedSnap] = useState(0);
  const onClickLeftScroll = () =>{
    
    swiperRef.current?.swiper.slideNext()
  }
  const onClickRightScroll = () =>{
    swiperRef.current?.swiper.slidePrev()
  }
  const swiperRef = useRef<SwiperRef>(null)
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      if(window.innerWidth<1028){
        swiperRef.current?.swiper.changeLanguageDirection("ltr")
      }
    }
  },[])
  return (
   
    <div style={{height:"90vh"}} className={styles.parentContainer}>
              <Swiper
              ref={swiperRef}
              dir="rtl"
              onSlidePrevTransitionEnd={()=>{
                if(selectedSnap>0){
                  setSelectedSnap(selectedSnap-1)}}
                }
              onSlideNextTransitionEnd={()=>{
                if(selectedSnap<videoData.length){
                  setSelectedSnap(selectedSnap+1)
                }
              }}
              // onSlideChange={(s)=>{console.log(s.clickedIndex)}}
              // dir="rtl"
              breakpointsBase="window"
              breakpoints={{200:{direction:"vertical",slidesPerView:3,spaceBetween:20},1029:{
                slidesPerView:2,spaceBetween:50,centeredSlides:true,direction:"horizontal"
              }}}
              

        
        className={styles.swiper}
      >
        {
          videoData.map((data,index)=>
            <SwiperSlide key={data.id} className={styles.cardContainer}>

         <div style={{display:"flex",flexGrow:1,justifyContent:"center",width:"100%",height:"100%",alignItems:"center"}}>
         <div className={styles.slide}>
         <motion.div
           className={styles.slideChild}
           initial={{ x: -100, y: 0, opacity: 0 }}
           animate={{ x: 0, y: 0, opacity: 1 }}
           transition={{ ease: "easeIn", delay: 1, duration: 2 }}
          
        
         >
                       <motion.div
             style={{
               cursor: "pointer",
               width: "100%",
               height: "100%",
               position: "relative",
               display: "flex",
               overflow: "hidden",
             }}
           >
         <motion.img
               src={data.imgSrc}
               alt={data.name}
               className={styles.videosThumbnail}
               initial={{ opacity: 0.3 }}
               animate={{ opacity: 1 }}
               transition={{ ease: "easeIn", delay: 0, duration: 0.3 }}
             />
             <video
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               autoPlay={true}
               muted
               loop
               disablePictureInPicture
               disableRemotePlayback
               className={styles.videoContainer}
             >
               <source src={data.videoHref} type="video/mp4" />
               Your browser does not support this feature
             </video>
             </motion.div>
             </motion.div>
         </div>
         </div>
</SwiperSlide>
          )
        }

      </Swiper>
      {/* <p style={{backgroundColor:"white",width:"100%",position:"absolute",textAlign:"center",bottom:0}}>Hold to play video</p> */}
      <div className={styles.sidebarNav} >
      <div className={styles.home}>
           <span onClick={() => router.push("/")}>Home</span>
         </div>{" "}
{selectedSnap==0&&<motion.div
          
          className={styles.motion}
          initial={{ x: 100, y: 0 }}
          animate={{ x: 0, y: 0 }}
          exit={{opacity:0}}
          transition={{ ease: "easeIn", delay: 0, duration: 1 }}
        >
          <span style={{color:"black"}} className={styles.videosPageOptionsTitle}>Motion</span>

          {videosPageOptions.map((e) => (
            <span key={e.id} className={styles.optionName}>
              {e.OptionName}
            </span>))}
    </motion.div>}
            </div>
    {/* Scroll Bar */}
    <div className={styles.videosScrollBar}>
        <div
          className={styles.videosScrollBarLeft}
          // onClick={(e) => handleScroll("left")}
          onClick={onClickLeftScroll}
        >
          <WestIcon className={styles.videosIcons} />
          <div className={styles.videosScroll}>Scroll</div>
        </div>
        <div className={styles.videosScrollBarCenter}>
          {videoData
            ? videoData.length
              ? `${selectedSnap+1}/${videoData.length} ${
                  videoData[selectedSnap]?.name
                }`
              : "No video is available"
            : ""}
        </div>
        <div
          className={styles.videosScrollBarRightSide}
          // onClick={(e) => handleScroll("right")}
          onClick={onClickRightScroll}
        >
          <div className={styles.videosScroll}>Scroll</div>
          <EastIcon className={styles.videosIcons} />
        </div>
      </div>
    </div>
  );
}
