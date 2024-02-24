import Header from "../../component/dashheader";
function wallet() {
    return (
      <div className="App">
        <Header /> 
        <section className="wallet tabs">
        <div className="container wal-cont8">
            <div className="row rj-wp-row">
                <div className="col left-main m-wal d-flex">
               <div className="mwal-d1">     
              <h3 className="bal-head"><span><img src="assets/icons/walllet.svg" alt="" /></span>Current balance</h3>
              <h3 className="bal-head2"><span><img src="assets/images/Tannit coin.png" alt="" /></span>23,458</h3>
              <p className=" rj-w-mwal-p">Converted to: 2,345.8£</p>
            </div>
            <div className="mwal-d12">
              <button className="d1-btn">Get TANNIT</button>
                </div>
                </div>
                <div className="col right-main8 m-wal d-flex">
                    <div className="mwal-d1">     
                   <h3 className="bal-head"><span><img src="assets/icons/earn.svg" alt="" /></span>Earnings</h3>
                   <h3 className="bal-head2">23,458</h3>
                   <p>From 3 properties</p>
                 </div>
                 <div className="mwal-d12">
                   <button className="d1-btn2">Withdraw</button>
                     </div>
                     </div>

                                    
                
            </div>
        </div>

    </section>
    <section className="wallet-tabs2">
        <div className="container wal-cont2">
            <div className="row">
                <div className="col sec-left-main">
              <h3 className="slm-head">Profits made on the TANNIT</h3>
              <h3 className="slm-head2">10,20 £</h3>
              <p>Total profit</p>
              <img src="assets/images/stat Chart.png" alt="" />
                </div>
                <div className="col-7 sec-right-main">
                    <h3 className="slm-head">TANNIT dividends</h3>
              <h3 className="slm-head2">10,20 £</h3>
              <p>Current value</p>
              <img src="assets/images/Frame 34024.png" alt="" />
                </div>
                
            </div>
        </div>

    </section>
    <section className="wallet-tabs3">
        <div className="container wal-table-form">
            <h3 className="slm-head">My income</h3>
            <div className="form-row d-flex flex-direction-coloum mg6">
                <div className="form-group col-md-3">
                  
                  <input type="date" placeholder="Date" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-3">
               
                  <select id="inputState" className="form-control icon-drop-rj">
                    <option selected>Type <img src="assets/images/faicon.svg"/></option>
                    <option>...</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col">
                </div>
                <div className="form-group col-md-4">
                    
                    <div className="icon-input d-flex justify-content-center">
                        <input className="icon-input__text-field" type="text" placeholder="Search for property" />
                        <i className="fa fa-search mag"></i>
                    </div>
                </div>
              </div>
              <div className="col-12 wv2-table">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">DATE <span><img src="assets/icons/Font awesomedate.svg" alt="" /></span></th>
                        <th scope="col" >Details</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Tannit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Achat de Tannit sur l'immeuble Saint george</td>
                        <td className="color-td-grn">+ 57£</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Revenus issus de loyer de l'immeuble saint george</td>
                        <td className="color-td-red">- 1£</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Withdrawal</td>
                        <td className="color-td-grn">+ 23,153£</td>
                        <td>N/A</td>
                      </tr>

                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Revenus issus de loyer de l'immeuble saint george</td>
                        <td className="color-td-grn">+ 23,153£</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Purchase cancellation</td>
                        <td className="color-td-red">- 1,185,479£</td>
                        <td>3245</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Withdrawal</td>
                        <td className="color-td-grn">+ 23,153£</td>
                        <td>N/A</td>
                      </tr>

                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Adding money by card</td>
                        <td className="color-td-red">- 2153£</td>
                        <td>2266</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Purchase cancellation</td>
                        <td className="color-td-red">- 3£</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td scope="row">13/02/2023</td>
                        <td>Adding money by card</td>
                        <td className="color-td-grn">+ 23,153£</td>
                        <td>N/A</td>
                      </tr>
                      
                    </tbody>
                  </table>
              </div>
            </div>
            <div className="container total-tab-sec">
              <div className="col-12 wv2-total">
                <div>
                <h3 >Total</h3>
                </div>
                <div className="multi-data-head d-flex">
                    <h3 >Total Credit:</h3>
                    <p>30,211,687£</p>
                </div>
                <div className="multi-data-head d-flex">
                    <h3 >Total debit:</h3>
                    <p className="p2-t">11,687£</p>
                </div>
                <div className="multi-data-head d-flex">
                    <h3 >Not profit:</h3>
                    <p>+ 30,200,000</p>
                    <button className="total-btn1">Withdraw</button>
                </div>
              </div>
            </div>
            <div className="container total-multi-tab-sec d-flex">
              <div className="col-4 1st-tab">
                <div className="multi-data-head ">
                    <div className="col sec-left-main">
                        <h3 className="slm-head">Profits made on the TANNIT</h3>
                        <h3 className="slm-head2">10,20 £</h3>
                        <p>Total profit</p>
                        <img src="assets/images/1st chart.png" alt="" />
                    </div>
                </div>
              </div>
              <div className="col 2nd-tab">
                <div className="multi-data-head ">
                    <div className="col sec-left-main">
                        <h3 className="slm-head">My income</h3>
                        <h3 className="slm-head2">10,20 £</h3>
                        <p>Total profit</p>
                        <img src="assets/images/2ndcharrt.png" alt="" />
                    </div>
                </div>
              </div>
              <div className="col-4 1st-tab">
                <div className="multi-data-head ">
                    <div className="col sec-left-main rj-lc-alg">
                        <h3 className="slm-head">Ecological credit</h3>
                        <h3 className="slm-head2">10,20 £</h3>
                        <p>Total profit</p>
                        <img src="assets/images/3rd chart.png" alt="" />
                    </div>
                </div>
              </div>
              
              
            </div>
        

    </section>
    </div>

    
   
    );
  }
  
  export default wallet;