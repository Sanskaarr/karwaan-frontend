'use client'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from 'react'
import styles from './style.module.css'
const shop = () => {
    const tempData =[ 
        {
            imgName: "mountain",
            categories: "all",
            imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg",
            imgInfo:"The painting captures a breathtaking scene from a winter mountain campaign, showcasing the serene beauty of a snowy landscape. In the foreground, a sturdy military tent stands as a symbol of human resilience amidst the harsh elements. The painting not only celebrates the beauty of nature but also pays tribute to the resilience and determination of those who venture into such unforgiving terrain in pursuit of their goals. It captures the fragile yet enduring human presence in the midst of a formidable natural environment, reminding viewers of the indomitable spirit of exploration and conquest.",
            imgPrice:1800
        },
        {
            imgName: "mountain",
            categories: "all",
            imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg",
            imgInfo:"The painting captures a breathtaking scene from a winter mountain campaign, showcasing the serene beauty of a snowy landscape. In the foreground, a sturdy military tent stands as a symbol of human resilience amidst the harsh elements. The painting not only celebrates the beauty of nature but also pays tribute to the resilience and determination of those who venture into such unforgiving terrain in pursuit of their goals. It captures the fragile yet enduring human presence in the midst of a formidable natural environment, reminding viewers of the indomitable spirit of exploration and conquest.",
            imgPrice:1800
        },
        {
            imgName: "mountain",
            categories: "all",
            imgSrc: "https://karwaan.b-cdn.net/gallery/Cityscapes1.jpg",
            imgInfo:"The painting captures a breathtaking scene from a winter mountain campaign, showcasing the serene beauty of a snowy landscape. In the foreground, a sturdy military tent stands as a symbol of human resilience amidst the harsh elements. The painting not only celebrates the beauty of nature but also pays tribute to the resilience and determination of those who venture into such unforgiving terrain in pursuit of their goals. It captures the fragile yet enduring human presence in the midst of a formidable natural environment, reminding viewers of the indomitable spirit of exploration and conquest.",
            imgPrice:1800
        },
    ]
    
    return (
        <div className={styles.singleProductPage}>
        <div className={styles.singleProductPageSlider}>
        <div className={styles.singleProductPageSliderButton}><KeyboardArrowLeftIcon  style={{backgroundColor:"white"}} className={styles.icons}/></div>
        <div className={styles.singleProductPageSliderButton}><KeyboardArrowRightIcon className={styles.icons}/></div>
    
        </div>
            
        <div className={styles.singleProductPageUpperSection}>
        <div className={styles.singleProductPageUpperLeftSection}>
         <img src={tempData[0].imgSrc} alt={tempData[0].imgName} />
        </div>
        <div className={styles.singleProductPageUpperRightSection}>
         <h3>{tempData[0].imgName}</h3>
         <p>{tempData[0].categories}</p>
         <h3>{tempData[0].imgPrice}</h3>
         <p>{tempData[0].imgInfo}</p>
         <p>SIZE</p>
         <select>
            <option value="8">8" X 12"</option>
            <option value="12">12" X 18"</option>
            <option value="16">16" X 24"</option>
            <option value="20">20" X 30"</option>
            <option value="24">24" X 36"</option>
         </select>
         <div className={styles.buttons}>
         <button className={styles.button}>Add To Cart</button>
         <button className={styles.button}>Buy</button>

         </div>

        </div>
        </div>
        <p className={styles.shopProductsHeading}>New Modern Design Collection</p>
        <div className={styles.shopProducts}>
                {tempData.map((data, index) => {
                    return (
                        <div key={index} className={styles.oneProduct}>
                            <img src={data.imgSrc} alt={data.imgName} className={styles.image} />
                            <div className={styles.imagesCategory}>{data.categories}</div>
                            <div className={styles.imagesName}>{data.imgName}</div>

                        </div>)
                })

                }
        </div>
        </div>
    )
}

export default shop
