// components/InstagramWidget.tsx
'use client'
import React, { useEffect } from 'react';
import styles from './style.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
const InstagramWidget: React.FC = () => {
  // useEffect(() => {
  //   // EmbedSocial script
  //   (function(d, s, id) {
  //     var js;
  //     if (d.getElementById(id)) {
  //       return;
  //     }
  //     js = d.createElement(s);
  //     js.id = id;
  //     // js.src = 'https://embedsocial.com/cdn/ht.js';
  //     // Narrow down the type to HTMLScriptElement
  //     const scriptElement = js as HTMLScriptElement;
  //     // Accessing src property safely
  //     const scriptSrc = scriptElement.src;
  //     d.getElementsByTagName('head')[0].appendChild(js);
  //   })(document, 'script', 'EmbedSocialHashtagScript');
  // }, []);

  return (
    // <div className="embedsocial-hashtag" data-ref="218878fa5b19ed9f8638b94316c7dcb2edf5c752">
    // </div>
    <div className={styles.instagramWidget}>
      {/* 1st image */}
      <a className={styles.instaPost} target='_blank' href='https://www.instagram.com/p/B3wzEYvniIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
    <div className={styles.instagramHover}>
    <div className={styles.instagramLogo}><InstagramIcon/> </div>
    <div className={styles.instagramCaption}>Morning in Varanasi...</div>
    </div>
        <img src="https://karwaan.b-cdn.net/gallery/Cityscape6.jpg" alt="not found" /> 
      
        </a>
      {/* 2snd image */}
      <a className={styles.instaPost} target='_blank' href='https://www.instagram.com/p/B-WKKUzHdf5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
    <div className={styles.instagramHover}>
    <div className={styles.instagramLogo}><InstagramIcon/> </div>
    <div className={styles.instagramCaption}>Good morning from Bhutan.</div>
    </div>
        <img src="https://karwaan.b-cdn.net/gallery/Cityscape9.jpg" alt="not found" /> 
        </a>
      {/* 3rd image */}
      <a className={styles.instaPost} target='_blank' href='https://www.instagram.com/p/B_WyRShHGCn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
    <div className={styles.instagramHover}>
    <div className={styles.instagramLogo}><InstagramIcon/> </div>
    <div className={styles.instagramCaption}>Spiritual City Varanasi 💓</div>
        </div>
        <img src="https://karwaan.b-cdn.net/gallery/Black2.jpg" alt="not found" /> 
        </a>
      {/* 4th image */}
      <a className={styles.instaPost} target='_blank' href='https://www.instagram.com/p/B-bZaszn7kS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
    <div className={styles.instagramHover}>
    <div className={styles.instagramLogo}><InstagramIcon/> </div>
    <div className={styles.instagramCaption}>Hornbill festival Nagaland 2019.</div>
        </div>
        <img src="https://karwaan.b-cdn.net/gallery/Black4.jpg" alt="not found" /> 
        </a>
      {/* 5st image */}
      <a className={styles.instaPost} target='_blank' href='https://www.instagram.com/p/Bv4FFLAAJaW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
    <div className={styles.instagramHover}>
    <div className={styles.instagramLogo}><InstagramIcon/> </div>
    <div className={styles.instagramCaption}>Chandra Taal, Spiti Valley, Himachal Pradesh.</div>
    </div>
        <img src="https://karwaan.b-cdn.net/gallery/Cityscape5.jpg" alt="not found" /> 
        </a>
    </div>
  );
};

export default InstagramWidget;
