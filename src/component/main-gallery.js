import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-video.css";
import lgThumbnail from 'lightgallery/plugins/thumbnail';

    export default function  Mgallery  ()  {
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      detail.instance.openGallery();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer('aaa');
    }
  }, []);

  return (
    <div className="App gallery-cont-wrapper">
     
      <div className='sec-wrapper-gallery'
        style={{
          height: 'auto',
          position: 'static',
        }}
        ref={containerRef}
      ></div>
      <div>
        <LightGallery
          container={containerRef.current}
          onInit={onInit}
          plugins={[lgZoom, lgThumbnail, lgAutoplay, lgVideo]}
          closable={true}
          showMaximizeIcon={true}
          slideDelay={200}
          thumbWidth={133}
          thumbHeight={'110px'}
          thumbMargin={24}
          dynamic={true}
          dynamicEl={[
            {
              src: 'assets/images/g4.png',
              responsive:
                'assets/images/g4.png',
              thumb:
                'assets/images/g4.png',
            },
            {
              src: 'assets/images/g2.png',
              responsive:
                'assets/images/g2.png',
              thumb:
                'assets/images/g2.png',
            },
            {
              src: 'assets/images/g3.png',
              responsive:
                'assets/images/g3.png',
              thumb:
                'assets/images/g3.png',
            },
            {
              src: 'assets/images/g1.png',
              responsive:
                'assets/images/g1.png',
              thumb:
                'assets/images/g1.png',
            },
            {
              src: 'assets/images/g5.png',
              responsive:
                'assets/images/g5.png',
              thumb:
                'assets/images/g5.png',
            },
            {
              src: 'assets/images/g6.png',
              responsive:
                'assets/images/g6.png',
              thumb:
                'assets/images/g6.png',
            },
            
            // Add more dynamic elements as needed
          ]}
          hash={false}
          elementClassNames={'inline-gallery-container'}
        ></LightGallery>
      </div>
    </div>
  );
};
