"use client";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuItems } from "@/constants/MenuItems";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const [isFooterShowing, setIsFooterShowing] = useState(false);
  const [email,setEmail]=useState("");
  const [isSubmited,setIsSubmited] = useState(false)
  useEffect(() => {
    if (
      pathname === "/picture" ||
      pathname === "/contact" ||
      pathname === "/videos"  ||
      pathname === "/confirmaddress"||
      pathname === "/confirmshipping"||
      pathname === "/order/payment-success/:id"
    ) {
      setIsFooterShowing(false);
    } else {
      setIsFooterShowing(true);
    }
  }, []);
  const router = useRouter();

  return (
    <footer className={styles.footersection}>
      {/* footer top */}
      <div className={styles.footerTop}>
   
      <div className={styles.stayUpdatedHeading}>SIGN UP TO GET THE LATEST ON SALES, NEW RELEASES AND MORE…</div>
      <div className={styles.inputField}>
        <input type="email" id="email" name="stayUpdated" disabled={isSubmited} placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button className={styles.submit} onClick={() => setIsSubmited(true)}>{isSubmited?"SUBMITED":"SUBMIT"}</button>
      </div>
      </div>

      {/* footer middle */}
      <div
        className={styles.footer}
        style={!isFooterShowing ? { display: "none" } : { display: "flex" }}
      >
        {/* <a href="#" className={` ${styles.karwaan}`} style={{textDecoration:"none",color:"black"}}>Karwaan Films Private Limited</a> */}
        {/* social media */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.youtube.com/@Karwaanfilms"
            target="_blank"
            className={styles.linkText}
          >
            <SmartDisplayRoundedIcon  className={styles.socialIcon} />
          </a>

          <a
            href="https://www.linkedin.com/company/karwaanfilms/"
            target="_blank"
            className={styles.linkText}
          >
            <LinkedInIcon   className={styles.socialIcon}/>
          </a>

          <a
            href="https://instagram.com/karwaan.films"
            target="_blank"
            className={styles.linkText}
          >
            <InstagramIcon className={styles.socialIcon} />
          </a>

          <a
            href="https://wa.me/919899009001"
            target="_blank"
            className={styles.linkText}
          >
            <WhatsAppIcon className={styles.socialIcon}/>
          </a>
        </div>
        {/* menu */}
        <ul className={styles.menuOptions}>
          {MenuItems.map((menuItem, index) => {
            if (index % 2 === 0) {
             
              return (
                <li
                  key={index}
                  style={ { color: "black" } }
                  onClick={() => {
                    menuItem.route && router.push(menuItem.route);
                  }}
                >
                  <span className={styles.menuItem}>{menuItem.text}</span>
                </li>
              );
            } else {
              return (
                <li key={index} className={`${styles.forwardSlash}`}>
                  /
                </li>
              );
            }
          })}
        </ul>
      </div>
      {/* footer Bottom */}
      <div
        className={styles.footerBottom}
        style={!isFooterShowing ? { display: "none" } : { display: "flex" }}
      >
        {/*  developed by */}
        <a
          href="/"
          className={` ${styles.karwaan}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          Karwaan Films Private Limited
        </a>

        {/*  Back To Top */}
        <div
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Back To Top
        </div>
      </div>
    </footer>
  );
}
