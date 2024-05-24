"use client"
import Footer from "@/component/footer/Footer"
import styles from './style.module.css'
import { usePathname } from "next/navigation"
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  return (
    <div className={styles.bodyContainer}>
      {children}
      {["/videos","/picture","/contact"].includes(pathname)?<></>:<Footer/>}
    </div>
  )
}
