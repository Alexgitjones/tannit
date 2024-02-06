import React from 'react'

export default function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarcontainer">
      <div className="container-fluid " >
        <a className="navbar-brand nav2" href="#"><img src="images/logo.png" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-main">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><span>
                <i className="fas fa-home"></i>
              </span>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><span><i className="far fa-star"></i></span>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
             <span>   <i className="fas fa-print"></i></span>Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <span>  <i className="far fa-question-circle"></i></span>FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#"><span><i className="far fa-envelope-open"></i></span>Contact</a>
            </li>
          </ul>
          <div>
            <button className="btn btn-outline-success btn1" type="search">Start investing<span><i className="fas fa-user-circle"></i></span></button>
          </div>
        </div>
      </div>
    </nav>
        <div className="main-header container pt-3 pb-3">
          <div className="row header-m-main m-0">
              <div className="col-lg-3 col-sm-12">
                <img width="208px" height="48px" src="assets/icons-2/logo.png" alt="img" />
              </div>
              <div className="navbar-brand col-lg-6 col-sm-12 d-flex align-items-center justify-content-center" >
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
      </header>
    );
 }
 
