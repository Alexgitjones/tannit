function addmoney() {
    return (
      <div className="App">
    <body>
    <section className="main-cont-comp" style={{'maxWidth': '800px'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 main-comp-sec">
                    <h3>Add Money to Your Pot: Boost Your Savings with Contributions</h3>
                    <div className="col-12">
                        <div className="mr-1 row d-flex">
                            <div className="form-radio-check col-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                              <label className="form-check-label" for="flexRadioDefault">
                              </label>
                              <h4><span> <img src="assets/icons/Tannit coin.svg" alt=""/> </span>120</h4>
                              <p>182.5£
                              </p>
                              
                            </div>
                            <div className="form-radio-check col">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" checked />
                              <label className="form-check-label" for="flexRadioDefault">
                              </label>
                              <h4><span> <img src="assets/icons/Tannit coin.svg" alt="" /> </span>320</h4>
                              <p className="amount">+20 Bonus</p>
                              <p>182.5£</p>
                             
                            </div>
                            <div className="form-radio-check col-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                              <label className="form-check-label" for="flexRadioDefault">
                              </label>
                                <h4><span> <img src="assets/icons/Tannit coin.svg" alt="" /> </span>1500</h4>
                                <p className="amount">+20 Bonus</p>
                                <p>182.5£</p>
                                
                            </div>
                            <div className="col-12 not-sec">
                                <h5>Custom amount</h5>
                                <p>Amount of TANNIT desired</p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><img src="assets/icons/Tannit coin.svg" alt="" /></span>
                                    </div>
                                    <input type="text" className="form-control"  placeholder="Number of TANNIT"  aria-label="Amount (to the nearest dollar)" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">=400£</span>
                                    </div>
                                  </div>
                                  <label for="basic-note" className="form-label note">Note: 1 TANNIT = 10£</label>
                            </div>
                            <div className="col-12 new-radio-2">
                              <h3>Payement method</h3>
                              <div className="mr-1 row d-flex">
                                <div className="form-radio-check2 col-4">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                  </label>
                                  <h4><span> <img src="assets/icons/stripe.svg" alt="" /> </span>Stripe</h4>
                                  
                                  
                                </div>
                                <div className="form-radio-check2 col">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                  </label>
                                  <h4><span> <img src="assets/icons/paypal.svg" alt="" /> </span>Paypal</h4>
                                 
                                </div>
                                <div className="form-radio-check2 col-4">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                  <label className="form-check-label" for="flexRadioDefault2">
                                  </label>
                                  <h4><span> <img src="assets/icons/cardless.svg" alt="" /> </span>GoCardless</h4>
                                    
                                </div>
                                <div className="verification-btns d-flex">
                                <button type="submit" className="btn radio-btn-1 btn-primary">Cancel</button>
                                <button type="submit" className="btn radio-btn-2 btn-primary">Confirm</button>
                                </div>
                                

                                </div>
                            </div>
                          </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</body>
    </div>

    
   
    );
  }
  
  export default addmoney;