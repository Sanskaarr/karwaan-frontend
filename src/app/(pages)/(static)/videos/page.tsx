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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleGetAllProduct();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [handleGetAllProduct]);

  const handleScroll = (direction: any) => {
    const scrollAmount = 5000000; // Adjust the scroll amount as needed
    const container = videosContainerRef.current;

    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
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
          <div className={styles.videosScrollBarLeft} onMouseEnter={() => handleScroll('left')}>
            <WestIcon className={styles.videosIcons} />
          </div>
          <div className={styles.videosScrollBarCenter}>{response && response[0]?.name}</div>
          <div className={styles.videosScrollBarRightSide} onMouseEnter={() => handleScroll('right')}>
            <EastIcon className={styles.videosIcons} />
          </div>
        </div>
      </div>

  );
}



// export default function Videos() {

//   // const filterOptions = ["Landscapes", "Cityscapes", "People", "Black and white", "Uncategorized"];
//   const { handleGetAllProduct, response } = useProduct('video');

//   useEffect(() => {
//     // Call the handleGetAllProduct function when the component mounts or when dependencies change
//     handleGetAllProduct();
//   }, []);


//   // console.log(response)
//   const myRef = useRef<any>(null)

//   const router = useRouter();

//   return (
//     <div className={styles.videos} >
//       <div className={styles.videosSection}>
//         <div className={styles.videosSectionHome}>
//           <span onClick={() => router.push("/")}>Home</span>
//         </div>

//         <div style={{ color: "black" }} className={styles.motion}>Motion</div>
//         <div className={styles.videosGallary} >
//           {
//             response && response.map((data: any, index: number) => {
//               return (
//                 <a key={index} href={"data:video/mp4;base64," + data.media.data} ref={myRef} >
//                   <video autoPlay muted loop className={styles.videosGallarySection}>
//                     <source src={"data:video/mp4;base64," + data.media.data} type="video/mp4" />
//                   </video></a>
//               )
//             })
//           }
//         </div>
//       </div>

//       {/* scroll bar */}
//       <div className={styles.videosScrollBar}>
//         <div className={styles.videosScrollBarLeft}>
//           <WestIcon className={styles.videosIcons} />
//           <div className={styles.videosScroll} onMouseEnter={() => myRef.current.scrollIntoView()  }>Scroll</div>
//         </div>
//         <div className={styles.videosScrollBarCenter}>{response && response[0].name}</div>
//         <div className={styles.videosScrollBarRightSide}>
//           <div className={styles.videosScrollBarRight}>
//             <div className={styles.videosScroll} onMouseEnter={() => myRef.current.scrollIntoView({ inline: "end" })  }>Scroll</div>
//             <EastIcon className={styles.videosIcons} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }