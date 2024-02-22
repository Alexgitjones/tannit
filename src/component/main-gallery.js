import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";


import  LightGallery  from "lightgallery/react/Lightgallery.es5";

import lgthumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

export default function Mgallery(){
    return(
        <div>
            <LightGallery
            speed={500}
            plugins={[lgthumbnail, lgZoom, lgAutoplay, lgVideo, lgShare, lgRotate]}>
        <a href='assets/images/g4.png'>
         <img
          alt='demo'
          src='assets/images/g4.png'
          />
       </a>
        <a href='assets/images/g2.png'>
         <img
          alt='demo'
          src='assets/images/g2.png'
          />
       </a>
        <a href='assets/images/g3.png'>
         <img
          alt='demo'
          src='assets/images/g3.png'
          />
       </a>
        <a href='assets/images/g1.png'>
         <img
          alt='demo'
          src='assets/images/g1.png'
          />
       </a>
       
        <a href='assets/images/g5.png'>
         <img
          alt='demo'
          src='assets/images/g5.png'
          />
       </a>
        <a href='assets/images/g6.png'>
         <img
          alt='demo'
          src='assets/images/g6.png'
          />
       </a>
            </LightGallery>
        </div>
    );
}

