import Header from "../../component/dashheader";
function myinvestment() {
    return (
      <div className="App">
         <section>
         <Header />

<div className="container-fluid artical-cont " style={{'maxWidth': '1440px'}}>
    <div className="row artical1">
        <div className="tab-btns d-flex justify-content-center my-4"> <button className="btn-5 p-tab2">Properties
                (120)</button>
            <button className="btn-5 p-tab p-2">My investments (3)</button>
        </div>
        <div className="show-res my-">
            <div className="result-text d-flex">
                <p>Showing<strong>3 Properties</strong> </p>
            </div>
            <div className="date-btn">Sort by (Date) <img src="assets/icons/date.svg" alt="" /></div>
        </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col">
            <div className="card">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
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
                    <div className="p2s d-flex">
                    <p className="global-ct">Without credit</p>
                    <p className="global-ct2"> <img src="assets/icons/tick.svg" alt="" />Contributed</p>
                </div>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
                    </p>
                    
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
                        <div className="card-inner3 invi my-4 ">
                            <div className="profit d-flex pf2">Invested 
                                <p>40 Tannit</p>
                            </div>
                            <div className="returned d-flex rf2 ">Income received 
                                <p className="g-text">1.45£</p>
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
                    <div className="p2s d-flex">
                    <p className="global-ct">Without credit</p>
                    <p className="global-ct2"> <img src="assets/icons/tick.svg" alt="" />Contributed</p>
                </div>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
                    </p>
                    
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
                        <div className="card-inner3 invi my-4 ">
                            <div className="profit d-flex pf2">Invested 
                                <p>40 Tannit</p>
                            </div>
                            <div className="returned d-flex rf2 ">Income received 
                                <p className="g-text">1.45£</p>
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
                    <div className="p2s d-flex">
                    <p className="global-ct">Without credit</p>
                    <p className="global-ct2"> <img src="assets/icons/tick.svg" alt="" />Contributed</p>
                </div>
                    <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                    <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                        Orange street, United Kingdom 5012
                    </p>
                    
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
                        <div className="card-inner3 invi my-4 ">
                            <div className="profit d-flex pf2">Invested 
                                <p>40 Tannit</p>
                            </div>
                            <div className="returned d-flex rf2 ">Income received 
                                <p className="g-text">1.45£</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        

</section>
      </div>
    );
  }
  
  export default myinvestment;