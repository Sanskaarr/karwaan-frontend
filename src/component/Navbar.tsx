import Style from './Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function navbar() {
  return (

    <nav className={`${Style.navbar} ${Style.navbarExpandLg} ${Style.navbarCustom} ${Style.navbarDark}`} id="mainheaderid">
    <a className={`${Style.navbarBrand} ${Style.uppercase} ${Style.mobilecontact}`} href="contact.html"
        style={{fontSize:" 20px",paddingBottom: "1.2rem"}}>Contact us</a>
    <div className={`${Style.collapse} ${Style.navbarCollapse}` }id="navbarToggler-right-home-menu" style={{display: "block"}}>
        <ul className={`${Style.navbarNav} ${Style.msAuto} ${Style.mt2} ${Style.mtLg0} ${Style.mobileHidden}`}>
            <li className={`${Style.navItem} ${Style.logodiv}`}>
                <a id="logo-btn" className={Style.uppercase} href="index.html">
                    <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={`${Style.logoimage} ${Style.navbarBrand}`}
                        style={{height:" 80px", marginTop: "-13px",border:"5px solid black" }}/>
                </a>
            </li>
            <li className={`${Style.navItem} ${Style.active} ${Style.mt15px}`}>
                <a id="right-home-btn" className="navbar-brand uppercase"
                    style={{fontSize: "20px", paddingBottom:" 1.2rem !important",top: "20px"}} href="#">Menu <span className="">
                        <MenuRoundedIcon/></span></a>
            </li>
        </ul>
        <ul className={`${Style.navbarNav} ${Style.msAuto} ${Style.mt2} ${Style.mtLg0} ${Style.mobileShow}`}>
            <li className={`${Style.navItem} ${Style.active}`}>
                <a id="logo-btn" className={Style.uppercase} href="index.html">
                    <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" style={{marginTop: "-7px", height:"70px", marginRight: "0rem"}} className={`${Style.logoimage} ${Style.navbarBrand}`} />
                </a>
                <a id="right-home-btn" className={`${Style.navbarBrand} ${Style.uppercase} `}style={{marginRight: "0rem",paddingBottom: "0.9rem !important", marginTop: "0px"}} href="#">
                 <span className="">X</span></a>
            </li>
        </ul>
    </div>
</nav>
  )
}


