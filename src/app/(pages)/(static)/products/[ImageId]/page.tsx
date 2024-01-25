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
const shop = () => {
    const [isItemInCart,setIsItemInCart]=useState<boolean>(false);

    const {ImageId} = useParams<{ ImageId: string }>()
    const { handleGetProduct, handleGetAllProduct, response ,singleResponse} = useProduct(null,null,null,ImageId);
    if(typeof(window)!=='undefined'){
      
        var token=JSON.parse(localStorage.getItem("user") as string)?.token;
        var _id=JSON.parse(localStorage.getItem("user") as string)?._id;
        var { handleAddItemToCart,cartItems} = useCart({token:token,productId:ImageId,userId:_id});
   
      var {handleCreateOrder} = useOrder(token,_id,[_id]);
    }
 useEffect(()=>{
   let cartItems=JSON.parse( localStorage.getItem("cartItems") as string);
        if(cartItems){
          if (cartItems.find((productId:string)=>productId===ImageId))setIsItemInCart(true);
        }
 },[isItemInCart])
    useEffect(() => {
        // Call the handleGetAllProduct function when the component mounts or when dependencies change
        handleGetProduct();
        handleGetAllProduct();

    }, [ImageId]);
 
    const router=useRouter()              

 
    // const currrentIndex=response&&response.findIndex((obj:any) => {obj._id === singleResponse._id&&obj.media.type === singleResponse.media.type._id});
    // const previouProductIndex=response||currrentIndex&&response[currrentIndex-1]._id;
    // const nextProductIndex=response||currrentIndex&&response[currrentIndex+1]._id;
    return ( 
        <div className={styles.singleProductPage}>
        {/* <div className={styles.singleProductPageSlider}>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})-1]._id}`)}><KeyboardArrowLeftIcon  style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
        <div className={styles.singleProductPageSliderButton} onClick={()=>router.push(`/products/${response[response.findIndex((obj:any) => {obj._id === singleResponse._id||obj.media.type === singleResponse.media.type})+1]._id}`)}><KeyboardArrowRightIcon style={{backgroundColor:"white",color:"black"}} className={styles.icons}/></div>
    
        </div> */}
            
        <div className={styles.singleProductPageUpperSection}>
        <div className={styles.singleProductPageUpperLeftSection}>
       { singleResponse&& <img src={"data:image/jpeg;base64," + singleResponse.media.data} style={{objectFit: "contain"}} alt={singleResponse.name} />}
        </div>
        <div className={styles.singleProductPageUpperRightSection}>
       {singleResponse&&  <h3 style={{color:"black"}}>{singleResponse.name}</h3>}
      {singleResponse&&   <p>{singleResponse.tags.join(", ")}</p>}
         {singleResponse&&<h3 style={{color:"black"}}>{singleResponse.price+" "}<CurrencyRupeeIcon/></h3>}
        {singleResponse&& <p>{singleResponse.description}</p>}
         {/* <p>SIZE</p>
         <select>
            <option value="8">8" X 12"</option>
            <option value="12">12" X 18"</option>
            <option value="16">16" X 24"</option>
            <option value="20">20" X 30"</option>
            <option value="24">24" X 36"</option>
         </select> */}
         <div className={styles.buttons}>
        {isItemInCart? <button className={styles.button} >Item is Added</button>:
         <button className={styles.button} 
         onClick={(e:any)=>{
            if(token){
            handleAddItemToCart(e)
        }else{ 
            toast.error("Please login first... ") ;
            router.push("/signup");
        }
             setIsItemInCart(true)
             }}>Add To Cart</button>}
         <button className={styles.button} onClick={(e)=>handleCreateOrder(e)}>Buy</button>
         </div>

        </div>
        </div>
        <p className={styles.shopProductsHeading}>New Modern Design Collection</p>
        <div className={styles.shopProducts}>
                {(response&&singleResponse)&&response
                .filter((product:any)=>product._id!==singleResponse?._id &&product?.media?.type===singleResponse?.media?.type)
                .slice(0,3)
                .map((data:any, index:number) => {
                    return (
                        <div key={index} className={styles.oneProduct} onClick={()=>router.push(`/products/${data._id}`)}>
                            <img src={"data:image/jpeg;base64," + data.media.data} alt={data.name} className={styles.image} />
                            <div className={styles.imagesCategory}>{data.tags.join(", ")}</div>
                            <div className={styles.imagesName}>{data.name}</div>

                        </div>)
                })

                }
        </div>
        </div>
    )
}
export default shop
