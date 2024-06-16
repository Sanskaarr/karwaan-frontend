"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./style.module.css"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import ViewOrders from "@/component/ViewOrders";
import Link from "next/link";


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
  size: string;
  _id: string;
}

interface OrderData {
  shipping_details: ShippingDetails;
  _id: string;
  products: Product[];
  userId: string;
  status: string;
  payment_id: string;
  amount: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

interface Order {
  orderData: OrderData;
}

function page() {
  const { orderid } = useParams<{ orderid: string }>();
  const [isItemsShowing,setIsItemsShowing] = useState(false);
  const [isProcessing,setProcessing] = useState(true);
  const [data,setData] = useState<Order|null>(null) 
  const details = {
    address: "ajshdjs sjdj",
    order_id: "asds",
    razorpayid: "sdkjsdkkj",
    products: [
      {
        name: "rose",
        description: "rose",
        price: 1210,
        url: "https://karwaan-bucket.blr1.digitaloceanspaces.com/function%20now%28%2…",
      },
    ],
  };

  const getData = async()=>{
    try {
      const response = await axios.get(
        `https://api.karwaanfilms.com/api/v1/order/${orderid}`
        // `http://localhost:5000/api/v1/order/${orderid}`
      )
      setProcessing(false)
      setData(response.data)
    } catch (error) {
      toast.error("Something went wrong Please check your order through profile")
    }
    
  }

  useEffect(()=>{
    getData()
  },[])
  return (


<>
    {isProcessing && typeof data == null?<div className={styles.parentContainer}>


      <ClipLoader color="#22A7F2" size={"10"}/>
    </div>:
    
    <div className={styles.parentContainer}>
      <DotLottieReact
        className={styles.orderIndicator}
        src="https://lottie.host/36d5b54c-593e-4edf-a945-e5536e6170bb/RDP4vqCBPy.json"
        loop
        autoplay
        speed={0.5}
      />
      <div className={styles.detailsContainer}>
        <p className={styles.titlePage}>Your order is successfully placed</p>
        <p className={styles.orderIdText}>Order id : {data?.orderData._id}</p>
        <p className={styles.orderIdText} style={{marginBottom:"10px"}}>Razorpay Payment id : {data?.orderData.payment_id}</p>

        {/* address */}
        <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            {/* <span style={{fontWeight:"bold"}}>Address</span>
            <span>{details.address}</span> */}
        </span>
      </div>

      {/* <p className={styles.subTitlePage} onClick={()=>{setIsItemsShowing(false)}}>Continue Shopping</p> */}
      <Link href={"/products"} className={styles.subTitlePage}>Continue Shopping</Link>
      {isItemsShowing&&data?.orderData.products&&<ViewOrders orders={data?.orderData.products}/>}
    </div>
    
    }

</>




  );
}

export default page;
