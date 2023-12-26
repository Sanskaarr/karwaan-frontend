"use client"
import style from './style.module.css';
// import Link from 'next/navigation';
import Navbar from '../../component/navbar/Navbar'
import { useState } from 'react';
import Footer from '@/component/footer/Footer';

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark,setIsDark]=useState<boolean>(false)
  function changeHomeTheme(isDark:boolean):void{
    setIsDark(isDark);
  }
  return (
    <div style={isDark?{background:"rgba(0, 0, 0,0.2)"}:{background:"rgba(0, 0, 0,0)"}} >
    {/* <div style={isDark?{background:"rgba(0, 0, 0,0.2)"}:{background:"rgba(0, 0, 0,0)"}}> */}
      <Navbar changeHomeTheme={changeHomeTheme} />
      {children}
      {/* <Footer/> */}
    </div>
  )
}
