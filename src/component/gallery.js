import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  useEffect(() => {
    if (sliderForRef.current && sliderNavRef.current) {
      sliderForRef.current.slickGoTo(0); // Ensure main slider starts from first slide
      sliderNavRef.current.slickGoTo(0); // Ensure thumbnail slider starts from first slide
    }
  }, []);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: sliderNavRef.current // Synchronize main slider with thumbnail slider
  };

  const thumbnailSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current, // Synchronize thumbnail slider with main slider
    dots: true,
    centerMode: true,
    focusOnSelect: true
  };

  return (
    <div>
      <Slider {...mainSliderSettings} ref={sliderForRef} className="slider-for">
        <div><img src='assets/images/g1.png' alt="Image 1" /></div>
        <div><img src='assets/images/g2.png' alt="Image 2" /></div>
        <div><img src='assets/images/g3.png' alt="Image 3" /></div>
      </Slider>
      <Slider {...thumbnailSliderSettings} ref={sliderNavRef} className="slider-nav">
        <div><img src='assets/images/g1.png' alt="Thumbnail 1" /></div>
        <div><img src='assets/images/g2.png' alt="Thumbnail 2" /></div>
        <div><img src='assets/images/g3.png' alt="Thumbnail 3" /></div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
