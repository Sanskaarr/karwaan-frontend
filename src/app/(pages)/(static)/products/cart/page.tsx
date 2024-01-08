// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useOrder } from '@/hooks/UseOrder';


const HomePage: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  const router = useRouter();
  const [cartId, setCartId] = useState<string | null>(null);

  // const { handleGetProduct, handleGetAllProduct, response ,singleResponse} = useProduct(null,null,null,ImageId);
  if (typeof (window) !== 'undefined') {
    const { token, _id  } = JSON.parse(localStorage.getItem("user") as string);
    const cartItem = JSON.parse(localStorage.getItem("cartItem") as string);
    var { handleGetAllItem, getAllCartItemsResponse, HandleRemoveItemFromCart, HandleEmptyCart } = useCart(token, null, _id, cartId);
    var{handleCreateOrder, orderResponse} =useOrder(token,cartItem[0].user_details._id,cartItem.map((product:any )=> product.product_details._id))
    console.log("cartId",cartId)
    console.log("getAllCartItemsResponse", getAllCartItemsResponse && getAllCartItemsResponse);
    console.log("orderResponse", orderResponse && orderResponse.data.payment_details.short_url );

  }
  useEffect(() => {
    handleGetAllItem();
    HandleRemoveItemFromCart();
    // console.log("getAllCartItemsResponse",getAllCartItemsResponse);
  }, [cartId])

  return (
    <div className={styles.cart}>
      <h1 className={styles.shoppingCart}>Shopping Cart</h1>
      {getAllCartItemsResponse ?
        (<div className={styles.cartContanier}>
          {/* products */}
          <div className={styles.products}>
            <h2 className={styles.heading}>Products</h2>

            {
              // data?.product_details

              getAllCartItemsResponse.map((data: any, index: number) => {

                return (
                  <div className={styles.ProductsContainer} key={index}>
                    <img className={styles.ProductsContainerLeft} src={"data:image/jpeg;base64," + data?.product_details?.media?.data} alt="not found" />
                    <div className={styles.ProductsContainerRight}>
                      <div className={styles.cartItemInfo}>{data?.product_details.name}</div>
                      <div className={styles.cartItemInfo}>{data?.product_details.tags.join(", ")}</div>
                      {/* <div className={styles.cartItemInfo}>Size: 8" x 12"</div> */}
                      <div className={styles.cartItemInfo}>{data?.product_details.price + " "}<CurrencyRupeeIcon className={styles.rupee} /></div>
                      <button className={styles.cartItemRemove} onClick={(e) => { setCartId(data?._id)}}>Remove</button>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* checkout */}
          <div className={styles.checkout}>
            <h2 className={styles.checkoutHeading}>subtotal</h2>
            <div className={styles.subtotal}>{getAllCartItemsResponse && getAllCartItemsResponse.reduce((total: any, current: any) => { return total + current.product_details.price }, 0)} <CurrencyRupeeIcon className={styles.rupee} /></div>
            <button className={styles.checkoutBtn} onClick={(e)=>handleCreateOrder(e)}>checkout</button>
            <div className={styles.continueShopting} onClick={() => router.push('/shop')}> Continue Shopping →</div>
            <div className={styles.emptyCart} onClick={(e) =>{HandleEmptyCart(e)}}> Empty cart →</div>
          </div>
        </div>) :
        <div className={styles.cartIsEmpty}>There are no items in your cart. <span onClick={() => router.push('/shop')}> Continue Shopping →</span> </div>
      }
    </div>
  );
};

export default HomePage;
