'use client'
import React from "react";
import Delete from '@/component/delete/Delete'
// import Delete from '../../../../../component/delete/Delete'
import {Modal, Button, useDisclosure} from "@nextui-org/react";

import styles from './style.module.css'
export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    < div className={styles.deleteAccount}>
    <h1 suppressHydrationWarning={true}>
        Current Date: {new Date().toLocaleDateString()}
      </h1>
   
      <Delete/>
    </div>
  );
}

// 'use client'
// import React from 'react'
// import styles from './style.module.css'
// import { useRouter } from 'next/navigation'
// function page () {
//     const router=useRouter();
//   return (
//     <div className={styles.deletePopUp}>
//     <h2>Are you sure?</h2>

//     <p>This action cannot be undone.</p>
// <p>You will lose access to all your account, teams, credits, dataset, models, and plans. If you have an active subscription you will lose access to it. There are no refunds.
// SavePlease make sure you are certain about this action.</p>
// <div className={styles.deletePopUpButtons}>
// <button className={styles.deletePopUpButton} onClick={()=>router.push("/shop/my-account")}>Cancel</button>
// <button className={styles.deletePopUpButton}>Delete</button>
    
// </div>
//     </div>
//   )
// }

// export default page