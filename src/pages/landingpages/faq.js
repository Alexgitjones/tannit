import Header from "../../component/header";
import Footer from "../../component/footer";

function faq() {
    return (
      <div className="App">
        <Header />
        <div className="main-container fluid-container">
        <div className="top-banner d-flex justify-content-center flex-wrap align-content-center">
        <h1 className="banner-hd">Quick answers to questions you may have.</h1>
        </div>
        <div className="container">
          <div className="row  mt-5 mb-5">
            <h2 className="custom-main-hd-2">Tell us what you need</h2>
            <h5 className="custom-top-para-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</h5>
            <div className="s-f1 d-flex align-items-center">
                <i className="fa-solid fa-magnifying-glass pe-3"></i>
           <input type="text"  placeholder= "Search.." />
          </div>
            
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
            
          </div>
          
          <div className="faq-second-row mt-5 mb-5 custom-section-ind">
            <div className="container">
              <div className="row">
                <h1 className="banner-hd-2">Top articles</h1>
                <div className="mid-tabs d-flex flex-direction-column">
                  
                    <ul class="nav nav-pills mb-3 nfaq-tab" id="pills-tab2" role="tablist">
                    <li class="nav-item nfaq-tab-item" role="presentation">
                      <button class="nav-link active nfaq-tab-item-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">General</button>
                    </li>
                    
                    <li class="nav-item  nfaq-tab-item" role="presentation">
                      <button class="nav-link nfaq-tab-item-btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Finance</button>
                    </li>

                    <li class="nav-item nfaq-tab-item" role="presentation">
                    <button class="nav-link nfaq-tab-item-btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Eco Friendly</button>
                  </li>

                    <li class="nav-item nfaq-tab-item"  role="presentation">
                    <button class="nav-link nfaq-tab-item-btn" id="pills-Non-profits-tab" data-bs-toggle="pill" data-bs-target="#pills-Non-profits" type="button" role="tab" aria-controls="pills-Non-profits" aria-selected="false">Non-profits</button>
                  </li>  

                  </ul>
                  </div>
                 <div class="tab-content" id="pills-tabContent">
                 <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="card-group">
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">How can I invest in real estate through this platform?</h5>
                        <p className="card-text">Our platform simplifies real estate investing. You can browse properties, review details, and invest securely with a few clicks.</p>
                      </div>
                      </div>
                    <div className="card">
                      
                      <div className="card-body">
                        <h5 className="card-title">What types of real estate investments are available?</h5>
                        <p className="card-text">We offer diverse real estate investments: residential, commercial, and development projects.</p>
                      </div>
                      
                    </div>
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">Is there a minimum investment amount required to get started?</h5>
                        <p className="card-text">Minimum investment amounts vary by property. We have options for different budgets</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="card-group">
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">How to ensure security and transparency of investment? </h5>
                        <p className="card-text">We prioritize security and transparency. We conduct due diligence and provide comprehensive details about each opportunity.</p>
                      </div>
                      </div>
                    <div className="card">
                      
                      <div className="card-body">
                        <h5 className="card-title">Can I track the performance of my investments?</h5>
                        <p className="card-text">Track your investments and receive regular updates on our platform's dashboard.</p>
                      </div>
                      
                    </div>
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">What fees or charges are associated with using the platform?</h5>
                        <p className="card-text">Fees vary by investment but are transparent. We charge a percentage-based or management fee.</p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                  <div className="card-group">
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">How to ensure security and transparency of investment? </h5>
                        <p className="card-text">We prioritize security and transparency. We conduct due diligence and provide comprehensive details about each opportunity.</p>
                      </div>
                      </div>
                    <div className="card">
                      
                      <div className="card-body">
                        <h5 className="card-title">Can I track the performance of my investments?</h5>
                        <p className="card-text">Track your investments and receive regular updates on our platform's dashboard.</p>
                      </div>
                      
                    </div>
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">What fees or charges are associated with using the platform?</h5>
                        <p className="card-text">Fees vary by investment but are transparent. We charge a percentage-based or management fee.</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                  <div className="card-group">
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">How to ensure security and transparency of investment? </h5>
                        <p className="card-text">We prioritize security and transparency. We conduct due diligence and provide comprehensive details about each opportunity.</p>
                      </div>
                      </div>
                    <div className="card">
                      
                      <div className="card-body">
                        <h5 className="card-title">Can I track the performance of my investments?</h5>
                        <p className="card-text">Track your investments and receive regular updates on our platform's dashboard.</p>
                      </div>
                      
                    </div>
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">What fees or charges are associated with using the platform?</h5>
                        <p className="card-text">Fees vary by investment but are transparent. We charge a percentage-based or management fee.</p>
                      </div>
                    </div>
                    </div>

                  </div>
                  <div class="tab-pane fade" id="pills-Non-profits" role="tabpanel" aria-labelledby="pills-Non-profits-tab">

                  <div className="card-group">
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">How to ensure security and transparency of investment? </h5>
                        <p className="card-text">We prioritize security and transparency. We conduct due diligence and provide comprehensive details about each opportunity.</p>
                      </div>
                      </div>
                    <div className="card">
                      
                      <div className="card-body">
                        <h5 className="card-title">Can I track the performance of my investments?</h5>
                        <p className="card-text">Track your investments and receive regular updates on our platform's dashboard.</p>
                      </div>
                      
                    </div>
                    <div className="card">
                          <div className="card-body">
                        <h5 className="card-title">What fees or charges are associated with using the platform?</h5>
                        <p className="card-text">Fees vary by investment but are transparent. We charge a percentage-based or management fee.</p>
                      </div>
                    </div>
                    </div>

                  </div>


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
  
  export default faq;
  