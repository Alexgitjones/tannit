function claim() {
    return (
      <div className="App">
      <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarcontainer">
        <div className="container-fluid ">
            <a className="navbar-brand nav2" href="#"><img src="assets/images/image_2023_12_15T09_13_37_552Z.png"
                    alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        </div>
    </nav>
    <section className="main-grid2 d-flex">
        <div className="container">
            <div className="row">
                <div className="middle-sec">
                    <img src="assets/images/flowers.png" alt="" />
                    <h2>Profile created!</h2>
                    <p>You have successfully created your Tannit account. </p>
                    <p className="mt-1">To be able to start investing, information is strongly required. You can access your profile at any time to provide the necessary information.</p>
                    <p className="mt-2">Here are some Tannits for you, Claim now to add them to your balance</p>
                    <div className="claim-last-sec">
                    <img src="assets/images/coin-Group.png" alt="" />
                    <h2>40 TANNIT</h2>
                    <button className="btn grn-btn">Claim now</button>
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
      </div>
    );
  }
  
  export default claim;