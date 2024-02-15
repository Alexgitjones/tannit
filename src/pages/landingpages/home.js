import Header from "../../component/header";
import Footer from "../../component/footer";


function home() {
    return (
      <div className="App">
        <Header />
        <div>
<div className="wrapper">
      <div className="container-fluid main-home-sec d-flex m-0">
        <div className="col-lg-7 left-back " >
          
          <div className="content-1stbanner">
            <h1>Invest in <span>sustainable</span><br /> real estate</h1>
            <p>Discover a new way to invest in real estate and achieve financial growth with our innovative crowdfunding platform. Get exclusive access to promising real estate projects and become a part of the future of property investment.</p>
            <button>Start investing <img src="assets/icons/right.svg" alt="img" /></button>
          </div>

        </div>
        <div className="col right-back" >
          <img src="assets/images/Mask group-home.png" alt="img" />
        </div>
      </div>
      <div className="container-fluid main-home-sec2 d-flex ">
        <div className="col-lg-6 left-1 " >
          
          <div className="content-2ndbanner">
            <h5>Our values</h5>
            <h2>Investing in real estate<br /> through our platform is a<br /> game-changer.</h2>
            <p>Discover a new way to invest in real estate and achieve financial<br /> growth with our innovative crowdfunding platform. Get exclusive<br /> access to promising real estate projects and become a part of the<br /> future of property investment.</p>
            <button>Invest now</button>
          </div>

        </div>
        <div className="col right-2" >
          
          <div className="container">
            <div className="row main-row-ib">
              <div className="col-6  ibox-1">
                <img src="assets/icons/building.svg" alt="img" />
                <p>Access diverse real estate investments: residential, commercial, and sustainable properties. Choose wisely</p>
              </div>
              <div className="col-6  ibox-1">
                <img src="assets/icons/cash.svg" alt="img" />
                <p>Generate passive income through rental properties and real estate crowdfunding.</p>
              </div>
          
              {/* Force next columns to break to new line */}
              <div className="w-100"></div>
          
              <div className="col-6  ibox-1">
                <img src="assets/icons/leaf2.svg" alt="img" />
                <p>Invest in eco-friendly properties for a sustainable future.</p>
              </div>
              <div className="col-6  ibox-1">
                <img src="assets/icons/4th.svg" alt="img" />
                <p>Together, we are creating a greener and more sustainable future. Be part of the change today. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth-row mt-5 mb-lg-5 mb-sm-1 custom-section-ind">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img width="100%" src="assets/images/3rd banner.png" alt="img" />
            </div>
            <div className="col-lg-6 col-sm-12 third-left">
              <h5 className="small-hd">Our engagement</h5>
              <h2 className="custom-main-hd mb-lg-5 mb-sm-1">Build sustainable passive income.</h2>
              <p className="small-main-p">Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment. Ecological or green properties are designed and built with sustainable features that minimize their environmental impact.
              </p>
              <p className="small-main-p">Investing in environmentally friendly properties not only offers the potential for a profitable return on investment but also contributes to a more sustainable future by reducing carbon footprint and promoting environmentally friendly practices.</p>
              <button type="button" className="btn btn-primary">Discover</button>
            </div>
          </div>
        </div>
      </div>
      <div className="five-col mt-5 mb-lg-5 mb-sm-1 custom-card-sec">
        <div className="container">
          <h5 className="small-hd">How it works</h5>
          <h2 className="custom-main-hd mb-lg-5 mb-sm-1">The processes to acquire a property on Tannit</h2>
          <div className="row property-row">
            <div className="col property-card d-flex">
              <img src="assets/icons/scrh.svg" alt="img" />
              <h3>Consult and select a property</h3>
              <p>Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.</p>
              <div className="cd-img">
                <img src="assets/images/home-card1.png" alt="img" />
              </div>
            </div>
            <div className="col property-card d-flex">
              <img src="assets/icons/$.svg" alt="img" />
              <h3>Put Tannit to buy a good</h3>
              <p>Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.</p>
              <div className="cd-img">
                <img src="assets/images/home-card2.png" alt="img" />
              </div>
              <p className="note-p">Note: You will have 30 days before your investment is approved by our team.</p>
            </div>
            <div className="col property-card d-flex">
              <img src="assets/icons/3rd.svg" alt="img" />
              <h3>Track investment rates on your<br /> dashboard</h3>
              <p>Consequat curae neque amet auctor, sed fames sem tristique, nullam nisi maecenas.</p>
              <div className="cd-img">
                <img src="assets/images/home-card3.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="six-col mt-5 mb-lg-5 mb-sm-1 custom-card-sec">
        <div className="container">
          <h5 className="small-hd">Ecological properties</h5>
          <h2 className="custom-main-hd mb-lg-5 mb-sm-1">The environment at the heart of TANNIT</h2>
          <div className="row six-img-box-row">

            <div className="col six-col-img-box d-flex">
              <img src="assets/images/6.png" alt="img" />
              <h3>Sustainability</h3>
              <p>We integrate sustainable practices into all of our operations, prioritizing renewable energy, waste reduction, recycling, and responsible consumption </p>
            </div>

            <div className="col six-col-img-box d-flex">
              <img src="assets/images/7.png" alt="img" />
              <h3>Electricity</h3>
              <p>Our properties are committed to selecting energy sources that have a positive impact on reducing greenhouse gas emissions and minimize our impact on climate change.</p>
            </div>

            <div className="col six-col-img-box d-flex">
              <img src="assets/images/8.png" alt="img" />
              <h3>Save water</h3>
              <p>Our selection of properties are using water wisely, so we can ease the pressure on our wetlands and rivers in these difficult times.</p>
            </div>
          
          </div>
        </div>
      </div>
      <div className="container-fluid home-prop-cards">
        <div className="text-center">
        <h5 className="small-hd">Properties</h5>
        <h2 className="custom-main-hd mb-lg-5 mb-sm-1">Discover our featured listings</h2>
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
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn"><img src="assets/icons/leaf.svg" alt="img" />Eco
                                  Friendly</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                                      src="assets/icons/up.svg " alt="img" />0.2% </button>

                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                      alt="img" />Greenification</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>        
                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-3"><img src="assets/icons/stars.svg"
                              alt="img" />Featured</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>
                          </div>
                      </div>
                      
                  </div>



                  <div className="card-body">
                  
                      <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                      <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="img" /></span>
                          Orange street, United Kingdom 5012
                      </p>
                      <div className="inline-svg-icons d-flex">
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="img" /></button>
                      </div>
                      <div>
                          <div className="card-inner">
                              <div className="amount">143K £</div>
                              <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="img" />40 remaining
                              </div>

                          </div>
                          <div className="card-inner2">
                              <div className="amount-text">Converted to: 1500 Tannits</div>
                              <div className="investor"> <img src="assets/icons/Icon2.svg" alt="img" />72 Investors</div>

                          </div>
                          
                          <div className="card-inner3 my-4 d-flex flex-direction-column">
                              <div className="profit d-flex flex-direction-column">Profitability <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
                                  <p>18,35%</p>
                              </div>
                              <div className="returned d-flex flex-direction-column">Returned <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
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
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn"><img src="assets/icons/leaf.svg" alt="img" />Eco
                                  Friendly</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                                      src="assets/icons/up.svg " alt="img" />0.2% </button>

                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                      alt="img" />Greenification</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>        
                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-3"><img src="assets/icons/stars.svg"
                              alt="img" />Featured</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>
                          </div>
                      </div>
                      
                  </div>



                  <div className="card-body">
                      
                      <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                      <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="img" /></span>
                          Orange street, United Kingdom 5012
                      </p>
                      <div className="inline-svg-icons d-flex">
                      <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="img" /></button>
                      </div>
                      <div>
                          <div className="card-inner">
                              <div className="amount">143K £</div>
                              <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="img" />40 remaining
                              </div>

                          </div>
                          <div className="card-inner2">
                              <div className="amount-text">Converted to: 1500 Tannits</div>
                              <div className="investor"> <img src="assets/icons/Icon2.svg" alt="img" />72 Investors</div>

                          </div>
                          
                          <div className="card-inner3 my-4 d-flex flex-direction-column">
                              <div className="profit d-flex flex-direction-column">Profitability <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
                                  <p>18,35%</p>
                              </div>
                              <div className="returned d-flex flex-direction-column">Returned <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
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
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn"><img src="assets/icons/leaf.svg" alt="img" />Eco
                                  Friendly</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                                      src="assets/icons/up.svg " alt="img" />0.2% </button>

                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                      alt="img" />Greenification</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>        
                          </div>
                          <div className="carousel-item">
                              <img src="assets/images/Image1.png" className="d-block w-100" alt="img" />
                              <button className="image-btn-3"><img src="assets/icons/stars.svg"
                              alt="img" />Featured</button>
                              <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="img" />125 <img
                              src="assets/icons/up.svg " alt="img" />0.2% </button>
                          </div>
                      </div>
                      
                  </div>



                  <div className="card-body">
                      <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                      <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="img" /></span>
                          Orange street, United Kingdom 5012
                      </p>
                      <div className="inline-svg-icons d-flex">
                      <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="img" /></button>
                        <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="img" /></button>
                      </div>
                      <div>
                          <div className="card-inner">
                              <div className="amount">143K £</div>
                              <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="img" />40 remaining
                              </div>

                          </div>
                          <div className="card-inner2">
                              <div className="amount-text">Converted to: 1500 Tannits</div>
                              <div className="investor"> <img src="assets/icons/Icon2.svg" alt="img" />72 Investors</div>

                          </div>
                          
                          <div className="card-inner3 my-4 d-flex flex-direction-column">
                              <div className="profit d-flex flex-direction-column">Profitability <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
                                  <p>18,35%</p>
                              </div>
                              <div className="returned d-flex flex-direction-column">Returned <img
                                      src="assets/icons/Instance tooltip.png" alt="img" />
                                  <p>4,6%</p>
                              </div>


                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <div className="inv-btn-con d-flex justify-content-center">
        <button className="inv-btn">Start investing <img src="assets/icons/right.svg" alt="img" /></button>
      </div>
</div>
<div className="background-grad">
<div className="container-fluid eight-cont ">
  <div className="row eight-img-box-row">

    <div className="col six-col-img-box2 d-flex">
    
      <h3>5M+</h3>
      <p>Access diverse real estate investments: residential, commercial, and sustainable properties. </p>
    </div>

    <div className="col six-col-img-box2 d-flex">
      
      <h3>92%</h3>
      <p>Access diverse real estate investments: residential, commercial, and sustainable properties.</p>
    </div>

    <div className="col six-col-img-box2 d-flex">
  
      <h3>500+</h3>
      <p>Average Award we have got all
        Access diverse real estate investments.</p>
    </div>
  
  
</div>
</div>
</div>
<div className="container-fluid faq-sec-home">
  <div className="text-center faq-text">
    <h5 className="small-hd">FAQ</h5>
    <h2 className="custom-main-hd mb-lg-5 mb-sm-1">Quick answers to questions you may have.</h2>
    <p>Can't find what you're looking for? Check out our full documentation.</p>
  </div>
  <div className="container custom-section-ind">
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <div className="row p-3 properties-list-2 rounded-3 mb-3">
          <div className="col-lg-2 col-sm-12 ">
            <img width="60" height="60" src="assets/icons/1st.svg" alt="img" />
          </div>
          <div className="col-lg-10 col-sm-12 p-0">
            <h3 className="first-left-hd">How can I invest in real estate through this platform?</h3>
            <p className="first-left-para">Our platform simplifies real estate investing. You can browse properties, review details, and invest securely with a few clicks.</p>
          </div>
        </div>
        <div className="row p-3 properties-list-2 rounded-3 mb-3">
          <div className="col-lg-2 col-sm-12">
            <img width="60" height="60" src="assets/icons/2nd.svg" alt="img" />
          </div>
          <div className="col-lg-10 col-sm-12 p-0">
            <h3 className="first-left-hd">Is there a minimum investment amount required to get started?</h3>
            <p className="first-left-para">Minimum investment amounts vary by property. We have options for different budgets</p>
          </div>
        </div>
        <div className="row p-3 properties-list-2 rounded-3 mb-3">
          <div className="col-lg-2 col-sm-12">
            <img width="60" height="60" src="assets/icons/3rd2.svg" alt="img" />
          </div>
          <div className="col-lg-10 col-sm-12 p-0">
            <h3 className="first-left-hd">Can I track the performance of my investments?</h3>
            <p className="first-left-para">Track your investments and receive regular updates on our platform's dashboard.</p>
          </div>
        </div>
        </div>
        
      <div className="col-lg-6 col-sm-12 d-flex flex-direction-column ">
        <div className="row p-3 properties-list-2 rounded-3 mb-3">
            <div className="col-lg-2 col-sm-12 ">
              <img width="60" height="60" src="assets/icons/4rt.svg" alt="img" />
            </div>
            <div className="col-lg-10 col-sm-12 p-0">
              <h3 className="first-left-hd">What types of real estate investments are available?</h3>
              <p className="first-left-para">We offer diverse real estate investments: residential, commercial, and development projects.</p>
            </div>
          </div>
          <div className="row p-3 properties-list-2 rounded-3 mb-3">
            <div className="col-lg-2 col-sm-12">
              <img width="60" height="60" src="assets/icons/5th.svg" alt="img" />
            </div>
            <div className="col-lg-10 col-sm-12 p-0">
              <h3 className="first-left-hd">How to ensure security and transparency of investment? </h3>
              <p className="first-left-para">We prioritize security and transparency. We conduct due diligence and provide comprehensive details about each opportunity.</p>
            </div>
          </div>
          <div className="row p-3 properties-list-2 rounded-3 mb-3">
            <div className="col-lg-2 col-sm-12">
              <img width="60" height="60" src="assets/icons/6th.svg" alt="img" />
            </div>
            <div className="col-lg-10 col-sm-12 p-0">
              <h3 className="first-left-hd">What fees or charges are associated with using the platform?</h3>
              <p className="first-left-para">Fees vary by investment but are transparent. We charge a percentage-based or management fee.</p>
            </div>
          </div>
          
      </div>
      <div className="inv-btn-con d-flex justify-content-center">
        <button className="inv-btn2">FAQ Page <img src="assets/icons/exit.svg" alt="img" /></button>
      </div>      
    
  </div>
</div>
</div>
<div className="container last-faq-sec">
  <div className="row">
    <div className="col-lg-12 col-sm-12 d-flex flex-direction-column ">
      <div className="row p-3 properties-list-faq rounded-3 mb-3">
          <div className="col-lg-1 col-sm-12 ">
            <img width="32" height="32" src="assets/icons/headphones.svg" alt="img" />
          </div>
          <div className="col-lg-8 col-sm-12 p-0">
            <h3 className="first-left-hd">Still have questions?</h3>
            <p className="first-left-para">Can’t find the answer you’re looking for? please chat to our frieldy team.</p>
          </div>
          <div className="col-lg-3 col-sm-12 p-0">
            <button className="faql-btn">Get in touch</button>
          </div>
        </div>
        </div>
  </div>
</div>      
</div>
</div>
<Footer />
      </div>
    );
  }
  
  export default home;
  