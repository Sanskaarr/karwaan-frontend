'use client'
import { useOrder } from '@/hooks/UseOrder';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import styles from './style.module.css'
function page (){
const {orderId} = useParams<{ orderId: string }>()
console.log("orderID",orderId);
const {updateOrderPaymentStatus}=useOrder(null, null, null, orderId);
useEffect(()=>{updateOrderPaymentStatus()},[orderId]);
// console.log( 'checkoutResponse' ,checkoutResponse&&checkoutResponse);
  return (

    <div className={styles.payment_status}>
      {false?
      <div className={styles.paymentStatusMessage}>
        <img className={styles.paymentStatusImg} src="/paymentFail.png" alt="not found" />
        <p>payment fail</p>
      </div>
      :
      <div className={styles.paymentStatusMessage}>
      <img className={styles.paymentStatusImg} src="/payment successfull.png" alt="not found" />
      <p>payment Successfull</p>
      </div>

     }
    </div>
  )
}

export default page