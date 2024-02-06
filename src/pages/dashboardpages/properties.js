import Header from "../../component/dashheader";
function Properties() {
    return (
      <div className="App">
     <Header /> 
     <section>


<div className="container-fluid artical-cont "  style={{'maxWidth': '1440px'}}>
    <div className="row artical1">
        <div className="tab-btns d-flex justify-content-center my-4"> <button className="btn-5 p-tab">Properties
                (120)</button>
            <button className="btn-5 p-tab2 p-2">My investments (3)</button>
        </div>
        <div className="tf-sec d-flex flex-direction-column">
            <div className="tab d-flex flex-direction-column ">
                <button className="tablinks tab">Price range<span><img src="assets/icons/1.svg"
                            alt="" /></span></button>
                <button className="tablinks tab">Type<span><img src="assets/icons/2.svg" alt="" /></span></button>
                <button className="tablinks tab">Region<span><img src="assets/icons/2.svg" alt="" /></span></button>
                <button className="tablinks tab">Energy<span><img src="assets/icons/2.svg" alt="" /></span></button>
                <button className="tablinks tab">Advanced filter<span><img src="assets/icons/5.svg"
                            alt="" /></span></button>
            </div>
            <div className="icon-input d-flex justify-content-center">
                <input className="icon-input__text-field" type="text" placeholder="Search for property" />
                <i className="fa fa-search"></i>
            </div>
        </div>
        <div className="tf2-sec d-flex flex-direction-column">
            <div className="m-text1">Applied filter :</div>
            <div className="m-text">United Kingdom <img src="assets/icons/Icon.svg" alt="" /></div>
            <div className="m-text">Price : 12k € - 320 € <img src="assets/icons/Icon.svg" alt="" /></div>
            <div className="m-text">Price : 12k € - 320 € <img src="assets/icons/Icon.svg" alt="" /></div>
            <div className="m-text-i"><img src="assets/icons/Button.svg" alt="" /></div>

        </div>
        <div>
            <div className="result-text d-flex">
                <p>Showing<strong>115 property</strong> that match your search criteria</p>
            </div>
        </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col">
            <div className="card">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"> <img src="assets/icons/slider-active.svg" alt="" /></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card2">
                <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card3">
                <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card4">
                <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card5">
                <div id="carouselExampleIndicators5" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card6">
                <div id="carouselExampleIndicators6" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                Friendly</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                    src="assets/icons/up.svg " alt="" />0.2% </button>

                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                    alt="" />Greenification</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>        
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                            <button className="image-btn-3"><img src="assets/icons/stars.svg"
                            alt="" />Featured</button>
                            <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                            src="assets/icons/up.svg " alt="" />0.2% </button>
                        </div>
                    </div>
                    
                </div>



                <div className="card-body">
                    <p className="global-ct">Without credit</p>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
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
                            <div className="amount">143K £</div>
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
                        <div className="card-inner3 my-4 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="row justify-content-center mb-5">
        <button className="bw-learn btn btn-show" type="search">Show more </button>
    </div>
</div>


</section>

    </div>

    
   
    );
  }
  
  export default Properties;