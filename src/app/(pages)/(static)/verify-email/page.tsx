import React from 'react'
import styles from "./style.module.css"
import {Spinner} from "@nextui-org/react";
function page (){
  return (
    <div className={styles.verifyEmail}>
     <Spinner size="lg" label="Loading..." color="warning" />
    </div>
  )
}

export default page
