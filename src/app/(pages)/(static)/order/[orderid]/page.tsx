"use client"

import withAuth from "@/component/RoutesProtect/withAuth"
import useViewMyOrder from "@/hooks/useViewMyOrder"
import { useEffect, useState } from "react"
import styles from "./style.module.css"

interface UserDetails {
  email: string;
  clientName: string;
}

interface ShippingDetails {
  houseNumber: string;
  buildingName: string;
  street: string;
  city: string;
  state: string;
  country: string;
  pin: string;
  contactNumber: string;
}

interface Product {
  productId: string;
  quantity: number;
  size: '8"x12"' | '12"x18"' | '16"x24"' | '20"x30"' | '24"x36"';
  _id: string;
}

interface OrderData {
  userDetails: UserDetails;
  shipping_details: ShippingDetails;
  _id: string;
  products: Product[];
  userId: string;
  status: 'PAYMENT PENDING' | 'PAYMENT COMPLETE' | 'PAYMENT FAILED';
  payment_id: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}[]
function page() {
  const {getMyOrders} = useViewMyOrder()
  const [token,setToken] = useState("")
  const [userId,setUserId] = useState("")
  const [data,setData] = useState<Array<OrderData>>()
  const getMyOrdersCall = async () =>{
      const res = await getMyOrders(token,userId)
      if(res){
        setData(res)
      }
  }
  useEffect(()=>{
    if(typeof window!=="undefined"){
      setToken(JSON.parse(localStorage.getItem("user") as string)?.token)
      setUserId(JSON.parse(localStorage.getItem("user") as string)?._id)
      
    }
    if(userId!==""){
      getMyOrdersCall()
    }
  },[userId])

  return (
    <div className={styles.container}>
      <h1>Your Orders</h1>
      {data&&
      <>
      {data.map(order => (
                <div key={order._id} className={styles.order}>
                    <h2 className={styles.orderId}>Order ID: {order._id}</h2>
                    <h2 className={styles.orderId}>Payment ID: {order.payment_id}</h2>
                    <h3>Products</h3>
                    <ul className={styles.productList}>
                        {order.products.map((product, index) => (
                            <li key={index} className={styles.productItem}>
                                <div>
                                    <span>{product.productId}</span>
                                    <span>Quantity: {product.quantity}</span>
                            {/* Assuming price is a property of product.productId */}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount:  ₹{order.amount}</h3>
                    <h3>Shipping Details</h3>
                    <p>
                        {order.userDetails.clientName} <br />
                        Email: {order.userDetails.email} <br />
                        Phone: {order.shipping_details.contactNumber} <br />
                        {order.shipping_details.houseNumber}, {order.shipping_details.buildingName} <br />
                        {order.shipping_details.street}, {order.shipping_details.city} <br />
                        {order.shipping_details.state}, {order.shipping_details.country} <br />
                        PIN: {order.shipping_details.pin}
                    </p>
                </div>
            ))}
            </>}
    </div>
  )
}

export default withAuth(page)