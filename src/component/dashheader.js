import React from 'react'

export default function DashHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light dash-head" id="navbarcontainer">
        <div className="container-fluid ">
            <a className="navbar-brand nav2" href="/"><img src="assets/images/image_2023_12_15T09_13_37_552Z.png"
                    alt="img" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-main">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="/"><span><img
                                    src="assets/icons/Font awesome.svg" alt="img" /></span>Dashboard</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            <span><img src="assets/icons/Font awesome2.svg" alt="img" /></span>Properties</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span><img src="assets/icons/Font awesome3.svg" alt="img" /></span>Marketplace</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/"><span><img src="assets/icons/Icon4.svg" alt="img" /></span>Forum</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <div className="profile d-flex">
                        <div className="profile-pic d-flex align-items-center">
                            <img src="assets/images/Tannit coin.png" alt="img" />
                        </div>
                        <div className="profile-info d-flex align-items-center ">
                            <h3 className="head-name">Balance</h3>
                            <p className="value">3200</p>
                        </div>
                    </div>

                    <button className="btn-6 " type="notification">
                        <img src="assets/icons/Font awesome bell.svg" alt="img" /></button>
                    <div className="user-box d-flex m-0">
                        <img src="assets/images/Avatar.png" alt="img" />
                        <div className="btn-group new-dropdown-btn">
                          <button className="btn btn-secondary ndb2 dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                          <span> <img src="assets/icons/dashheader.svg" alt="/" />   </span>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                            <li><a className="dropdown-item" href="/">Menu item</a></li>
                            <li><a className="dropdown-item" href="/">Menu item</a></li>
                            <li><a className="dropdown-item" href="/">Menu item</a></li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
 }
 
