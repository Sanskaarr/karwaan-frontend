
'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useUser } from '@/hooks/useUser';
import { useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { ClipLoader } from 'react-spinners';
type ResetPasswordProps = {
    token: string;
    _id: string;
  };
  
  const ResetPassword: React.FC<ResetPasswordProps> = ({ token, _id }) => {
const searchParams = useSearchParams()
//   const token = searchParams.get('token');
// const _id = searchParams.get('id');
type formType = {
  confirmNewPassword: string,
  newPassword: string,
  password: string,
}
const [formData, setFormData] = useState<formType>({password:"",confirmNewPassword: "", newPassword: ""});
const [isPassVisible, setIsPassVisible] = useState({ existPass: false, newPass: false, confirmNewPass: false });
  const {handleResetPasswordUser} = useUser(token, _id);
  const  isResetPasswordLoading:boolean = useAppSelector((state:any) => state.userRequest.resetPassword.loading);

  return (
    // <div className={styles.resetPassword} >
          <form className={styles.contactForm} >
            <h2>Reset Password</h2>
            <div className={styles.password}>
                        <input className={styles.inputField} type={isPassVisible.existPass ? "text" : "password"} name='password' id='ExistPassword'
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({ ...formData, password: e.target.value })
                            }} required />
                        <label className={`${styles.passwordLable}${styles.lables}`}>Exisiting password</label>
                        <div className={styles.visibility} onClick={() => setIsPassVisible({ existPass: !isPassVisible.existPass, newPass: false, confirmNewPass: false })}>{isPassVisible.existPass ? <VisibilityOutlinedIcon className={styles.VisibleIcon} /> : <VisibilityOffOutlinedIcon className={styles.VisibleIcon} />}</div>
                    </div>
                    <div className={styles.password}>
                        <input className={styles.inputField} type={isPassVisible.newPass ? "text" : "password"} name='password' id='newPassword'
                            value={formData.newPassword}
                            onChange={(e) => {
                                setFormData({ ...formData, newPassword: e.target.value })
                            }} required />
                        <label className={`${styles.passwordLable}${styles.lables}`}>New password</label>
                        <div className={styles.visibility} onClick={() => setIsPassVisible({ existPass: false, newPass: !isPassVisible.newPass, confirmNewPass: false })}>{isPassVisible.newPass ? <VisibilityOutlinedIcon className={styles.VisibleIcon} /> : <VisibilityOffOutlinedIcon className={styles.VisibleIcon} />}</div>
                    </div>
                    <div className={styles.password}>
                        <input className={styles.inputField} type={isPassVisible.confirmNewPass ? "text" : "password"} name='password' id='confirmNewPassword'
                            value={formData.confirmNewPassword}
                            onChange={(e) => {
                                setFormData({ ...formData, confirmNewPassword: e.target.value })
                            }} required />
                        <label className={`${styles.passwordLable}${styles.lables}`}>Confirm new password</label>
                        <div className={styles.visibility} onClick={() => setIsPassVisible({ existPass: false, newPass: false, confirmNewPass: !isPassVisible.confirmNewPass })}>{isPassVisible.confirmNewPass ? <VisibilityOutlinedIcon className={styles.VisibleIcon} /> : <VisibilityOffOutlinedIcon className={styles.VisibleIcon} />}</div>
                    </div>
                    <button className={styles.submitButton}
                        onClick={(e) =>handleResetPasswordUser(e, formData.newPassword, formData.confirmNewPassword) }
                    >{!isResetPasswordLoading ?"Change Password":
                        <div style={{ display: "flex", alignItems: "center" , justifyContent:"center"}}>
                            <ClipLoader color="white" cssOverride={{}} size={15} speedMultiplier={0.5} />
                        </div>}
                    </button>
  </form>
    //  {/* </div> */}
  )
}

export default ResetPassword
