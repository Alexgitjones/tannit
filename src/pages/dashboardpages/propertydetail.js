import Header from "../../component/dashheader";
import Range from "../../component/range";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

    const propertydetail = () => {
        const settings = {
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };

      

    return (
      <div className="App">
        <Header /> 
        <section className="below-main">
        <div className="container-fluid artical-cont " style={{'maxWidth': '1440px'}}>
            <div className="row artical2 d-flex ">
                <div className="tab-btns2 d-flex  my-1">
                    <div className="top-head"><img src="assets/icons/Iconleft.svg" alt="/" /> Standpoint Tower A Downtown</div>
                    <div><button className="btn-5 tb-2 p-2"><img src="assets/icons/heart.svg" alt="/" /></button>
                        <button className="btn-5 tb-2 p-2"><img src="assets/icons/share.svg" alt="/" /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
      <div className="container fullw-li">
        <Slider {...settings}>
          <div className="list-group-item"><span>£921</span> Rental income</div>
          <div className="list-group-item"><span>6.5%</span> Gross yield</div>
          <div className="list-group-item"><span>£42.500</span> Minimum deposit</div>
          <div className="list-group-item"><span>8.5%</span> Rental growth</div>
          <div className="list-group-item"><span>3.0%</span> Cap growth</div>
          <div className="list-group-item"><span>£921</span> Rental income</div>
          <div className="list-group-item"><span>6.5%</span> Gross yield</div>
          <div className="list-group-item"><span>£42.500</span> Minimum deposit</div>
          <div className="list-group-item"><span>8.5%</span> Rental growth</div>
          <div className="list-group-item"><span>3.0%</span> Cap growth</div>
        </Slider>
      </div>
    </section>
    <div className="container-fluid artical-cont " style={{'maxWidth': '1440px'}}>

    <div className="row">
            <div className="col-sm-8 p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 img-width img-col d-flex justify-content-center mb-3"><img
                                src="assets/images/Imag2.png" alt="/" /></div>
                        <div className="col-lg-6 img-width img-col d-flex justify-content-center mb-3"><img
                                src="assets/images/Imag2.png" alt="/" /></div>
                        <div className="w-100"></div>
                        <div className="col-lg-6 img-width img-col d-flex justify-content-center "><img
                                src="assets/images/Imag3.png" alt="/" /></div>
                        <div className="col img-col bt-box">
                            <button className="img-btn">
                                <img src="assets/icons/gallery.svg" alt="/" />
                                All 12 photos
                            </button>
                            <button className="img-btn">
                                <img src="assets/icons/360.svg" alt="/" />Virtual tour
                            </button>

                        </div>
                    </div>
                </div>
                    <div className="row next-row my-4">
                         <div className="tabs-section d-flex justify-content-start pdp-page" >
                          <ul className="nav nav-tabs d-flex justify-content-start pdp-tab" id="myTab" role="tablist">
                            <li className="nav-item new-ptab" role="presentation">
                              <button className="nav-link active" id="General-tab" data-bs-toggle="tab" data-bs-target="#General"
                                type="button" role="tab" aria-controls="General" aria-selected="true">General</button>
                            </li>
                            <li className="nav-item new-ptab" role="presentation">
                              <button className="nav-link" id="Sustainability-tab" data-bs-toggle="tab" data-bs-target="#Sustainability" type="button"
                                role="tab" aria-controls="Sustainability" aria-selected="false">Sustainability</button>
                            </li>
                            <li className="nav-item  new-ptab" role="presentation">
                              <button className="nav-link" id="Place-tab" data-bs-toggle="tab" data-bs-target="#Place" type="button"
                                role="tab" aria-controls="Place" aria-selected="false">Place</button>
                            </li>
                            <li className="nav-item new-ptab" role="presentation">
                              <button className="nav-link" id="Finance-tab" data-bs-toggle="tab" data-bs-target="#Finance" type="button"
                                role="tab" aria-controls="Finance" aria-selected="false">Finance</button>
                            </li>
                            
                          </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade active show " id="General" role="tabpanel" aria-labelledby="General-tab">
                        <div className="tab-inner">
                            <h1>General</h1>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="/" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <h5>Description</h5>
                            <p>Lorem ipsum dolor sit amet consectetur. Ut urna pharetra sit vitae ut ac. Non cursus nec
                                vel metus nibh rutrum accumsan egestas vel. In mi dui tempor amet. Imperdiet elit
                                convallis viverra augue posuere amet pellentesque. Pellentesque molestie eget blandit
                                purus pulvinar fames viverra interdum varius. Elit aliquet viverra gravida aliquet amet.
                                Mollis sagittis purus sodales at diam lectus elit. Sed.</p>
                            <h4 className="blue-text">Show more</h4>
                        </div>
                        <div className="tab-inner2">
                            <h5>Property details</h5>
                            <div className="row">
                                <div className="col p-detail">
                                    <p>Lot area <span>200 sqft</span></p>
                                    <p>Number (lot) <span>16</span></p>
                                    <p>Target profitability<span>12.44%</span></p>
                                </div>
                                <div className="col p-detail ">
                                    <p>Returned income<span>5.44%</span></p>
                                    <p>Property valuation<span>1 264 188£</span></p>
                                </div>
                                <h5>Energy</h5>
                            </div>
                        </div>
                        <div className="tab-inner3">

                            <div className="row">
                                <div className="col ptab-detail">
                                    <p>Energy Class: <span>A</span></p>

                                </div>
                                <div className="col ptab-detail ">
                                    <p>Energy Index in KWh/m2a:<span>232</span></p>

                                </div>
                                <div className="color-tabs">
                                    <ul className="nav  nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item item1" role="presentation">
                                            <button className="nav-link active" id="pills-a-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-a" type="button" role="tab"
                                                aria-controls="pills-a" aria-selected="true">A</button>
                                        </li>
                                        <li className="nav-item item2" role="presentation">
                                            <button className="nav-link" id="pills-b-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-b" type="button" role="tab"
                                                aria-controls="pills-b" aria-selected="false">B</button>
                                        </li>
                                        <li className="nav-item item3" role="presentation">
                                            <button className="nav-link" id="pills-c-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-c" type="button" role="tab"
                                                aria-controls="pills-c" aria-selected="false">C</button>
                                        </li>
                                        <li className="nav-item item4" role="presentation">
                                            <button className="nav-link" id="pills-d-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-d" type="button" role="tab"
                                                aria-controls="pills-d" aria-selected="false">D</button>
                                        </li>
                                        <li className="nav-item item5" role="presentation">
                                            <button className="nav-link" id="pills-e-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-e" type="button" role="tab"
                                                aria-controls="pills-e" aria-selected="false">E</button>
                                        </li>
                                        <li className="nav-item item6" role="presentation">
                                            <button className="nav-link" id="pills-f-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-f" type="button" role="tab"
                                                aria-controls="pills-f" aria-selected="false">F</button>
                                        </li>
                                        <li className="nav-item item7" role="presentation">
                                            <button className="nav-link" id="pills-g-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-g" type="button" role="tab"
                                                aria-controls="pills-g" aria-selected="false">G</button>
                                        </li>
                                    </ul>
                                    <div className="color-tab-inner">
                                        <h3 className="cti-heading"><span><img src="assets/icons/Tag.svg" alt="/" /></span>Eco
                                            Friendly</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Ut urna pharetra sit vitae ut ac. Non
                                            cursus nec vel metus nibh rutrum accumsan egestas vel. In mi dui tempor
                                            amet. Imperdiet elit convallis viverra augue posuere amet pellentesque.
                                            Pellentesque molestie eget blandit purus pulvinar fames viverra interdum
                                            varius. Elit aliquet viverra gravida aliquet amet. Mollis sagittis purus
                                            sodales at diam lectus elit. Sed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="tab-pane fade" id="Sustainability" role="tabpanel" aria-labelledby="Sustainability-tab">
                        <div className="tab-inner4">

                            <div className="row  p-dr">
                                <h3> Sustainability</h3>
                                <div className="col-lg-12 performance-detail">
                                    <div className="sus-box">
                                        <h4 className="icon-head"><span><img src="assets/icons/ih.svg" alt="/" /></span> Sustainability performance</h4>
                                    </div>
                                    <div className="sus-box-detail">
                                        <h5>Insulation:</h5>
                                        <p>Excellent thermal insulation using modern materials and energy-efficient design.Heating and cooling: Centralized heating system and reversible air conditioning powered by a geothermal heat pump</p>
                                    </div>
                                    <div className="sus-box-detail">
                                        <h5>Lighting:</h5>
                                        <p>LED lighting in common areas and apartments</p>
                                    </div>
                                    <div className="sus-box-detail">
                                        <h5>Appliances:</h5>
                                        <p>Apartments are equipped with energy-efficient appliances such as low-energy refrigerators and washing machines</p>
                                    </div>
                                    <div className="sus-box-detail">
                                        <h5>Renewable energy</h5>
                                        <p>The building has solar panels on the roof for renewable electricity generation.</p>
                                    </div>
                                    <div className="sus-box-detail">
                                        <h5>Waste management:</h5>
                                        <p>Implementation of selective sorting and composting systems to reduce landfill waste.</p>
                                    </div>

                                </div>
                                <div className="col performance-detail ">
                                    <h3 className="ec-head">Estimation of energy consumption and greenhouse gas emissions:</h3>
                                    <p className="trick"> <img src="assets/icons/spark.svg" alt="/" />Energy consumption <span>50kWh/m² per year</span> </p>
                                    <p className="trick2"> <img src="assets/icons/spark2.svg" alt="/" />Greenhouse gas emissions <span>6 kg CO2/m² per year</span> </p>

                                </div>
                                <div className="col-lg-12 accordian-cont ">
                                    <h3 className="ec-head">Environmental features</h3>
                            
                            
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                             <span><img src="assets/icons/i1.svg" alt="/"  /></span> BREEAM Very good
                                            </button>
                                          </h2>
                                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                               <span><img src="assets/icons/i2.svg" alt="/"  /></span> Energy-efficient lighting
                                            </button>
                                          </h2>
                                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span><img src="assets/icons/i3.svg" alt="/"  /></span>Water saving devices
                                            </button>
                                          </h2>
                                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfour">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                                <span><img src="assets/icons/i4.svg" alt="/"  /></span>10 Charging spaces for electric vehicles
                                              </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                                <span><img src="assets/icons/i5.svg" alt="/"  /></span>18% Reduction in carbon emissions rate against national target emissions
                                              </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                              </div>
                                            </div>
                                          </div>
                                          <h4 className="sm-btn" >Show More</h4>
                                      </div>

                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="tab-pane fade" id="Place" role="tabpanel" aria-labelledby="Place-tab">
                                <div className="col-lg-12 map-cont ">
                                    <h3 className="map-head"> Place</h3>
                                    <p className="card-text"><span><img src="assets/icons/loc.svg" alt="/" / ></span>
                                        Orange street, United Kingdom 5012
                                    </p>
                                    <img src="assets/images/Map.png"alt="/" />
                                    <div className="tab-inner2">
                                        <h5>Surrounded by</h5>
                                        <div className="row">
                                            <div className="col p-detail2">
                                                <p> <img src="assets/icons/r1.svg" alt="/"  /> Restaurant name <span>2 Km away</span></p>
                                                <p> <img src="assets/icons/r2.svg" alt="/"  /> Train station <span>2 Km away</span></p>
                                                <p> <img src="assets/icons/r3.svg" alt="/"  /> High school name <span>2 Km away</span></p>
                                            </div>
                                            <div className="col p-detail2 ">
                                                <p> <img src="assets/icons/r4.svg" alt="/"  /> Hotel name here <span>2 Km away</span></p>
                                                <p> <img src="assets/icons/r5.svg" alt="/"  /> Coffee shop name <span>2 Km away</span></p>
                                                <p> <img src="assets/icons/r6.svg" alt="/"  /> Bank name goes here <span>2 Km away</span></p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                                 <div className="tab-pane fade" id="Finance" role="tabpanel" aria-labelledby="Finance-tab">
                                    <div className="financ-tab-wrapper">
                                    <h1 className="f-tab-head">Finance</h1>
                                    <div className="tab-inner-calculator">
                                        <h5>Calculator</h5>
                                        <div className="row">
                                            <div className="col-lg-4 calc-tab text-center">
                                                <h6 className="heading-box">Revenue/month</h6>
                                                <p className="amount-box">+2,642 £</p>
                                            </div>
                                            <div className="col-lg-4 calc-tab2 text-center">
                                                <h6 className="heading-box">Added value/ year</h6>
                                                <p className="amount-box">+3,508 £</p>
                                            </div>
                                            <div className="col-lg-4 calc-tab3 text-center">
                                                <h6 className="heading-box">Valuation / year</h6>
                                                <p className="amount-box">+85,30 £</p>
                                            </div>
                                            </div>
                                            <div className="row2">
                                            <Range></Range>
                                        </div>
                                            
                                        
                                    
                                    
                                </div>
                                </div>
                                <div className="container price-list-cont">
                                    <div className="row">
                                        <h2 className="h-pt">Acquisition</h2>
                                        <div className="col-lg-12 d-flex main-cont-list">
                                            <div className="col-lg-6 price-list">
                                                <h3>Purchase price</h3>
                                                <h3>TANNIT Rewards</h3>
                                                <h3>Real estate agency fees</h3>
                                                <h3>Legal fees</h3>
                                                <h3>Money reserve (redevelopment)</h3>
                                                <h3>Management fees</h3>
                                                <h3>Taxes</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount">
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex">
                                            <div className="col-lg-6 price-list-lh">
                                                <h3>Total acquisition cost</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount-lh">
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container price-list-cont">
                                    <div className="row">
                                        <h2 className="h-pt">Revenue details</h2>
                                        <div className="col-lg-12 d-flex main-cont-list">
                                            <div className="col-lg-6 price-list">
                                                <h3>Target rental yield</h3>
                                                <h3>LTV (Loan To Value)</h3>
                                                <h3>Collected rents</h3>
                                                <h3>Loan repayment</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount">
                                                <h3>30%</h3>
                                                <h3> 30%</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex">
                                            <div className="col-lg-6 price-list-lh">
                                                <h3>Total value</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount-lh">
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container price-list-cont">
                                    <div className="row">
                                        <h2 className="h-pt">Valuation</h2>
                                        <div className="col-lg-12 d-flex main-cont-list">
                                            <div className="col-lg-6 price-list">
                                                <h3>Valuation of the property</h3>
                                                <h3>Added value</h3>
                                                <h3>Current silver reserve</h3>
                                                <h3>Loan to repay</h3>
                                                <h3>Taxes on resale</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount">
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex">
                                            <div className="col-lg-6 price-list-lh">
                                                <h3>Total value</h3>
                                            </div>
                                            <div className="col-lg-6 price-amount-lh">
                                                <h3> 300 000 £</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-lg-12 g-cont d-flex">
                                    <div className=" graph-sec d-flex">
                                        <h3>Evolution of the value of TANNIT</h3>
                                        <h1>10,20 £</h1>
                                        <p>Current value</p>
                                        <img src="assets/images/chart2.png" alt="/" />
                                    </div>
                                </div>
                                <div className="container-lg-12 g-cont d-flex">
                                    <div className=" graph-sec d-flex">
                                        <h3>Monthly income per TANNIT</h3>
                                        <h1>0.05 £</h1>
                                        <p>Cible (Soit 5.53% annuel)</p>
                                        <img src="assets/images/chart3.png" alt="/" />
                                    </div>
                                </div>
                            </div>
                            </div>
                                </div>
                            </div>
                   
                    
               
           
        

            <div className="col-sm-4 p-4 cards-div d-flex">
                <div className="left-card1 d-flex">
                    <h3>Amount of TANNIT</h3>
                    <h1>10,20 £</h1>
                    <p>Current value</p>
                    <img src="assets/images/Line Chart.png" alt="/" />
                </div>
                <div className="left-card1 d-flex">
                    <div>

                        <div className="card-inner">
                            <div className="amount">143K £</div>
                            <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="/" />40 remaining
                            </div>

                        </div>
                        <div className="card-inner2">
                            <div className="amount-text">Converted to: 1500 Tannits</div>
                            <div className="investor"> <img src="assets/icons/Icon2.svg" alt="/" />72 Investors</div>

                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"  style={{'width': '75%'}} aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="icon-bar pt-3">
                            <div className="inline-svg-icons d-flex">
                                <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="/" /></button>
                                <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="/" /></button>
                                <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="/" /></button>
                                <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="/" /></button>
                                <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="/" /></button>
                              </div>
                        </div>
                        <div className="card-inner3 my-3 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="/" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="/" />
                                <p>4,6%</p>
                            </div>



                        </div>
                        <div className="card-body comp-body">
                            <button className="view-btn">Invest <i className="fa-solid fa-arrow-right"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


 </div>
    );

};
  
  
  export default propertydetail;