import React from 'react'

export default function Header() {
  return (
    <header>
    
        <div className="main-header container pt-3 pb-3 desktop-nav">
          <div className="row header-m-main m-0 ">
              <div className="col-lg-3 col-sm-12">
                <img width="208px" height="48px" src="assets/icons-2/logo.png" alt="img" />
              </div>
              <div className="navbar-brand col-lg-6 col-sm-12 d-flex align-items-center justify-content-center " >
                <ul className="list-group list-group-horizontal custom-menu">
                  <li className="list-group-item"><img className="mb-1 me-1" width="14" src="assets/icons-2/menuicon.png" alt="img" />Home</li>
                  <li className="list-group-item"><img className="mb-1 me-1" width="14" src="assets/icons-2/image_2023_12_15T23_59_59_789Z.png" alt="img" />Services</li>
                  <li className="list-group-item"><img className="mb-1 me-1" width="14" src="assets/icons-2/image_2023_12_16T00_00_09_560Z.png" alt="img" />Blog</li>
                  <li className="list-group-item"><img className="mb-1 me-1" width="14" src="assets/icons-2/image_2023_12_16T00_00_24_924Z.png" alt="img" />FAQ</li>
                  <li className="list-group-item"><img className="mb-1 me-1" width="14" src="assets/icons-2/image_2023_12_16T00_00_41_019Z.png" alt="img" />Contact</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-12 d-flex justify-content-end">
                <button type="button" className="btn btn-primary">Start investing <img width="18" src="assets/icons-2/header btn icon.png" alt="img" /></button>
              </div>
          </div>

          

        </div>
        <div class="row w-100 mobile_header">
        <div class="col-6 header-block-1">
          <a class="logo" href="/">
            <img src="assets/images/logo.png" alt="logo" width="253"
              height="auto" />
          </a>
        </div>
        
        <button class="navbar-toggler collapsed col-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../faq">FAQ's</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      

      </header>
    );
 }
 
