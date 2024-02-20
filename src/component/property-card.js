import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Propertycard({index}) {
    var settings = {
        dots: true,
        autoplay:false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className="col">
    <div className="col invest-card-comp">
    <div className="card">
    
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicars">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <Slider {...settings}>
                        <div className="carousel-item ">
                            <img src={index.img} className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                               
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src={index.img} className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src={index.img} className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                        </Slider>
                    </div>
                    
                </div>



                <div className="card-body">
                    <div className="p2s d-flex">
                    <p className="global-ct">Without credit</p>
                    <p className="global-ct2"> <img src="assets/icons/tick.svg" alt="" />Contributed</p>
                </div>
                    <h5 className="p-card-title">{index.title}</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                    {index.address}
                    </p>
                    
                    <div className="inline-svg-icons d-flex">
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                      </div>
                    <div>
                        <div className="card-inner">
                            <div className="amount">{index.price}</div>
                            <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />{index.remaining}
                            </div>

                        </div>
                        <div className="card-inner2">
                            <div className="amount-text">{index.conversion}</div>
                            <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />{index.investors}</div>

                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>{index.profit}</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>{index.return}</p>
                            </div>


                        </div>
                    </div>
                </div>
                </div>  
            </div>
            </div>
    );
 }
 
