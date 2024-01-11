'use client'
import styles from './style.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useProduct } from '@/hooks/useProduct';
import { ClipLoader } from 'react-spinners';
// Import other necessary modules
// Import other necessary modules

export default function Videos() {
  const { handleGetAllProduct, response } = useProduct('video');
  const videosContainerRef = useRef<any>(null);
  const [_, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleGetAllProduct();
      } catch (error) {
      }
    };

    fetchData();
  }, []);
const [currentIndex,setCurrentIndex]=useState<number>(0);

  const handleScroll = (direction: any) => {
    const scrollAmount = 600; // Adjust the scroll amount as needed
    const container = videosContainerRef.current;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        if(currentIndex!==response.length-1){
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
      setScrollPosition(container.scrollLeft);
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
            onMouseOver={() => setScrollPosition(videosContainerRef.current.scrollLeft)}
            onMouseLeave={() => setScrollPosition(0)}
          >
            {response ?
              response.map((data: any, index: number) => (
                <a key={index} href={"data:video/mp4;base64," + data.media.data}>
                  <video autoPlay muted loop className={styles.videosGallarySection}>
                    <source src={"data:video/mp4;base64," + data.media.data} type="video/mp4" />
                  </video>
                </a>
              )):
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
          <div className={styles.videosScrollBarCenter}>{response &&`${currentIndex+1}/${response.length} ${response[currentIndex].name}`}</div>
          <div className={styles.videosScrollBarRightSide} onClick={(e) => handleScroll('right')}>
          <div className={styles.videosScroll}>Scroll</div>
            <EastIcon className={styles.videosIcons} />
          </div>
        </div>
      </div>

  );
}


