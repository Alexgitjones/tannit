function Sellingshare() {
    return (
      <div className="App">
    <section className="main-sel-comp" style={{'max-width': '720px'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="sel-m-head">My contribution</h3>
                    <div className="shead-box">
                        <p className="multic-head">Invested amount<span>40 Tannit</span></p>
                        <p className="multic-head2">Income received<span>1.45£</span></p>
                    </div>
                    <h3 className="sel-m-head">Amount for sell</h3>
                    <div className="col-12 not-sec2">
                        <p>Amount of TANNIT desired</p>
                        <div className="input-group counter-form mb-3">
                            <span className="input-group-text counter-form-cont">-</span>
                            <input type="text" className="form-control  counter-form-input" placeholder=" 40 " aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text counter-form-cont">+</span>

                          </div>
                          <label for="basic-note" className="form-label note2">Note: 1 TANNIT = 10£</label>
                    </div>
                    <h3 className="sel-m-head">Selling price</h3>
                    <div className="col-12 not-sec2">
                        <p>Variation</p>
                        <div className="input-group counter-form mb-3">
                            <span className="input-group-text counter-form-cont">-</span>
                            <input type="text" className="form-control  counter-form-input" placeholder="10%" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text counter-form-cont">+</span>

                          </div>
                          <div className="org-text"><span><img src="assets/icons/yelow.svg" alt="" /></span> You can't exceed 20% from your buying amount</div>
                          <div className="shead-box2">
                            <p className="multic-head3">Note: 1 TANNIT = 11£</p>
                            <p className="multic-head3">Profit:<span>1.45£</span></p>
                            <p className="multic-head3">Tax: 12£</p>
                            <p className="multic-head-l">Total selling price: 122£</p>
                        </div>
                        <div className="verification-btns d-flex">
                            <button type="submit" className="btn radio-btn-1 btn-primary">Cancel</button>
                            <button type="submit" className="btn radio-btn-2 btn-primary">Sell</button>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

      </div>
    );
  }
  
  export default Sellingshare;