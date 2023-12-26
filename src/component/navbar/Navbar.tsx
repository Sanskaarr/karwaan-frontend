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
    const [page, setPage] = useState<string>(pathname);
    console.log(pathname);
    type customString = String;
    interface customString2 {
        customString: String
    }
    return (
        <>
            <nav className={style.navbar}>

                <div className={`${style.contact} ${style.uppercase} ${style.hover}`}>Contact us</div>
                {/* if menu is close than this  */}
                {!isMenuOpen && <div className={style.rightNav}>
                    <div className={`${style.logoDiv}${style.hover}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(true);
                        }}>
                        <a onClick={() => router.push("/")} >
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={style.logoImage} />
                        </a>
                    </div>
                    <div className={`${style.closeMenu} ${style.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            // changeHomeTheme(true);
                        }}>
                        <div className={`${style.menu} ${style.uppercase} ${style.hover}`}>menu </div>
                        <MenuRoundedIcon className={`${style.menuIcon} ${style.hover}`} />
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
                        <CloseOutlinedIcon className={`${style.crossIcon} ${style.hover}`} />
                    </div>
                </div>}
            </nav></>
    )
}


