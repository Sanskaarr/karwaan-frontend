"use client"
import { useState } from 'react';
import style from './Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { MenuItems } from "@/constants/MenuItems";
export default function navbar({ changeHomeTheme }: { changeHomeTheme: (isDark: boolean) => void }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            <nav className={style.navbar} style={(pathname==="/"||pathname==="/contact"||pathname==="/user")?{backgroundColor:"transparent"}:{backgroundColor:"white"}}>

                <div className={`${style.contact} ${style.uppercase} ${style.hover}`} style={pathname==="/"?{color:"white"}:(pathname==="/contact"||pathname==="/user")?{visibility:"hidden",pointerEvents:"none"}:{color:"black"}}>Contact us</div>
                {/* if menu is close than this  */}
                {!isMenuOpen && <div className={style.rightNav}>
                    <div className={`${style.logoDiv}${style.hover}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(true);
                        }}>
                        <a onClick={() => router.push("/")}  style={pathname==="/"?{color:"white"}:{display:"none"}} >
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={style.logoImage} />
                        </a>
                    </div>
                    <div className={`${style.closeMenu} ${style.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            // changeHomeTheme(true);
                        }}>
                        <div className={`${style.menu} ${style.uppercase} ${style.hover}`}  style={pathname==="/"?{color:"white"}:{color:"black"}}>menu </div>
                        <MenuRoundedIcon className={`${style.menuIcon} ${style.hover}`} style={pathname==="/"?{color:"white"}:{color:"black"}} />
                    </div>
                </div>}
                {/* if menu is open */}
                {isMenuOpen && <div className={style.rightNav}>

                    <div className={`${style.openMenu} ${style.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(false);
                        }}>

                        <ul className={`${style.menuOptions} ${style.capitalize}`}>
                            {MenuItems.map((menuItem) => {

                                return (<>
                                    <li style={pathname === menuItem.route ? { color: "white", pointerEvents: "none" } : { color: "gray" }}
                                        className={style.menuItem} onClick={() => { router.push(menuItem.route) }}>{menuItem.text}</li>
                                    <li className={`${style.forwardSlash}`}  >/</li>
                                </>
                                )
                            })}
                         
                        </ul>
                        <CloseOutlinedIcon className={`${style.crossIcon} ${style.hover}`}  style={pathname==="/"?{color:"white"}:{color:"black"}} />
                    </div>
                </div>}
            </nav></>
    )
}


