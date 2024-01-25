'use client'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import withAuth from '@/component/RoutesProtect/withAuth'
import { useOrder } from '@/hooks/UseOrder'
function page() {
  if (typeof (window) !== 'undefined') {

    var token = JSON.parse(localStorage.getItem("user") as string)?.token;
    var _id = JSON.parse(localStorage.getItem("user") as string)?._id;
    var { handleGetMyOrders } = useOrder(token, _id);
  }
  const [response, setResponse] = useState<any>(null);
  useEffect(() => {
  
  ( async()=>{ 
     let data =await handleGetMyOrders();
    setResponse(data);
})();
  }, [])
  console.log("response", response);
  return (
    <div className={styles.myOrders}>
      <h1>my orders</h1>
    </div>
  )
}

export default withAuth(page)