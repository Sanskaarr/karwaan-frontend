'use client'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useRouter } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';

const shop = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])

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
    const InstaData = [
        {
            imgSrc: "https://scontent.cdninstagram.com/v/t51.2885-15/122460821_376541703701352_6705023372130158540_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDYwOC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=jkMdn8kcQDcAX-tDuxy&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjQyNzg5NDM4MDM1NDUzMTYwNQ%3D%3D.2-ccb7-5&oh=00_AfA1S2t5ytiTsE5irkGb59AOTumYutxb6Jjza_POO1OOvQ&oe=6596F79E&_nc_sid=10d13b"
        },
        {
            imgSrc: "https://instagram.fdel1-5.fna.fbcdn.net/v/t51.2885…APVwHo8fjPgFoEHf28BHDg&oe=65980792&_nc_sid=b41fef"
        },
      
       
        {
            imgSrc: "https://instagram.fdel1-6.fna.fbcdn.net/v/t51.2885-15/94895435_1993770094081629_9071003776628730351_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDYwOC5zZHIifQ&_nc_ht=instagram.fdel1-6.fna.fbcdn.net&_nc_cat=109&_nc_ohc=kMvizUs32gIAX__b3ER&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjI5NzE3NTM3MzcxNTk3MTU0Mg%3D%3D.2-ccb7-5&oh=00_AfDWndCykPTEDQabwxlUq4G-vu6JbirCfkT6nIBE8G0u8A&oe=659783DC&_nc_sid=b41fef"
        },
   
    ]
    const [isOptionVisible,setIsOptionVisible]=useState({filter:false,sortedBy:false})
    const router=useRouter();
    return (
        <div className={styles.shop}>
            <div className={styles.shopBanner} data-aos="fade-up"><p>Karwaan Prints</p>
             <button className={styles.shopNow} onClick={()=>router.push("/products")}>Shop Now</button></div>
            <div className={styles.shopProductSection}>
                <div className={styles.shopProductOurPrints} data-aos="fade-up">Our Prints</div>
             

            </div>
            <div className={styles.shopProducts}>
                {tempData.slice(0,6).map((data, index) => {
                    return (
                        <div data-aos="fade-up" key={index} className={styles.oneProduct}>
                            <img src={data.imgSrc} alt={data.imgName} className={styles.image} />
                            <div className={styles.imagesCategory}>{data.categories}</div>
                            <div className={styles.imagesName}>{data.imgName}</div>

                        </div>)
                })

                }
            </div>
            <div className={styles.BigShopProducts}>
                {tempData.slice(0,2).map((data, index) => {
                    const animation=index%2===0?"fade-up":"fade-down";
                    return (

                        <div data-aos="fade-up" key={index} className={styles.BigOneProduct}>
                            <img src={data.imgSrc} alt={data.imgName} className={styles.image} />
                            <div data-aos={animation}  className={styles.BigImagesName}>{data.imgName}</div>
             <button data-aos={animation}  className={styles.BigImagesNameShopNow} onClick={()=>router.push("/products/1")}>Shop Now</button>
                              
                        </div>)
                })

                }
            </div>

        </div>
    )
}

export default shop
