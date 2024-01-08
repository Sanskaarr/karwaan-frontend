'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useProduct } from '@/hooks/useProduct';
import { useRouter } from 'next/navigation';

const shop = () => {
    const [filter, setFilter] = useState<string>("");
    const filterOptions = ['landscape', 'cityscape', 'dark', 'people', 'uncategorized'];
    // const filterOptions = ["Landscapes", "Cityscapes", "People", "Black and white", "Uncategorized"];
    const { handleGetAllProduct, response } = useProduct('image',filter);

    useEffect(() => {
        // Call the handleGetAllProduct function when the component mounts or when dependencies change
        AOS.init({
            duration: 800,
            once: false,
        })
        handleGetAllProduct();
    }, [filter]);

  
    const [isOptionVisible, setIsOptionVisible] = useState({ filter: false, sortedBy: false })
    const scrollRef = useRef(null);
   
    const router=useRouter()              
    console.log(response)
    return (
        <div className={styles.shop} ref={scrollRef}>
            <div className={styles.shopBanner}><p>Karwaan Prints</p> </div>
            <div className={styles.shopProductSection}>
                <div className={styles.shopProductOurPrints} data-aos="fade-up">Our Prints</div>
                <div className={styles.shopProductfilters}>
                    <div className={styles.shopProductfilter}
                        onClick={() => setIsOptionVisible({ filter: !isOptionVisible.filter, sortedBy: false })}
                        data-aos="zoom-in-right">Filter By:-
                        <ul className={styles.filterByOptions}
                            style={isOptionVisible.filter ? { display: "block" } : { display: "none" }}>
                            {
                                filterOptions.map((data, index) => {
                                    return <li key={index} className={styles.filterByOption}
                                        onClick={(e: any) => {  setFilter(data) }}
                                    >{data}</li>
                                })
                            }
                        </ul>

                    </div>

                    <div className={styles.shopProductfilter}
                        onClick={() => setIsOptionVisible({ filter: false, sortedBy: !isOptionVisible.sortedBy })}
                        data-aos="zoom-in-left">Sorted By:-

                        <ul className={styles.sortedByOptions}
                            style={isOptionVisible.sortedBy ? { display: "block" } : { display: "none" }}
                        >
                            <li className={styles.sortedByOption}>Featured</li>
                            <li className={styles.sortedByOption}>Best Selling</li>
                            <li className={styles.sortedByOption}>Price: Low To High</li>
                            <li className={styles.sortedByOption}>Price: High To Low</li>
                        </ul></div>

                </div>

            </div>
            <div className={styles.shopProducts}>
                {response&&response.map((data:any, index:number) => {
                    return (
                        <>
                            <div data-aos="zoom-in-up" key={index} className={styles.oneProduct} onClick={()=>router.push(`/products/${data._id}`)}>
                                <img src={"data:image/jpeg;base64," + data.media.data} alt={data.name} className={styles.image} />
                                <div className={styles.imagesCategory}>{data.tags.join(", ")}</div>
                                <div className={styles.imagesName}>{data.name}</div>
                            </div>

                        </>
                    )
                })

                }
            </div>


        </div >
    )
}

export default shop
