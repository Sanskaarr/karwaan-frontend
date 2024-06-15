"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Hamburger.module.css";
interface HamburgerProps {
    isActive?: true|false;
    toggleActive: () => void;
  }
  
  const Hamburger: React.FC<HamburgerProps> = ({ isActive=false, toggleActive}) => {
  const pathname = usePathname();

  return (
    <div style={{height:"25px",width:"30px", zIndex:"100",cursor: "pointer", marginLeft:"10px"}} onClick={toggleActive} >
      {isActive ? (
        <>
        <span style={pathname === "/"? { backgroundColor: "white"}: { backgroundColor: "black" }} className={styles.isActiveline1}></span>
        <span  style={pathname === "/"? { backgroundColor: "white" }: { backgroundColor: "black" }}  className={styles.isActiveline2}></span>
        <span style={pathname === "/" ? { backgroundColor: "white" } : { backgroundColor: "black" }} className={styles.isActiveline3}></span>    
       </>
      ) : (
        <>
      <span style={pathname === "/" ? { backgroundColor: "white" } : { backgroundColor: "black" }}  className={styles.line1} ></span>
      <span style={pathname === "/" ? { backgroundColor: "white" } : { backgroundColor: "black" }}  className={styles.line2} ></span>
      <span style={pathname === "/" ? { backgroundColor: "white" } : { backgroundColor: "black" }}  className={styles.line3} ></span>

        </>
      )}
    </div>
  );
};

export default Hamburger;
