'use client'
import styles from './style.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { useAppSelector } from '@/redux/hooks';
import { ClipLoader } from 'react-spinners';

export default function Picture() {
  const [filter, setFilter] = useState<string>("all");
  const filterOptions = ["all", 'landscape', 'cityscape', 'dark', 'people', 'uncategorized'];
  // const filterOptions = ["Landscapes", "Cityscapes", "People", "Black and white", "Uncategorized"];
  const { handleGetAllProduct, response } = useProduct('image', filter);

  useEffect(() => {
    // Call the handleGetAllProduct function when the component mounts or when dependencies change
    handleGetAllProduct();
  }, [handleGetAllProduct]);


  const [isMenuHide, setIsMenuHide] = useState<boolean>(false);
  const [isFilterMenu, setIsFilterMenu] = useState<boolean>(false);
  // const filterOptions = ["all", "landscape", "cityscape", "dark", "people", "uncategorized"]
  const router = useRouter();
  return (
   

     
    <div className={styles.Picture}>
      <div className={styles.PictureSection}>
        <div className={styles.PictureSectionHome}>
          <span onClick={() => router.push("/")}>Home</span>
        </div>
        {!isMenuHide && <div className={styles.PictureSectionFilter}>
          <h3 className={styles.desktopViewFilter}>filter:</h3>
          <h3 className={styles.mobileViewFilter} onClick={() => setIsFilterMenu(!isFilterMenu)}>filter by:{filter}</h3>
          <ul style={
            !isFilterMenu ?
              {
                visibility: "visible",
                transform: "translate(0,-100%)",
                transition: "all 0.5s ease-in",
                zIndex: "-6",
                pointerEvents: "none",

              }
              : {
                visibility: "visible",
                transform: "translate(0,0)",
                transition:"all 0.5s ease-in",
                pointerEvents: "all",
              }}
          >
            {
              filterOptions.map((option, index) => {
                return (
                  <li key={index} style={option === filter ? { textDecoration: "line-through" } : { textDecoration: "none" }} onClick={(e: any) => {setIsFilterMenu(false); setFilter(option) }}>{option}</li>
                )
              })
            }
          </ul>
        </div>}
        <div className={styles.PictureGallary}>
          {
            response ?response.length?
           response.map((data: any, index: number) => {
              if (data.media.type !== "image") return;
              return (
                <div key={index} className={styles.imageSection}>
                  <img className={styles.gallaryImage} src={"data:image/jpeg;base64," + data.media.data} alt={"image" + index} onClick={()=>router.push(`/gallery/${data._id}`)} />
                  <div className={styles.gallaryImageText}>{data.name}</div>
                </div>
              )
            }) :<p style={{position:"absolute", transform:"translate(-50%,-50%)",top:"50%",left:"50%",color:"black"}}>no product is found.</p>
            
            :
            <div className={styles.ClipLoader} style={{position:"absolute", transform:"translate(-50%,-50%)",top:"50%",left:"50%"}} >
              <ClipLoader color="blue" size={60} speedMultiplier={0.5}  />
               <div style={{color:"black"}}>loading</div>
            </div>

          }
        </div>
      </div>

      {/* scroll bar */}
      <div className={styles.PictureScrollBar}>
        <div className={styles.PictureScrollBarLeft}
          style={!isMenuHide ? { visibility: "hidden", pointerEvents: "none", transition: "all 0.4s" } : { visibility: "visible", pointerEvents: "all", transition: "all 0.4s" }}>
          <WestIcon className={styles.pictureIcons} />
          <div className={styles.PictureScroll}>Scroll</div>
        </div>
        <div className={styles.PictureScrollBarRightSide}>
          {isMenuHide ?
            <div className={styles.pictureMenuShow} onClick={() => setIsMenuHide(!isMenuHide)}>
              <VisibilityIcon className={styles.pictureIcons} /> Show
            </div> :
            <div className={styles.pictureMenuHide} onClick={() => setIsMenuHide(!isMenuHide)}>
              <VisibilityOffIcon /> Hide
            </div>}
          <div className={styles.PictureScrollBarRight}>
            <div className={styles.PictureScroll}>Scroll</div>
            <EastIcon className={styles.pictureIcons} />
          </div>
        </div>
      </div>
    </div>
  )
}
