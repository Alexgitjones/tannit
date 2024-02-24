import Header from "../../component/dashheader";
import Range from "../../component/range";

function purchaseconfirm() {
    return (
      <div className="App">
        <Header />
    <section className="below-main">
        <div className="container-fluid artical-cont " style={{'maxWidth': '1440px'}}>
            <div className="row artical2 d-flex ">
                <div className="tab-btns2 d-flex  my-1">
                    <div className="top-head"><img src="assets/icons/Iconleft.svg" alt="" /> Confrim your purchase</div>

                </div>
            </div>
        </div>
    </section>
    <div className="container payment-first-sec">
        <row className="d-flex flex-direction-row">
            <div className="col-lg-4 img-box-cont"> <img src="assets/images/Image container new.png" alt="" /></div>
            <div className="col-lg-8 data-box-cont">

                <div className="left-card2 d-flex">
                    <div>
                        <h2 className="pay-card-head">Standpoint Tower A Downtown</h2>

                        <div className="card-inner">
                            <div className="amount">143K £</div>
                            <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                            </div>

                        </div>
                        <div className="card-inner2">
                            <div className="amount-text">Converted to: 1500 Tannits</div>
                            <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>

                        </div>
                        <div className="progress main2 rj-pc-page">
                            <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div className="card-inner3 mt-3 d-flex flex-direction-column">
                            <div className="profit d-flex flex-direction-column">Profitability <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>18,35%</p>
                            </div>
                            <div className="returned d-flex flex-direction-column">Returned <img
                                    src="assets/icons/Instance tooltip.png" alt="" />
                                <p>4,6%</p>
                            </div>



                        </div>

                    </div>
                </div>
            </div> 
            </row>
            </div>
            
          
    <div className="cpay-cal" style={{'maxWidth': '1010px'}}>
        <h5>Calculator</h5>
        <div className="tab-inner-calculator">

            <div className="row">
                <div className="col-lg-4 calc-tab text-center">
                    <h6 className="heading-box">Revenue/month</h6>
                    <p className="amount-box">+2,642 £</p>
                </div>
                <div className="col-lg-4 calc-tab2 text-center">
                    <h6 className="heading-box">Added value/ year</h6>
                    <p className="amount-box">+3,508 £</p>
                </div>
                <div className="col-lg-4 calc-tab3 text-center">
                    <h6 className="heading-box">Valuation / year</h6>
                    <p className="amount-box">+85,30 £</p>
                </div>
            </div>
            <div className="row2">
                <div className="payment-prange">
               <Range></Range>
               </div>
            </div>


        </div>
        <div className="botm-cal">
            <h3>You have</h3>
            <p><span><img src="assets/icons/Vector wb.svg" alt="" /></span>3200 TANNIT</p>

        </div>
        <div className="botm-cal2">
            <h3>You will invest</h3>
            <div className="input-group mb-3">
                <span className="input-group-text"><img src="assets/icons/Vector wb.svg" alt="" /></span>
                <input type="text" className="form-control" placeholder="Number of TANNIT"
                    aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text right">=400£</span>
            </div>
            <label for="basic-note" className="form-label note">Note: 1 TANNIT = 10£</label>
            <button className="btn grn-btn5">Invest 40 TANNIT</button>

        </div>
     </div>
    
    </div>

    
   
    );
  }
  
  export default purchaseconfirm;