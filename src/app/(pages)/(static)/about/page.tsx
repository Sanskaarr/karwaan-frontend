import styles from './style.module.css'

export default  function about() {

  return (
    <div className={styles.about}>
     <div className={`${styles.containerFluid} ${styles.plPr200px} ${styles.mt75px}`}>
        <div className={`${styles.row} ${styles.textRight}`}>
            <h1 style={{textAlign: "center"}}><b>About Karwaan</b></h1>
        </div>
        <div className={`${styles.row} ${styles.textCenter} ${styles.mobileHidden}`}>
            <div className={styles.colMd1}>
            </div>
            <div className={styles.colMd5}>
                <img src="https://karwaan.b-cdn.net/about/Harshit.png" style={{ height: "75%" }} />
            </div>
            <div className={styles.colMd5}>
                <img src="https://karwaan.b-cdn.net/about/Oshaank.png" style={{ height: "75%;" }}/>
            </div>
            {/* <!-- <div className="col-md-1"
                style="writing-mode: vertical-rl;text-orientation: mixed;transform: rotate(180deg);top: -147px;">
                even when the world sleeps, we travel
            </div> --> */}
        </div>
        <div className={`${styles.row} ${styles.mobileShow}`}>
            <img src="https://karwaan.b-cdn.net/about/aboutusharshit.png" alt="" />
        </div>
        <div className="row mt-120px" style={{textAlign: "justify"}}>
            Karwaan is the brainchild of our Cofounders; Oshank Soni and Harshit Patel who morphed their dream into a reality in 2018. They travelled across the length and breadth of our country curating experiences and stories in form of picturesque Photos and dreamy Videos.
        </div>
        <div className="row mt-30" style={{textAlign: "justify"}}>
            Soon, what started as merely a passion, attracted organisations and individuals who wanted to showcase their products/services/experiences in the same limelight. Over the period of past four years, they have curated the content for their videos with utmost dedication. All the videos that they have brought to the platform, are shot with great effort, better equipment and even better cinematic scope. Their stories not only exhibit our knack for presenting unexplored and unsaid tales but also tap into some of the most pressing social issues.
        </div>
        <div className="row mt-30" style={{textAlign: "justify"}}>
            The team comes with expertise in human-centric documentaries, scripts, cinematography, and photography. Supported by a team of ethically driven individuals, authenticity is the keystone of all our content.
        </div>
    </div><br/><br/>
    <div className="mt-50">
        <div className="col-lg-12 text-center pb-20">
            <h2>IN MEDIA</h2>
        </div>
        <section className="slider testimonials-section mt-50 h-50">
            <div className="text-center">
                <img src="https://karwaan.b-cdn.net/about/Better_India.png" alt="" className=" ng-img" />
                <h6 className="review">"aside from doing work that they enjoyed, also wanted to promote tourism in new
                    areas, generate income for the locals, promote sustainability, and reduce pressure on the mountain
                    environment."</h6>
            </div>
            <div className="text-center">
                <img src="https://karwaan.b-cdn.net/about/download_white.png" alt="" className=" ng-img" />
                <h6 className="review">"The team also escorts doctors to high-altitude regions to treat the less fortunate
                    residents"</h6>
            </div>
        </section>

        <div className="container-fluid mt-50px">
            <div className="row text-center mt-50px">
                <h1>Our Work</h1>
            </div>
            <div className={`${styles.row} ${styles.textCenter} ${styles.mt50}}`}>
                <div className={`${styles.colLg6} ${styles.colXs6} ${styles.p0} ${styles.imgContainer}`}>
                    <a href="video.html"className={`${styles.colorWhite} ${styles.imagehover}`}>
                        <div className={`${styles.mh100} ${styles.b1px} img-container`}>
                            <img src="https://karwaan.b-cdn.net/about/RightVideosHarshit.jpg" alt="" className="w-100-p image" width="150"/>
                            <div className='img-info'>
                                Videos
                            </div>
                        </div>
                    </a>
                </div>

                <div className={`${styles.colLg6} ${styles.colXs6} ${styles.p0} ${styles.imgContainer}`}>
                    <a href="gallery.html" className={`${styles.colorWhite} ${styles.imagehover}`}>
                        <div className="mh-100 b-1px ">
                            <img src="https://karwaan.b-cdn.net/about/LeftPhotosOshank.jpg" alt="" className="w-100-p image" width="150"/>
                            <div className={`${styles.imgInfo}`}>
                                Photographs
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
