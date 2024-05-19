"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useRouter } from "next/navigation";
import videoData from "@/constants/VideoData";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

export default function Videos() {
  const router = useRouter();

  const videosPageOptions = [
    { id: 0, OptionName: "Short Films" },
    { id: 1, OptionName: "Documentry" },
    { id: 2, OptionName: "Commercials Films" },
    { id: 3, OptionName: "Corporate Films" },
    { id: 4, OptionName: "CSR Films" },
    { id: 5, OptionName: "Events" },
  ];

  const handleMouseEnter = (e: any) => {
    e.target.play();
  };

  const handleMouseLeave = (e: any) => {
    e.target.pause();
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      // startIndex: videoData.length-1,
      breakpoints: {
        "(min-width: 684px)": { startIndex: 0, axis: "y", align: "center" },
        "(min-width: 200px)": { startIndex: 0, axis: "y", align: "center" },
        "(min-width: 1028px)": {
          direction: "rtl",
          axis: "x",
          align: "end",
          duration: 35,
          // startIndex:videoData.length-1
        },
      },
    },
    [WheelGesturesPlugin()]
  );
  const onClickRightScroll = () => {
    emblaApi?.scrollPrev();
  };
  const onClickLeftScroll = () => {
    emblaApi?.scrollNext();
  };
  const [selectedSnap, setSelectedSnap] = useState(0);
  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    if (videoData.length >= emblaApi.selectedScrollSnap()) {
      setSelectedSnap(emblaApi.selectedScrollSnap());
    }
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on("select", updateScrollSnapState);
    emblaApi.on("reInit", updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);
  return (
    // <div></div>
    <div className={styles.videos}>
      <div className={styles.videosSection}>
        <div className={styles.videosSectionHome}>
          <span onClick={() => router.push("/")}>Home</span>
        </div>{" "}
        
        <motion.div
          style={{ color: "black" }}
          className={styles.motion}
          initial={{ x: 100, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeIn", delay: 0, duration: 1 }}
        >
          <span className={styles.videosPageOptionsTitle}>Motion</span>

          {videosPageOptions.map((e) => (
            <span key={e.id} className={styles.optionName}>
              {e.OptionName}
            </span>
          ))}
        </motion.div>
        {/* <div style={{width:"100%",backgroundColor:"black",height:"100%"}}> */}
        {videoData && videoData.length > 0 ? (
          <div className={styles.embla} dir="rtl">
            <div className={styles.emblaViewport} ref={emblaRef}>
              <div className={styles.embla__container}>
                {videoData.map((data: any, i) => {
                  return (
                    <motion.a
                      className={styles.embla__slide}
                      initial={{ x: -100, y: 0, opacity: 0 }}
                      animate={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ ease: "easeIn", delay: 1, duration: 2 }}
                      target="_blank"
                      key={data.id}
                      href={data.videoHref}
                    >
                      <motion.a
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          display: "flex",
                          overflow: "hidden",
                        }}
                      >
                        {/* <div className={styles.videosThumbnail}></div> */}
                        <motion.img
                          src={data.imgSrc}
                          alt={data.name}
                          className={styles.videosThumbnail}
                          // initial={{ opacity: 0.3 }}
                          // animate={{ opacity: 1 }}
                          // transition={{ ease: "easeIn", delay: 0, duration: 0.3 }}
                        />
                        <video
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          autoPlay={false}
                          muted
                          loop
                          className={styles.videoContainer}
                        >
                          <source src={data.videoHref} type="video/mp4" />
                        </video>
                      </motion.a>
                    </motion.a>
                  );
                })}
                <div className={styles.hideBox}>
                  <p>sd</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>no data</p>
        )}
        {/* </div> */}
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
              ? `${selectedSnap + 1}/${videoData.length} ${
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
