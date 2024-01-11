'use client'
import { useOrder } from '@/hooks/UseOrder';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { ClipLoader } from 'react-spinners';
import withAuth from '@/component/RoutesProtect/withAuth';
function page (){
const {orderId} = useParams<{ orderId: string }>()
if(typeof(window)!=="undefined"){
  var token=JSON.parse(localStorage.getItem("user") as string)?.token;
  var {updateOrderPaymentStatus}=useOrder(token, null, null, orderId);
}
const[checkoutResponse,setCheckoutResponse]=useState<any>(null);
const checkOutData=async()=> {if(orderId && token ){
  setCheckoutResponse( await updateOrderPaymentStatus())
 }}
useEffect(()=>{
  checkOutData();
},[orderId,token]);
  return (
    <div className={styles.payment_status}>
      {false?
      <div className={styles.paymentStatusMessage}>
        <img className={styles.paymentStatusImg} src="/paymentFail.png" alt="not found" />
       {checkoutResponse?
       <>
        <p>{checkoutResponse.message}</p>
        <p>{`payment_id is : ${checkoutResponse?.data?.order_details?.payment_id}`}</p>
        <p>{`orderID is :${orderId}`}</p>
        <p>{`amount is ${checkoutResponse?.data?.order_details.amount}` }</p>
       </>:
         <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
         <ClipLoader  color="blue" cssOverride={{}}  size={15} speedMultiplier={0.5}/>
        </div>
      }
      </div>
      :
      <div className={styles.paymentStatusMessage}>
      <img className={styles.paymentStatusImg} src="/payment successfull.png" alt="not found" />
     {checkoutResponse? <>
        <p style={{whiteSpace:"nowrap",fontSize:"12px",width:"90%", maxWidth:"350px",overflow: "hidden",textOverflow: "ellipsis",  }}>{checkoutResponse?.message}</p>
        <p style={{whiteSpace:"nowrap",fontSize:"12px",width:"90%", maxWidth:"350px",overflow: "hidden",textOverflow: "ellipsis",  }}><span style={{fontWeight:"bold"}}>payment_id is :</span>{` ${checkoutResponse?.data?.order_details?.payment_id}`}</p>
        <p style={{whiteSpace:"nowrap",fontSize:"12px",width:"90%", maxWidth:"350px",overflow: "hidden",textOverflow: "ellipsis",  }}><span style={{fontWeight:"bold"}}>orderID is :</span> {` ${orderId}`}</p>
        <p style={{whiteSpace:"nowrap",fontSize:"12px",width:"90%", maxWidth:"350px",overflow: "hidden",textOverflow: "ellipsis",  }}><span style={{fontWeight:"bold"}}>amount is :</span>{` ${checkoutResponse?.data?.order_details?.amount}` }</p>
      </>
     :
        <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
        <ClipLoader  color="white" cssOverride={{}}  size={15} speedMultiplier={0.5}/>
       </div>}
       </div>

     }
    </div>
  )
}

export default page;