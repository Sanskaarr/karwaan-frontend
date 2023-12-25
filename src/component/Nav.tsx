
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Nav() {
  return (

<div className="main-banner">
  

    <div id="mySidenav" className="sidenav animate__animated">
        <nav className="navbar navbar-expand-lg navbar-custom navbar-dark" style={{transition:"all 0.3s ease-in-out"}}>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 animate__animated animate__delay-1s">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item nav-item-seprator">/</li>
                    <li className="nav-item">
                        <a href="gallery.html" className="nav-link">Picture</a>
                    </li>
                    <li className="nav-item nav-item-seprator">/</li>
                    <li className="nav-item">
                        <a href="video.html" className="nav-link" id="navbar-video">Videos</a>
                    </li>
                    <li className="nav-item nav-item-seprator">/</li>
                    <li className="nav-item">
                        <a href="client.html" className="nav-link">Clients</a>
                    </li>
                    <li className="nav-item nav-item-seprator">/</li>
                    <li className="nav-item">
                        <a href="about.html" className="nav-link">About</a>
                    <li className="nav-item nav-item-seprator">/</li>
                    </li>
                    <li className="nav-item">
                        <a href="shop.html" className="nav-link">Shop</a>
                    </li>
                    
                    <li className="nav-item nav-item-seprator">/</li>
                    <li className="nav-item">
                        <a href="contact.html" className="nav-link">Contact</a>
                    </li>
                    <li>
                        <a href="" id="right-menu-overlay-close-btn" className="closebtn">&times;</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div className="videosection">
        <video id="layer1-bgvideo" className="bgvideo mobile-hidden" autoPlay muted loop>
            <source src="https://karwaan.b-cdn.net/Front/home1.webm" type="video/webm" />
            Your browser does not support HTML5 video.
        </video>
        <video id="layer1-bgvideo" className="mobile-show" autoPlay muted loop>
            <source src="https://trekmunk.b-cdn.net/insanetraveller/videos/home_mobile.webm" type="video/webm" />
            Your browser does not support HTML5 video.
        </video>
    </div>

    <div id="layer2-menu" className="content">
        <nav className="navbar navbar-expand-lg navbar-custom navbar-dark" id="mainheaderid">
            <a className="navbar-brand uppercase mobilecontact" href="contact.html"
                style={{fontSize:" 20px",paddingBottom: "1.2rem"}}>Contact us</a>
            <div className="collapse navbar-collapse" id="navbarToggler-right-home-menu" style={{display: "block"}}>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mobile-hidden">
                    <li className="nav-item logodiv">
                        <a id="logo-btn" className="uppercase" href="index.html">
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className="logoimage navbar-brand"
                                style={{height:" 80px", marginTop: "-13px" }}/>
                        </a>
                    </li>
                    <li className="nav-item active mt-15px">
                        <a id="right-home-btn" className="navbar-brand uppercase"
                            style={{fontSize: "20px", paddingBottom:" 1.2rem !important",top: "20px"}} href="#">Menu <span className="">
                                <MenuRoundedIcon/></span></a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 mobile-show">
                    <li className="nav-item active">
                        <a id="logo-btn" className="uppercase" href="index.html">
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" style={{marginTop: "-7px", height:"70px", marginRight: "0rem"}} className="logoimage navbar-brand" />
                        </a>
                        <a id="right-home-btn" className="navbar-brand uppercase" style={{marginRight: "0rem",paddingBottom: "0.9rem !important", marginTop: "0px"}} href="#">
                         <span className=""><i className="fa fa-bars"></i></span></a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <div className="container-fluid menu-div mobile-hidden">
            <div id="growContainer">
                <div className="row height-100-per" style={{height: "110%"}}>
                    <div className="col-md-4 col-sm-12 grow border-right padding-0" id="video-col" style={{height: "auto"}}>
                        <div className="height-100-per">
                            <video id="video-section" autoPlay muted loop width="100%" height="100%" style={{opacity: "0"}}>
                                <source src="https://karwaan.b-cdn.net/Front/motion%20(1).webm" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>

                            <div className="link uppercase" id="videos-link">
                                <span className="left-line"></span><a href="javascript:;"
                                // onclick="window.location.href='video.html'"
                                 className="color-f1f1f1">Videos</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 padding-0 border-right" id="blog-col" style={{height: "auto"}}>
                        <div className="height-100-per">
                            <div>
                                <span className="top-line"></span>
                                <div className="aboutuslink uppercase" id="aboutus-link">
                                    <a href="javascript:;"
                                    //  onclick="window.location.href='about.html'"
                                        className="color-f1f1f1">About Us</a>
                                </div>
                                <div id="aboutus-section" className="aboutus-cls" style={{display: "none"}}>
                                    <h4 style={{paddingTop:" 110px", paddingLeft: "20px"}}></h4>
                                    <div className="row text-center about-us-image">
                                        <div className="col-md-6 padding-0 pl-50 animate__animated animate__delay-2s"
                                            // onclick="window.location.href='about.html'"
                                            >
                                            <a href="javascript:;">
                                                <img id="harshitpic" className="pic animate__animated animate__delay-2s"
                                                    src="https://karwaan.b-cdn.net/about/Harshit.png" />
                                            </a>
                                        </div>
                                        <div className="col-md-6 padding-0 pr-50 animate__animated animate__delay-2s"
                                            // onclick="window.location.href='about.html'"
                                            >
                                            <a href="javascript:;">
                                                <img id="oshankpic" className="pic animate__animated animate__delay-2s"
                                                    src="https://karwaan.b-cdn.net/about/Oshaank.png" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-15 btn-row">
                                        <div className="col-md-12 text-center">
                                            Our story traces back to our childhood when happiness
                                            meant quests to find hidden treasures in our vicinity.
                                        </div>
                                    </div>
                                    <div className="row mt-15 mb-20 btn-row">
                                        <div className="col-md-12 text-center">
                                            <a className="btn btn-dark" href="javascript:;"
                                                // onclick="window.location.href='about.html'"
                                                >Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 grow padding-0" id="picture-col" style={{height: "auto"}}>
                        <div className="height-100-per">
                            <div className="image-slider dn">
                                <ul id="slider">
                                    <li className="slides" style={{backgroundImage: "url('https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_1.jpg')"}}></li>
                                    <li className="slides" style={{backgroundImage: "url('https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_3.jpg')"}}></li>
                                    <li className="slides" style={{backgroundImage: "url('https://trekmunk.b-cdn.net/insanetraveller/images/home_stills_preview_4.jpg')"}}></li>
                                </ul>

                                <div id="dot"></div>
                            </div>
                            <div className="link uppercase" id="picture-link">
                                <a href="javascript:;" 
                                // onclick="window.location.href='gallery.html'"
                                    className="color-f1f1f1">Pictures</a>
                                <span className="right-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid mobile-show mobilecontainer">
            <div className="row bb-1px mainrow">
                <div className="col-md-12 text-center" style={{alignSelf: "center"}}>
                    <a href="gallery.html" className="color-white homehover fs-28px">Pictures</a>
                </div>
            </div>
            <div className="row bb-1px mainrow">
                <div className="col-md-12 text-center" style={{alignSelf: "center"}}>
                    <a href="video.html" className="color-white homehover fs-28px">Videos</a>
                </div>
            </div>
            <div className="row mainrow">
                <div className="col-md-12 text-center" style={{alignSelf: "center"}}>
                    <a href="about.html" className="color-white homehover fs-28px">About Us</a>
                </div>
            </div>
        </div>
        <div className="homepage_video_content mobile-hidden" id="videographydiv"></div>
        <div className="homepage_picture_content mobile-hidden" id="picturediv"></div>
        <div className="homepage_about_content mobile-hidden" id="aboutdiv"></div>
        <div className="homepage_blog_content mobile-hidden" id="blogdiv"></div>
    </div>


</div> 

  )
}


