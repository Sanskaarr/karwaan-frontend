"use client"
import { useState } from 'react';
import styles from './Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { MenuItems } from "@/constants/MenuItems";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function navbar({ changeHomeTheme }: { changeHomeTheme: (isDark: boolean) => void }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    return (
        <>
            <nav className={styles.navbar} style={(pathname === "/" || pathname === "/contact" || pathname === "/user") ? { backgroundColor: "transparent" } : { backgroundColor: "white" }}>

                <div className={`${styles.contact} ${styles.uppercase} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : (pathname === "/contact" || pathname === "/user") ? { visibility: "hidden", pointerEvents: "none" } : { color: "black" }}>Contact us</div>
                {/* if menu is close than this  */}
                {!isMenuOpen && <div className={styles.rightNav}>
                    <div className={`${styles.logoDiv}${styles.hover}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(true);
                        }}>
                        <a onClick={() => router.push("/")} style={pathname === "/" ? { color: "white" } : { display: "none" }} >
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={styles.logoImage} />
                        </a>
                    </div>
                    <div className={`${styles.closeMenu} ${styles.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            // changeHomeTheme(true);
                        }}>
                        <div className={`${styles.menu} ${styles.uppercase} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }}>menu </div>
                        <MenuRoundedIcon className={`${styles.menuIcon} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }} />
                    </div>
                    <div className={styles.user} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>user
                        <AccountCircleOutlinedIcon className={styles.userLogo} />
                    </div>

                </div>}
                {/* if menu is open */}
                {isMenuOpen && <div className={styles.rightNav}>

                    <div className={`${styles.openMenu} ${styles.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(false);
                        }}>

                        <ul className={`${styles.menuOptions} ${styles.capitalize}`}>
                            {MenuItems.map((menuItem) => {

                                return (<>
                                    <li style={pathname === menuItem.route ? { color: "white", pointerEvents: "none" } : { color: "gray" }}
                                        className={styles.menuItem} onClick={() => { router.push(menuItem.route) }}>{menuItem.text}</li>
                                    <li className={`${styles.forwardSlash}`}  >/</li>
                                </>
                                )
                            })}

                        </ul>
                        <CloseOutlinedIcon className={`${styles.crossIcon} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }} />
                    </div>
                    <div className={styles.user} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>user</div>

                </div>}
            </nav>
            <div style={isUserMenuOpen ? { display: "flex" } : { display: 'none' }} className={styles.userSetting}>
                <div className={styles.userSettingCross} ><CloseOutlinedIcon className={styles.userSettingClose} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} /> <span> User Setting</span></div>
                <ul className={styles.userSettingOptions}>
                    <li className={styles.userSettingSignUp}>Sign Up</li>
                    <li className={styles.userSettingSignIn}>Sign In</li>
                    <li className={styles.userSettingUpdateInfo}>Update Info</li>
                    <li className={styles.userSettingUpdatePassword}>Update Password</li>
                    <li className={styles.userSettingLogOut}>Log Out</li>
                </ul>
            </div>
        </>
    )
}


