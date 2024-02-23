import React , { useState , useEffect } from 'react';
import Header from "../../component/header";
import Footer from "../../component/footer";
import Newsgrid from "../../component/newsgrid";
import Data from '../../data/news.json';

function Blog() {

  const [news,setnews] = useState([]);
  const [pagination,setpagination] = useState(6);


  useEffect(() => {
    const makedata = Data.filter((index,key) => { return key < 6 } )
    setnews(makedata)
  },[]);


  function handleloadmore(num){
    num += 3;
    const makedata = Data.filter((index,key) => { return key < num } )
    setpagination(num)
    setnews(makedata)
  }
  
    return (
      <div className="App">
         <Header />
        
        <div className="main-container fluid-container">
        <div className="top-banner d-flex justify-content-center flex-wrap align-content-center">
          <h1 className="banner-hd">Welcome to our blog</h1>
        </div>
        <div className="container">
          <div className="row  mt-3 mb-2">
            <div className="top-tabs d-flex flex-direction-column">
            <ul class="nav nav-pills mb-0 nfaq-tab" id="pills-tab2" role="tablist">
                    <li class="nav-item nfaq-tab-item" role="presentation">
                      <button class="nav-link active nfaq-tab-item-btn" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
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

                    <li class="nav-item nfaq-tab-item"  role="presentation">
                    <button class="nav-link nfaq-tab-item-btn" id="pills-Real-estate-tab" data-bs-toggle="pill" data-bs-target="#pills-Real-estate" type="button" role="tab" aria-controls="pills-Real-estate" aria-selected="false">Real estate</button>
                  </li>

                    <li class="nav-item nfaq-tab-item"  role="presentation">
                    <button class="nav-link nfaq-tab-item-btn" id="pills-Technology-tab" data-bs-toggle="pill" data-bs-target="#pills-Technology" type="button" role="tab" aria-controls="pills-Technology" aria-selected="false">Technology</button>
                  </li>  

                  </ul>
              </div>
              <div className="s-f2 d-flex align-items-center">
                <i className="fa-solid fa-magnifying-glass pe-3"></i>
           <input type="text"  placeholder= "Try &quot;Investment rate&quot;" />
          </div>
        </div>
          
    
      </div>
      <div className="sixth-row mt-lg-5 mt-sm-1 mb-5 custom-section-ind">
      <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        
        <div className="container">
         
          <div className="d-flex flex-wrap post-section justify-content-between">
            {
              news.map((index,key) =>(
                <>
                  <Newsgrid key={key} index={index} />
                </>
              ))
            }
            {/* <div className="col-lg-3 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div> */}
          </div>
          {/* <div className="d-flex post-section spacer">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post four.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post five.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post six.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div> */}
          {
            Data.length !== pagination ?
          <div className="d-flex justify-content-center mt-5">
            <button onClick={() => handleloadmore(pagination)} type="button" className="btn btn-primary post-btn">Load more </button>
          </div>
          : '' }
        </div>
        </div>

        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div className="container">
        <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <div className="container">
        <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="tab-pane fade" id="pills-Non-profits" role="tabpanel" aria-labelledby="pills-Non-profits-tab">
        <div className="container">
        <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="tab-pane fade" id="pills-Real-estate" role="tabpanel" aria-labelledby="pills-Real-estate-tab">
        <div className="container">
        <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="tab-pane fade" id="pills-Technology" role="tabpanel" aria-labelledby="pills-Technology-tab">
        <div className="container">
        <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
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
  
  export default Blog;