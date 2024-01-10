// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useOrder } from '@/hooks/UseOrder';
import { ClipLoader } from 'react-spinners';


const HomePage: React.FC = () => {
  const router = useRouter();
  
  if (typeof (window) !== 'undefined') {
    var { token, _id  } = JSON.parse(localStorage.getItem("user") as string);
    var {handleGetAllItem, cartItems, HandleEmptyCart, HandleRemoveItemFromCart} = useCart({userId: _id, token: token});
    console.log("cartItems",cartItems);
  }
  if(cartItems?.length){
  var {handleCreateOrder} = useOrder(token,_id,cartItems.map((product :any)=>product.product_details._id));
}
  useEffect(() => {
    handleGetAllItem();
  }, [token, _id]);
  return (
    <div className={styles.cart}>
      <h1 className={styles.shoppingCart}>Shopping Cart</h1>
      {cartItems ?
      cartItems.length?
        (<div className={styles.cartContanier}>
          {/* products */}
          <div className={styles.products}>
            <h2 className={styles.heading}>Products</h2>

            { cartItems && cartItems.map((data: any, index: number) => {
                return (
                  <div className={styles.ProductsContainer} key={index}>
                    <img className={styles.ProductsContainerLeft} src={"data:image/jpeg;base64," + data?.product_details?.media?.data} alt="not found" />
                    <div className={styles.ProductsContainerRight}>
                      <div className={styles.cartItemInfo}>{data?.product_details.name}</div>
                      <div className={styles.cartItemInfo}>{data?.product_details.tags.join(", ")}</div>
                      <div className={styles.cartItemInfo}>{data?.product_details.price + " "}<CurrencyRupeeIcon className={styles.rupee} /></div>
                      <button className={styles.cartItemRemove} onClick={(e) => {HandleRemoveItemFromCart(e, data._id,data.product_details._d)}}>Remove</button>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* checkout */}
          <div className={styles.checkout}>
            <h2 className={styles.checkoutHeading}>subtotal</h2>
            <div className={styles.subtotal}>{cartItems && cartItems.reduce((total: any, current: any) => { return total + current.product_details.price }, 0)} <CurrencyRupeeIcon className={styles.rupee} /></div>
            <button className={styles.checkoutBtn} onClick={(e)=>handleCreateOrder(e)}>checkout</button>
            <div style={{marginTop:"10px"}} className={styles.continueShopting} onClick={() => router.push('/shop')}> Continue Shopping →</div>
            <div style={{marginTop:"2px"}} className={styles.emptyCart} onClick={(e) =>{HandleEmptyCart(e)}}> Empty cart →</div>
          </div>
        </div>) :
       ( <div className={styles.cartIsEmpty}>There are no items in your cart. <span  onClick={() => router.push('/shop')}> Continue Shopping →</span> </div> )
        :
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
        <ClipLoader color="blue" cssOverride={{}}  size={50} speedMultiplier={0.5}/>
       </div>
      }
    </div>
  );
};

export default HomePage;
