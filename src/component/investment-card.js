import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Investmentcard({index}) {
    var settings = {
        dots: true,
        infinite: true,
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
                    
                    <div>
                        <div className="card-inner invi-vd">
                            <div className="amount">{index.price}</div>
                            <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                            </div>

                        </div>
                        <div className="card-inner2">
                            <div className="amount-text">Converted to: 1500 Tannits</div>
                            <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>

                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="card-inner3 invi my-4 ">
                            <div className="profit d-flex pf2">Invested 
                                <p>{index.invest}</p>
                            </div>
                            <div className="returned d-flex rf2 ">Income received 
                                <p className="g-text">{index.income}</p>
                            </div>


                        </div>
                    </div>
                </div>
               
            </div>
            </div>
            </div>
    );
 }
 
