import Header from "../../component/dashheader";
function dashboard() {
    return (
      <div className="App">
         <Header /> 
      <section className="fsec-dash">
        <div className="container total-multi-tab-sec d-flex row">
        <div className="col-4 1st-tab ">
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
        <div className="col-4 1st-tab last-tab-frow">
          <div className="multi-data-head ">
              <div className="col sec-left-main rj-lc-alg">
                  <h3 className="slm-head">Ecological credit</h3>
                  <h3 className="slm-head2">10,20 £</h3>
                  <p>Total profit</p>
                  <img src="assets/images/3rd chart.png" alt=""/>
              </div>
          </div>
        </div>
        
        
      </div>
    </section>
    <section className="wallet-tabs2">
        <div className="container wal-cont2">
            <div className="row dash-rj">
                <div className="col sec-left-main">
              <h3 className="slm-head">Profits made on the TANNIT</h3>
              <h3 className="slm-head2">10,20 £</h3>
              <p>Total profit</p>
              <img src="assets/images/stat Chart.png" alt=""/>
                </div>
                <div className="col-7 sec-right-main">
                    <h3 className="slm-head">TANNIT dividends</h3>
              <h3 className="slm-head2">10,20 £</h3>
              <p>Current value</p>
              <img src="assets/images/Frame 34024.png" alt=""/>
                </div>
                
            </div>
        </div>

    </section>
    <section className="wallet-tabs3">
        <div className="container wal-table-form">
           
            <div className="form-row d-flex flex-direction-coloum mg6">
                <div className="form-group col-md-3">
                  
                  <input type="date" placeholder="Date" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-3">
               
                  
                </div>
                <div className="form-group col">
                </div>
                <div className="form-group col-md-4">
                    
                    <div className="icon-input d-flex justify-content-center">
                        <input className="icon-input__text-field sec" type="text" placeholder="Search for activity" />
                        <i className="fa fa-search mag"></i>
                    </div>
                </div>
              </div>
              <div className="col-12 wv2-table">
                <table className="table main-rj-dt">
                    <thead>
                      <tr>
                        <th scope="col">DATE <span><img src="assets/icons/Font awesomedate.svg" alt=""/></span></th>
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
            </section>
      </div>
    );
  }
  
  export default dashboard;