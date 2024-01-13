'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { ClipLoader } from 'react-spinners';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {  motion } from 'framer-motion';
import galleryData from '@/constants/galleryData';
export default function Gallery() {

  // if you want to access data from APIs
  // const { handleGetAllProduct, response } = useProduct('image');

  // useEffect(() => {
  //   // Call the handleGetAllProduct function when the component mounts or when dependencies change
  //   handleGetAllProduct();
  // }, []);
  
  const { index } = useParams<{ index: string }>()
  const currentIndex:number=galleryData?.findIndex((data :any)=>data.id===index) ;
  const [counter, setCounter] = useState<number>(0);
  const router = useRouter();
useEffect(()=>{ if(currentIndex>0){setCounter(currentIndex)}else{setCounter(0)}},[currentIndex]);
  const handleCounter = (value: number): any => {
    if (value > 0) {
      if (counter === (galleryData.length - 1)) setCounter(0);
      else setCounter(counter + value)
    } else {
      if (counter === 0) setCounter(galleryData.length - 1);
      else setCounter(counter + value);

    }
  }
 

  return (
    <div className={styles.mainGallary} >
    <div className={styles.mainGallaryBackground} onClick={()=>router.push('/picture')} ></div>
      
      {
        galleryData?

          <div className={styles.imageSection}>
            <div className={styles.prevArrows}  onClick={() => handleCounter(-1)}>
              <KeyboardArrowLeftIcon />
            </div>
       

              <motion.img key={counter}
              initial={{ opacity: 0.3 , x: 0, y: 0 }}
              animate={{ opacity: 1 , x: 0, y: 0 }}
              transition={{ ease: "easeIn", delay: 0.1 }}
                className={styles.mainGallaryImage} src={galleryData[counter]?.imgSrc} alt={"image" + counter} />
            <div className={styles.nextArrows} onClick={() => handleCounter(1)}>
              <KeyboardArrowRightIcon />
            </div>
          </div>



          :
          <div className={styles.ClipLoader}>
            <ClipLoader color="blue" size={60} speedMultiplier={0.5} />
            <div>loading</div>
          </div>

      }

    </div>




  )
}
