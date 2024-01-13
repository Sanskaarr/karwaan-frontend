'use client'
import styles from './style.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRouter } from 'next/navigation';
import {  useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import videoData from '@/constants/VideoData';
// Import other necessary modules
// Import other necessary modules

export default function Videos() {
  const videosContainerRef = useRef<any>(null);
  
  // const [_, setScrollPosition] = useState(0);

  // if you want to access data from API
  // const { handleGetAllProduct, response } = useProduct('video');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await handleGetAllProduct();
  //     } catch (error) {
  //     }
  //   };

  //   fetchData();
  // }, []);
const [currentIndex,setCurrentIndex]=useState<number>(0);

  const handleScroll = (direction: any) => {
    const scrollAmount = 600; // Adjust the scroll amount as needed
    const container = videosContainerRef.current;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        if(currentIndex!==videoData.length-1){
          setCurrentIndex(currentIndex+1);
        }
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
        if(currentIndex!==0){
          setCurrentIndex(currentIndex-1);
        }else{
          setCurrentIndex(0);
        }
      }
      // setScrollPosition(container.scrollLeft);
    }
  };

  const router = useRouter();

  return (
    <div className={styles.videos} >
      <div className={styles.videosSection}>
        
        <div className={styles.videosSectionHome}>
          <span onClick={() => router.push("/")}>Home</span>
        </div>

        <div style={{ color: "black" }} className={styles.motion}>Motion</div>
        <div className={styles.videosGallary} >

          <div className={styles.videosGallary}
            ref={videosContainerRef}
            // onMouseOver={() => setScrollPosition(videosContainerRef.current.scrollLeft)}
            // onMouseLeave={() => setScrollPosition(0)}
          >
            {videoData ?(videoData.length)?
              videoData.map((data: any) => (
                <a key={data.id} href={ data.videoHref}>
                  <video autoPlay muted loop className={styles.videosGallarySection}>
                    <source src={data.videoHref} type="video/mp4" />
                  </video>
                </a>
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


