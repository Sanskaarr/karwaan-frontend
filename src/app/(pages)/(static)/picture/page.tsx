'use client'
import styles from './style.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// temp
const tempData = [
  {
    imgName: "mountain",
    categories: "dark",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "dark",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
  {
    imgName: "mountain",
    categories: "all",
    imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg"
  },
]
export default function Picture() {

  const [isMenuHide, setIsMenuHide] = useState<boolean>(false);
  const [isFilterMenu, setIsFilterMenu] = useState<boolean>(false);
  const PictureMenuOption = ["all", "landscape", "cityscape", "dark", "people", "uncategorized"]
  const router = useRouter();
  return (
    <div className={styles.Picture}>
      <div className={styles.PictureSection}>
        <div className={styles.PictureSectionHome}>
          <span onClick={() => router.push("/")}>Home</span>
        </div>
        <div className={styles.PictureSectionFilter}>
          <h3 className={styles.desktopViewFilter}>filter:</h3>
          <h3 className={styles.mobileViewFilter} onClick={() => setIsFilterMenu(!isFilterMenu)}>filter by:{"selected option"}</h3>
          <ul style={
            !isFilterMenu ?
              {
                visibility: "hidden",
                transform: "translate(0,-50%)",
                transition: "ease-in 0.5s",
                zIndex: "-6",
                pointerEvents: "none",

              }
              : {
                visibility: "visible",
                transform: "translate(0,0)",
                transition: "ease-in 0.5s",
                pointerEvents: "all",
              }}
          >
            {
              PictureMenuOption.map((option, index) => {
                return (
                  <li key={index}>{option}</li>
                )
              })
            }
          </ul>
        </div>
        <div className={styles.PictureGallary}>
          {
            tempData.filter((filterData) => filterData.categories === "all").map((data, index) => {
              return (
                <div className={styles.imageSection}>
                  <img className={styles.gallaryImage} src={data.imgSrc} alt={"image" + index} />
                  <div className={styles.gallaryImageText}>{data.imgName}</div>
                </div>
              )
            })
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
