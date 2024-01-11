'use client'
import React from 'react'
import styles from './style.module.css'
import withAuth from '@/component/RoutesProtect/withAuth'
function page(){
  return (
    <div className={styles.myOrders}>
        <h1>my orders</h1>
    </div>
  )
}

export default withAuth(page)