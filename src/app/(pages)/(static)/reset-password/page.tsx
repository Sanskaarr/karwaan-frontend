'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import ResetPassword from '@/component/reset-password/ResetPassword';
import styles from './style.module.css'
const forgotPassword = () => {
const searchParams = useSearchParams()
  const token = searchParams.get('token');
const _id = searchParams.get('id');

  return (
    
    <div className={styles.resetPassword}>
<div className={styles.resetPasswordContainer}>

<ResetPassword token={token!} _id={_id!} />
</div>
    </div>

  )
}

export default forgotPassword
