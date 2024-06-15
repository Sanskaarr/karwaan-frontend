"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Payment from "@/component/Payment";
import { useOrder } from "@/hooks/UseOrder";


interface obj {
  userDetails:{name:string, email:string},
  orderid:string,
  razorpayobj:Order
}
interface Order {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: any[]; // If notes are always an array of a specific type, you can specify it instead of `any`
  offer_id: string | null;
  receipt: string;
  status: string;
}
type InitialState = {
    productDetails: {
      productId: string;
      description: string;
      name: string;
      price: number;
      tags: string[];
      url: string;
    };
    quantity: number;
    size: '8"x12"' | '12"x18"' | '16"x24"' | '20"x30"' | '24"x36"';
    userId: string;
    _id: string;
  };
function page() {
  const resCartItem = useSelector((state: RootState) => state.cart.products);
  const address = useSelector((state:RootState)=>state.shiiping.shippingDetails);
  const [token,setToken]= useState<string>("")
  const [userId,setUserId] = useState<string>("")
  const { handleCreateOrder } = useOrder({token:token,userId:userId,resCartItem:resCartItem,shipping_details:address});
  // console.log(resCartItem)
  // const dummmy = [
  //   {
  //     productDetails: {
  //       productId: "664dd5dc23ff1a74f21e7b5c",
  //       description: "rose",
  //       name: "rose",
  //       price: 1210,
  //       tags: ["rose", "popstar"],
  //       url: "https://karwaan-bucket.blr1.digitaloceanspaces.com/function%20now%28%29%20%7B%20%5Bnative%20code%5D%20%7D_Blackpink-Rose-Wallpaper-1920x1080-1.jpg",
  //     },
  //     quantity: 1,
  //     size: "4x4",
  //     userId: "664cc24825b3524956e23344",
  //     _id: "666c13c584bc09effa32763f",
  //   },
  // ];
  const [isProcessing,setProcessing] = useState(true)

  type validSize = '8"x12"' | '12"x18"' | '16"x24"' | '20"x30"' | '24"x36"';
  const priceCalculator = (price: number, selectedSize: validSize): number => {
    const pricePerSquareInch = price / 96;

    const prices = {
      '8"x12"': pricePerSquareInch * 8 * 12,
      '12"x18"': pricePerSquareInch * 12 * 18,
      '16"x24"': pricePerSquareInch * 16 * 24,
      '20"x30"': pricePerSquareInch * 20 * 30,
      '24"x36"': pricePerSquareInch * 24 * 36,
    };
    return Math.floor(prices[selectedSize]);
  };
  // Function to calculate total price for all items in resCartItem
  const calculateTotalPrice = (items: InitialState[]): number => {
    let totalPrice = 0;

    items.forEach((item) => {
      const itemPrice = priceCalculator(item.productDetails.price, item.size);
      totalPrice += itemPrice * item.quantity;
    });

    return totalPrice;
  };
  const router = useRouter()
  // console.log("cehckk",shippingDetails)
  useEffect(()=>{

    if(resCartItem.length === 0){
        router.replace("/products/cart")
        toast.error("Please checkout items throught cart")
    }
    if(typeof window !== "undefined"){
      setToken(JSON.parse(localStorage.getItem("user") as string)?.token);
      setUserId(JSON.parse(localStorage.getItem("user") as string)?._id);
      setProcessing(false)
    }


    return()=>{
        
    }
  },[])

  const handleOrderPlace = async (e:any) =>{
    try{
    const {userDetails,razorpayobj,orderid} = await handleCreateOrder(e) as obj
    // console.log("asf",razorpayobj,razorpayobj.id)
    const options = {
      key: process.env.key,
      name: "Karwaan films order",
      description: `Payment for order id ${razorpayobj.id}`,
      order_id: razorpayobj.id,
      handler: async function (response: any) {
       const data = {
        orderid,
        orderCreationId: razorpayobj.id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
       };
      //  console.log("main",response);
       const result = await fetch('https://api.karwaanfilms.com/api/v1/order/verify', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
       });
       const res = await result.json();
       if (res.isOk){
         router.replace(`/order/${orderid}`)
        toast.success("order placed successfully")
       }
       else {
        toast.error("Payment Failed")
       }
      },
      prefill: {
       name: userDetails.name,
       email: userDetails.email,
      },
      theme: {
       color: '#3399cc',
      },
     };
     const paymentObject = new window.Razorpay(options);
     paymentObject.on('payment.failed', function (response: any) {
      toast.error(response.error.description);
     });
     paymentObject.open();
    } catch (error) {
      toast.error("Please try again something went wrong");

    }
  }


  return (
    <>
      {isProcessing?<>
      <p>Processing</p>
      </>:
      <>
      <div className={styles.parentContainer} style={{ color: "#000" }}>
  <Payment/>
      <p className={styles.pageTitle}>Order Review</p>
      <div
        className={styles.containerReviews}
        style={{
          display: "flex",
          flexDirection: "row",
        //   backgroundColor: "beige",
        }}
      >
        {/* products */}
        <div style={{width:"100%"}}>
          <p className={styles.sectionTitle}>Products</p>
          {resCartItem.map((product) => {
            return (
              <div key={product._id} className={styles.cardContainer}>
                <>
                  <img
                    src={product.productDetails.url.startsWith("http")?product.productDetails.url:`https://${product.productDetails.url}`}
                    className={styles.cardThumbnail}
                  />
                </>
                <div className={styles.productDetails}>
                  <p className={styles.productName}>
                    {product.productDetails.name}
                  </p>
                  <p>SIZE: {product.size}</p>
                  <p>₹{product.productDetails.price} INR</p>
                  <p>QUANTITY: {product.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Order details address and bill */}
        <div style={{width:"45%"}}>
          <div>
            <p className={styles.sectionTitle}>Address</p>
            <div className={styles.addressCard}>
                <span>H.No: {address.houseNumber}</span>
                <span>Building No: {address.buildingName}</span>
                <span>Street: {address.street}</span>
                <span>{address.city}, {address.state}, {address.country}</span>
                <span>{address.pin}</span>
            </div>
            <p className={styles.sectionTitle}>Subtotal</p>
            <div className={styles.billCard}>
                <p>₹ {calculateTotalPrice(resCartItem)}</p>
                <button
                className={styles.checkoutBtn}
                onClick={(e)=>{
                  handleOrderPlace(e)
                }} 
              >
                Pay Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>}
    </>
  );
}

export default page;
