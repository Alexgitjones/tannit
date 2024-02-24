import React from 'react'

export default function Smallcard() {
  return (


<body>
    <div className="row card-section">
        <div className="col-5 amj-column">

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="assets/images/card1.png" className="d-block amj-sec" alt="..."/>
                  </div>
                </div>
              </div>
        
        </div>
        <div className="col-7 2amj-column">
          <div className="subject-section">
            <img src="assets/images/sicon.svg" alt=""/>
            <h5>Orange street, United Kingdom 5012</h5>
          </div>
          <div className="pric-sec">
            <h3>143K €</h3>
          </div>
          <div className="detail-sec">
            <h4 className='bold-heading-scard'>Standpoint Tower A Downtown</h4>
          </div>
          <div className="small-sec">
            <h6>Profitability <span>18,35%</span></h6>
            <h6>Returned <span>4,6%</span> </h6>
          </div>

          <div className="round-progress d-flex col-12">
            <div className='additional-wrapper col-2'>
       
            <div className="round-card">
              <div className="percent">
              <svg >
      <circle cx="105" cy="105" r="29" />
      <circle cx="105" cy="105" r="29" style={{ '--percent': 20 }} />
    </svg>
                <div className="number">
                  <h3>84<span>%</span></h3>
                </div>
              </div>
            </div>
            </div>
            <div className='ar-inline d-flex col-8'>
                <h4>502 of 600 Tannit invested</h4>
                <p>By 3,4k investors</p>
            </div>
            <div className='ar-inline-btn1 d-flex col'>
                <button> <img alt='/' src='assets/images/rjbtn.svg' /> </button>
            </div>
            
          </div>

        </div>
    </div>
</body> 
);
 }
 