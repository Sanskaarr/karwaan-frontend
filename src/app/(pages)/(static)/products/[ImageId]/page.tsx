'use client'
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useParams, useRouter } from 'next/navigation';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/hooks/useCart';
import { toast } from 'react-toastify';
import { useOrder } from '@/hooks/UseOrder';
import { ClipLoader } from 'react-spinners';
const shop = () => {
    const value = "  The bride and groom wear garlands of flowers to signify their marriage. In addition, flowers smell so good that we use it in different places by planting them in our garden. This way, the beauty of our place enhancesFlowers carry importance in each nook and corner of the world. They also come in use for making medicines. Similarly, we also make difference in fragrance perfumes from the flowers. Further, the butterflies, birds and bees take the flowers as food.In many weddings, the bride carries a bouquet of flowers when she walks down the aisle. Thus, it is very symbolic in that sense. On special occasions of valentines and anniversary, we gift our partners beautiful flowers as a symbol of our love.   Similarly, we send flowers for someone who is sick to brighten their day. We also send flowers as a token of condolence during funerals. Thus, we see they have so many uses in so many areas.";
    const router = useRouter();
    const [isItemInCart, setIsItemInCart] = useState<boolean>(false);

    const { ImageId } = useParams<{ ImageId: string }>()
    const { handleGetProduct, handleGetAllProduct, response, singleResponse } = useProduct(null, null, null, ImageId);
    if (typeof (window) !== 'undefined') {

        var token = JSON.parse(localStorage.getItem("user") as string)?.token;
        var _id = JSON.parse(localStorage.getItem("user") as string)?._id;
        var { handleAddItemToCart } = useCart({ token: token, productId: ImageId, userId: _id });

        var { handleCreateOrder } = useOrder(token, _id, [_id]);
    }
    const handleBuy = (e: any) => {
        if (token) {
            handleCreateOrder(e);
        } else {
            toast.error("Please log in to buy the product");
            router.push('/signup');
        }

    }
    useEffect(() => {
        let cartItems = JSON.parse(localStorage.getItem("cartItems") as string);
        if (cartItems) {
            if (cartItems.find((productId: string) => productId === ImageId)) setIsItemInCart(true);
        }
    }, [isItemInCart])
    useEffect(() => {
        // Call the handleGetAllProduct function when the component mounts or when dependencies change
        handleGetProduct();
        handleGetAllProduct();

    }, [ImageId]);


    // read more feature 
    const [isReadMoreOpen,setIsReadMoreOpen]=useState<boolean>(false);
    return (
        <div className={styles.singleProductPage}>
            {/* <div className={styles.singleProductPageSlider}>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})-1]._id}`)}><KeyboardArrowLeftIcon  style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})+1]._id}`)}><KeyboardArrowRightIcon style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
    
        </div> */}

            {singleResponse ?
                <>  <div className={styles.singleProductPageUpperSection}>
                    <div className={styles.singleProductPageUpperLeftSection}>
                        {singleResponse && <img src={"data:image/jpeg;base64," + singleResponse.media.data} style={{ objectFit: "cover" }} alt={singleResponse.name} />}
                    </div>
                    <div className={styles.singleProductPageUpperRightSection}>
                        <div>
                            {singleResponse && <h3 style={{ color: "black" }}>{singleResponse.name}</h3>}
                            {singleResponse && <p>{singleResponse.tags.join(", ")}</p>}
                            {singleResponse && <h3 style={{ color: "black" }}>{singleResponse.price + " "}<CurrencyRupeeIcon /></h3>}

                        </div>
                        {/* {singleResponse&& <p>{singleResponse.description}    </p>} */}
                        {singleResponse && <p>{isReadMoreOpen?value:value.slice(0, 150)+"..."}  
                         {
                            isReadMoreOpen?<div className={styles.read} onClick={()=>setIsReadMoreOpen(e=>!e)}>Read Less</div>:<div className={styles.read}  onClick={()=>setIsReadMoreOpen(e=>!e)}>Read More</div>
                        } </p>}
                        <p style={{ alignSelf: "flex-end" }}>SIZE</p>
                        <select style={
                            {   borderRadius:"5px",
                                background: "white",
                                outline: "0",
                                border: "1px solid black",
                                color:'black',
                            }}>
                            <option value="8">8" X 12"</option>
                            <option value="12">12" X 18"</option>
                            <option value="16">16" X 24"</option>
                            <option value="20">20" X 30"</option>
                            <option value="24">24" X 36"</option>
                        </select>
                        <div className={styles.buttons}>
                            {isItemInCart ? <button className={styles.button} >Item is Added</button> :
                                <button className={styles.button}
                                    onClick={(e: any) => {
                                        if (token) {
                                            handleAddItemToCart(e)
                                        } else {
                                            toast.error("Please login first... ");
                                            router.push("/signup");
                                        }
                                        setIsItemInCart(true)
                                    }}>Add To Cart</button>}
                            <button className={styles.button} onClick={(e) => handleBuy(e)}>Buy</button>
                        </div>

                    </div>
                </div>
                    <p className={styles.shopProductsHeading}>New Modern Design Collection</p>
                    <div className={styles.shopProducts}>
                        {(response && singleResponse) && response
                            .filter((product: any) => product._id !== singleResponse?._id && product?.media?.type === singleResponse?.media?.type)
                            .slice(0, 3)
                            .map((data: any, index: number) => {
                                return (
                                    <div key={index} className={styles.oneProduct} onClick={() => router.push(`/products/${data._id}`)}>
                                        <img src={"data:image/jpeg;base64," + data.media.data} alt={data.name} className={styles.image} />
                                        <div className={styles.imagesCategory}>{data.tags.join(", ")}</div>
                                        <div className={styles.imagesName}>{data.name}</div>

                                    </div>)
                            })

                        }
                    </div></> : <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <ClipLoader color="blue" cssOverride={{}} size={30} speedMultiplier={0.5} />
                    <div style={{ color: 'black' }}>loading</div>

                </div>}
        </div>
    )
}
export default shop
