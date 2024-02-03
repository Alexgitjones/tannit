function verify() {
    return (
      <div className="App">
      <section className="main-grid">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 form-sec">
                    <h4><span><img src="assets/icons/left.svg" alt="" /></span> Go back</h4>
                    <h2>Verify your email address</h2>
                    <p className="v-formtext">We emailed you a four-digit code to demo@moon.tn,
                        Enter the code below to confirm your email address.</p>
                    
                    

                    
                        <form action="/action_page.php" className="m-vf">
                            
                            <div className="d-flex mb-3">
                                <input type="tel" maxLength="1" pattern="[0-9]" className="form-control" />
                                <input type="tel" maxLength="1" pattern="[0-9]" className="form-control" />
                                <input type="tel" maxLength="1" pattern="[0-9]" className="form-control" />
                                <input type="tel" maxLength="1" pattern="[0-9]" className="form-control" />
                                </div>
                                <div className="v-form-last-count-sec">
                                    <h3 className="l-t"><span>00:30</span>seconds left to enter code</h3>
                                    <h3>Didn't receive code?<span className="red1">Resend</span></h3>
                                </div>
                              <button type="submit" className="w-100 btn vf-btn">Finish</button>
                        
                    </form>   
                     

                </div>
                <div className="col-lg-5 img-sec p-0 m-0">
                    <img src="assets/images/rightbanner2.png" alt="" />
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
  
  export default verify;