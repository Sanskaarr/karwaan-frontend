'use client'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useRouter } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useProduct } from '@/hooks/useProduct';
import { useAppSelector } from '@/redux/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import InstagramWidget from '@/component/InstagramWidget/InstagramWidget';
import { ClipLoader } from 'react-spinners';

const shop = () => {
    const { handleGetAllProduct, response } = useProduct();

    useEffect(() => {
      // Call the handleGetAllProduct function when the component mounts or when dependencies change
         AOS.init({
                duration: 800,
                once: false,
            })
      handleGetAllProduct();
      console.log("mera response",response);
    }, []);
  
  

    // const [isOptionVisible, setIsOptionVisible] = useState({ filter: false, sortedBy: false })
    const router = useRouter();
    const {scrollYProgress}=useScroll();
    let y=useTransform(scrollYProgress,[0,1],["0%","50%"]);
    return (
        <div className={styles.shop}>
            
            <div  className={styles.shopBanner} data-aos="fade-up"><p>Karwaan Prints</p>
                <button className={styles.shopNow} onClick={() => router.push("/products")}>Shop Now</button></div>
            <div className={styles.shopProductSection}>
                <div className={styles.shopProductOurPrints} data-aos="fade-up">Our Prints</div>
            </div>
            <div className={styles.shopProducts} >
                {response?response.slice(0, 6).map((data:any, index:number) => {
                    return (
                        <div data-aos="fade-up" key={index} className={styles.oneProduct}  onClick={()=>router.push(`/products/${data._id}`)}>
                            <img src={"data:image/jpeg;base64,"+data.media.data} alt={data.name} className={styles.image} />
                            <div className={styles.imagesCategory}>{data.tags.join(", ")}</div>
                            <div className={styles.imagesName}>{data.name}</div>

                        </div>)
                }):<div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
                <ClipLoader  color="white"  size={15} speedMultiplier={0.5}/>
               </div>

                }
            </div>
            <div className={styles.BigShopProducts}>
                {response?response.slice(1, 3).map((data:any, index:number) => {
                    const animation = index % 2 === 0 ? "fade-up" : "fade-down";
                    return (

                        <div data-aos="fade-up" key={index} className={styles.BigOneProduct}>
                            <img src={"data:image/jpeg;base64,"+data.media.data} alt={data.name} className={styles.image} />
                            <div className={styles.innerContainer}>
                            <div data-aos={animation} className={styles.BigImagesName}>{data.name}</div>
                            <button data-aos={animation} className={styles.BigImagesNameShopNow} onClick={() => router.push("/products/1")}>Shop Now</button>

                            </div>
                           
                        </div>)
                }): <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
                <ClipLoader  color="white" cssOverride={{}}  size={15} speedMultiplier={0.5}/>
               </div>

                }
            </div>
            <div className={styles.instaPost}>
            <InstagramWidget />
        </div>
            {/* <div className={styles.instaPost}>
           <iframe className={styles.post} style={{border: "0", width: "100%", height: "200%", objectFit:"contain"}} scrolling="no" src="https://embedsocial.com/api/pro_hashtag/218878fa5b19ed9f8638b94316c7dcb2edf5c752"></iframe>
        </div> */}
        </div>
    )
}

export default shop
