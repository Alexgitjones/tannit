import React from 'react'

export default function Autanticationheader() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light auth-nav" id="navbarcontainer">
        <div className="container-fluid auth-header ">
            <a className="navbar-brand nav2" href="#"><img src="assets/images/image_2023_12_15T09_13_37_552Z.png"
                    alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <div className="d-flex">
                    <div className="profile d-flex">
                        <div className="profile-pic d-flex align-items-center">
                            <img src="assets/images/Tannit coin.png" alt="" />
                        </div>
                        <div className="profile-info d-flex align-items-center ">
                            <h3 className="head-name">Balance</h3>
                            <p className="value">0</p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </nav>
    </header>
    );
 }
 
