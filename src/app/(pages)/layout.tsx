"use client"
import Navbar from '../../component/navbar/Navbar'
import { useState } from 'react';
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
    <div >
    {/* <div style={isDark?{background:"rgba(0, 0, 0,0.7)"}:{background:"rgba(0, 0, 0,0)"}} > */}
      <Navbar changeHomeTheme={changeHomeTheme} />
      {/* <div style={isDark?{pointerEvents:"none",background:"rgba(0, 0, 0,1)"}:{pointerEvents:"all"}}> */}
      {children}
      </div>
  )
}
