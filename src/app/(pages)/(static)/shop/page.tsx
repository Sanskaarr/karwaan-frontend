'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
const shop = () => {
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
    const [isOptionVisible,setIsOptionVisible]=useState({filter:false,sortedBy:false})
    return (
        <div className={styles.shop}>
            <div className={styles.shopBanner}><p>Karwaan Prints</p> </div>
            <div className={styles.shopProductSection}>
                <div className={styles.shopProductOurPrints}>Our Prints</div>
                <div className={styles.shopProductfilters}>
                    <div className={styles.shopProductfilter} 
                    onClick={()=>setIsOptionVisible({filter:!isOptionVisible.filter,sortedBy:false})}
                    >Filter By:-
                        <ul className={styles.filterByOptions} 
                        style={isOptionVisible.filter?{display:"block"}:{display:"none"}}>
                            <li className={styles.filterByOption}>Landscapes</li>
                            <li className={styles.filterByOption}>Cityscapes</li>
                            <li className={styles.filterByOption}>People</li>
                            <li className={styles.filterByOption}>Black and white</li>
                            <li className={styles.filterByOption}>Uncategorized</li>
                        </ul>

                    </div>

                    <div className={styles.shopProductfilter}
                    onClick={()=>setIsOptionVisible({filter:false,sortedBy:!isOptionVisible.sortedBy})}
                    >Sorted By:-

                        <ul className={styles.sortedByOptions}
                         style={isOptionVisible.sortedBy?{display:"block"}:{display:"none"}}
                        >
                            <li className={styles.sortedByOption}>Featured</li>
                            <li className={styles.sortedByOption}>Best Selling</li>
                            <li className={styles.sortedByOption}>Price: Low To High</li>
                            <li className={styles.sortedByOption}>Price: High To Low</li>
                        </ul></div>

                </div>

            </div>
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
