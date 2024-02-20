import React , { useState , useEffect } from 'react';
import Header from "../../component/dashheader";
import Card from "../../component/property-card";
import Data from "../../data/properties.json";
function Profile() {
  const [property,setproperty] = useState([]);
  const [pagination,setpagination] = useState(6);


  useEffect(() => {
  const makedata = Data.filter((index,key) => { return key < 6 } )
  setproperty(makedata)
  },[]);


  function handleloadmore(num){
  num += 3;
  const makedata = Data.filter((index,key) => { return key < num } )
  setpagination(num)
  setproperty(makedata)
  }


    return (
    <div className="App">
       <Header /> 
    <section>
    <div className="container d-flex justify-content-center profile-head" style={{'maxWidth': '1220px'}}>
      <div className="gradiant">
        <img src="assets/icons-2/baner.png" style={{'maxWidth': '1220px'}} />
      </div>
    </div>
    <div className="men d-flex " style={{'maxWidth': '1220px'}}>
      <img src="assets/images/men (1).png" />
      <h2>Name Last Name </h2>
    </div>
    <div className="tabs-section d-flex justify-content-start" style={{'maxWidth': '1220px'}}>
      <ul className="nav nav-tabs d-flex justify-content-start" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="my-detail-tab" data-bs-toggle="tab" data-bs-target="#my-detail"
            type="button" role="tab" aria-controls="my-detail" aria-selected="true">My details</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="status-tab" data-bs-toggle="tab" data-bs-target="#status" type="button"
            role="tab" aria-controls="status" aria-selected="false">Status</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="investment-tab" data-bs-toggle="tab" data-bs-target="#investment" type="button"
            role="tab" aria-controls="investment" aria-selected="false">Investment</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="Documents-tab" data-bs-toggle="tab" data-bs-target="#Documents" type="button"
            role="tab" aria-controls="Documents" aria-selected="false">Documents</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="Refferals-tab" data-bs-toggle="tab" data-bs-target="#Refferals" type="button"
            role="tab" aria-controls="Refferals" aria-selected="false">Refferals</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" id="My-favorites-tab" data-bs-toggle="tab" data-bs-target="#My-favorites"
            type="button" role="tab" aria-controls="My-favorites" aria-selected="false">My favorites</button>
        </li>
      </ul>
    </div>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="my-detail" role="tabpanel" aria-labelledby="my-detail-tab">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h2>Personal information</h2>
              <p>Update your photo and personal details.</p>
            </div>
            <div className="col-8 my-detail">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Full name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Demo@moon.in" />
                </div>
                <div className="mb-3">
                  <label for="disabledSelect" className="form-label">Who are</label>
                  <select id="disabledSelect" className="form-select">
                    <option>Demo@moon.in</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Phone number</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Demo@moon.in" />
                </div>
                <div className='input-group date mb-3' id='picker'>
                  <input type='date' className="form-control" />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Place of birth</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Earth" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Department of birth</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Somewhre else" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Native country</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Another place" />
                </div>

                <hr className="divider" />
                <div className="button-section">
                  <button type="submit" className="btn btn-primary amj">Save Changes</button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h2>Tax residence address </h2>
              <p>Update your photo and personal details.</p>
            </div>
            <div className="col-8 my-detail">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Country *</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="United Kingdom" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">City *</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="London" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Zip code *</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="SW1A1AA" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Region</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Greator London" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="10 Downing Street" />
                </div>
                <div className="mb-3">
                  <h3>Marital Status</h3>
                  <label for="disabledSelect" className="form-label">Who are</label>
                  <select id="disabledSelect" className="form-select">
                    <option>Available</option>
                  </select>
                </div>
                <hr className="divider" />
                <div className="button-section">
                  <button type="submit" className="btn btn-primary amj">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="status" role="tabpanel" aria-labelledby="status-tab">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h2>The path to wealth</h2>
              <p>True wealth is being able to fully enjoy the present moment without being hindered by regrets from the
                past or worries about the future.<br /> <br />___ HSteven
              </p>
              <img className="quote" src="assets/icons-2/quotes 1.png" alt="" / >
            </div>
            <div className="col-8 owner">
              <h3>You are owner of</h3>
              <div className="head-main row d-flex">
                <div className="form-check col-6">
                  <h4>Primary residence</h4>
                  <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.
                  </p>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault">
                  </label>
                </div>
                <div className="form-check col-6">
                  <h4>Property intended for rental investment</h4>
                  <p>Property intended for rental investment refers to real estate that is acquired with the purpose of
                    generating rental income.</p>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" checked />
                  <label className="form-check-label" for="flexRadioDefault">
                  </label>
                </div>
                <div className="form-check col-6">
                  <h4>Secondary residence</h4>
                  <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.
                  </p>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault">
                  </label>
                </div>
                <div className="form-check col-6">
                  <h4>None</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" checked />
                  <label className="form-check-label" for="flexRadioDefault">
                  </label>
                </div>
              </div>
              <div className="head-main2 row d-flex">
                <h2>Where does the amount you want to invest come from?</h2>
                <div className="form-check1 col-6">
                  <h4>Saving</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                  </label>
                </div>
                <div className="form-check1 col-6">
                  <h4>Salary</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                  <label className="form-check-label" for="flexRadioDefault2">
                  </label>
                </div>
                <div className="form-check1 col-6">
                  <h4>Donation</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                  </label>
                </div>
                <div className="form-check1 col-6">
                  <h4>Gains</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                  <label className="form-check-label" for="flexRadioDefault2">
                  </label>
                </div>
                <div className="form-check6 col-6">
                  <h4>Other Source</h4>
                  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" checked />
                  <label className="form-check-label" for="flexRadioDefault2">
                  </label>
                </div>
              </div>
              <div className="head-main3 row d-flex">
                <h2>Will you diversify your investment portfolio across various assets or concentrate investments in a
                  specific area? </h2>
                <div className="row 2">
                  <div className="col-6">
                    <label for="Cash">Cash</label>
                    <input type="text" className="form-control" placeholder="£50000" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Commercial real estate">Commercial real estate</label>
                    <input type="text" className="form-control" placeholder="2%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Accounts titles">Accounts titles</label>
                    <input type="text" className="form-control" placeholder="123548" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Rental property (excluding SCPI)">Rental property (excluding SCPI)</label>
                    <input type="text" className="form-control" placeholder="4%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Life insurance and capitalization">Life insurance and capitalization</label>
                    <input type="text" className="form-control" placeholder="548572" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="SCPI">SCPI</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Crowdfunding and crowdlending">Crowdfunding and crowdlending</label>
                    <input type="text" className="form-control" placeholder="£550.222" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Others">Others</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                  </div>
                  <div className="col-12">
                    <h4>Preview</h4>
                    <img src="assets/icons-2/chart.png" alt="..."/>
                    <div>
                      
                  </div>
                  </div>
                </div>
                
              </div>
              <hr className="divider" />
                      <div className="button-section">
                        <button type="submit" className="btn btn-primary amj">Save Changes</button>
                      </div>
            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h2>Income</h2>
              <p>True wealth is being able to fully enjoy the present moment without being hindered by regrets from thepast or worries about the future.<br /> <br />___ HSteven
              </p>
            </div>
            <div className="col-8 gros">
              <h3>Your annual gross income is estimated at ?</h3>
              <div className="col-12 estimated ">
                <input type="text" className="form-control" placeholder="placeholder" aria-label="Last name" />
              </div>
              <div className="head-main3 row d-flex">
                <h2>What is your income distribution?</h2>
                <div className="row 2">
                  <div className="col-6">
                    <label for="Wages">Wages</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Other professional income">Other professional income</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Rental property (excluding SCPI)">Rental property (excluding SCPI)</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Rental property (excluding SCPI)">Rental property (excluding SCPI)</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Real estate income">Real estate income</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                  </div>
                  <div className="col-6">
                    <label for="Rental income">Rental income</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                  </div>
                  <div className="col-6">
                    <label for="Others">Others</label>
                    <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                  </div>
                  <div className="col-12">
                    <h4>Preview</h4>
                    <img src="assets/icons-2/chart.png" />
                  </div>
                  <div className="col-12 Saving">
                    <h2>What is your annual savings capacity </h2>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="placeholder" aria-label="Last name" />
                    </div>
                  </div>
                  <div className="col-12 objective">
                    <h2>Your main investment objectives are</h2>
                    <div className="col">
                      <div className="form-check-radio col">
                        <h4>Diversify my wealth</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                      <div className="form-check-radio col">
                        <h4>Preparing for a real estate investment</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                      <div className="form-check-radio col">
                        <h4>Grow my savings</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                      <div className="form-check-radio col">
                        <h4>Reduce my taxes</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                      <div className="form-check-radio col">
                        <h4>Preparing for my retirement</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                      <div className="form-check-radio col">
                        <h4>Preparing my estate</h4>
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col expenses">
                <h3>Your annual expenses are estimated at</h3>
                <div className="col-12 estimated">
                  <input type="text" className="form-control" placeholder="placeholder" aria-label="Last name" />
                </div>
                <div className="head-main3 row d-flex">
                  <h2>What is the distribution of these charges ?</h2>
                  <div className="row 2">
                    <div className="col-6">
                      <label for="Main Residence Credit">Main Residence Credit</label>
                      <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                    </div>
                    <div className="col-6">
                      <label for="Rent">Rent</label>
                      <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                    </div>
                    <div className="col-6">
                      <label for="Taxes">Taxes</label>
                      <input type="text" className="form-control" placeholder="%" aria-label="First name" />
                    </div>
                    <div className="col-6">
                      <label for="Incompressible loads">Incompressible loads</label>
                      <input type="text" className="form-control" placeholder="%" aria-label="Last name" />
                    </div>
                    <div className="col-6">
                      <label for="Others">Others</label>
                      <input type="text" className="form-control" placeholder="%" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col texas">
                <h2>Texas</h2>
                <h4>How much tax do you pay each year?</h4>
                <label for="Others"></label>
                <input type="text" className="form-control" placeholder="placeholder" />
              </div>
    

              <hr className="divider" />
              <div className="button-section">
                <button type="submit" className="btn btn-primary amj">Save Changes</button>
              </div>

            </div>
          </div>
        </div>
        </div>
          <div className="tab-pane fade" id="investment" role="tabpanel" aria-labelledby="investment-tab">
           
            <div className="container-fluid d-flex ">
            <div className="row w-100">
            <div className="col-4 ">
              <h2>Investment</h2> 
              <p>It's important to know all of your options.By definition, real estate investing is a high-stakes game. Never make an investment that you are unsure of. It is critical to understand what you are doing in order to succeed.<br /> <br />Tips to Be Successful in Real Estate Investing
              </p>
            </div>
            <img className="quote2" src="assets/icons-2/quotes 2.png" alt="" />
            <div className="col-8 option ">
              <h2 className="option-c-h2">Have you ever invested in real estate?</h2>
              <div className="options">
                <input className="form-check-input" type="radio" name="estate" id="estate" />
                <label className="form-check-label">
                  Yes
                </label>
                <input className="form-check-input" type="radio" name="estate" id="estate" checked />
                <label className="form-check-label">
                  No
                </label>
              </div>
              
              <div className="col options">
                <h4>What type of investment</h4>
                <div className="mb-3">
                  <select id="disabledSelect" className="form-select">
                    <option>Mutual funds</option>
                    <option>Mutual funds</option>
                  </select>
                </div>
              </div>

              
              <div className="options">
                <h3>The amount of investment you plan to
                  does it represent 10% of your total assets? *</h3>
                <input className="form-check-input" type="radio" name="plan" id="plan" />
                <label className="form-check-label">
                  Yes
                </label>
                <input className="form-check-input" type="radio" name="plan" id="plan" checked />
                <label className="form-check-label">
                  No
                </label>
              </div>



            
              <div className="options">
                <div className="col investment">
                  <h4>What type of real estates ?</h4>
                  <div className="mb-3">
                    <select id="disabledSelect" className="form-select">
                      <option>Commercial Real Estate</option>
                      <option>Commercial Real Estate</option>
                    </select>
                  </div>
                </div>
                <h4>Do you intend to invest in the next 12 months? *</h4>
                <input className="form-check-input" type="radio" name="intend" id="intend" />
                <label className="form-check-label">
                  Yes
                </label>
                <input className="form-check-input" type="radio" name="intend" id="intend" checked />
                <label className="form-check-label">
                  No
                </label>
              </div>
              <hr className="divider" />
              <div className="button-section">
                <button type="submit" className="btn btn-primary amj">Save Changes</button>
              </div>
            </div>
          </div>
         </div>
        </div> 

          <div className="tab-pane fade" id="Documents" role="tabpanel" aria-labelledby="Documents-tab">
            <div className="container-fluid">
           <div className="row w-100 Documents-tab">
            <div className="col-4">
              <h2>Documents</h2> 
              <p>This space is yours.Your documents will<br /> be  treated with seriousness and in <br />complete security.
              </p>
            </div>
            <div className="col-8 drag-section">
              <h3>Document name *</h3>
               <div className="input_form" >
                <img src="assets/icons-2/Button.png" alt="..." />
                <h4><span>Click to upload </span>or Drag and Drop <br /> PDF, PNG, ou JPG</h4>
               </div>
               </div>
               <hr className="divider" />
              <div className="button-section">
                <button type="submit" className="btn btn-primary amj">Save Changes</button>
              </div>
            </div>
           </div>
          </div>
        

          <div className="tab-pane fade" id="Refferals" role="tabpanel" aria-labelledby="Refferals-tab">
            <div className="container-fluid">
              <div className="row w-100 refferals-sec">
                <div className="col refferal">
                  <h2>Bonus</h2>
                  <h3>Total bonus collected: <span><img src="assets/icons-2/Tannit coin.png" alt="" />245</span></h3>  
                  <div className="claim d-flex align-items-center">
                    <h2>Not Claimed:</h2>
                    <h3>You have <span className="fiftyseven">57 TANNIT</span> from <span className="four"> 4 activites</span> done by your refferals</h3>
                    <button>Claim now</button>
                  </div>
                </div>
              </div>
            </div>
             
            <div className="container-fluid">
            <div className="row w-100 refferals-sec">
              <div className="col refferal">
                <h3>You were brought on this platform by: <span className="men-sec"><img src="assets/icons-2/men img.png" />Guy Hawkins</span></h3>  
                <div className="claim d-flex align-items-center">
                  <h2>Your refferal ID:</h2>
                  <div className="min-sec">
                    www.tannit-compte.com
                    <span><img src="assets/icons-2/Icon.png" alt="" /></span>
                  </div>
                </div>
                <p>This is the ID you have to give to the investors you bring on the TANNIT platform. The referred investor has to enter this ID as referral ID when they register. You will receive bonuses when he makes activities.</p>
              </div>
            </div>
          </div>

          <div className="container-fluid table-con ">
            <div className="row w-100 table-sec-pro">
              <div className="col">
            <table className="table mv2-tab-main ">
              <thead>
                  <tr>
                      <th scope="col">Date joined</th>
                      <th scope="col">user</th>
                      <th scope="col"></th>
                      <th scope="col">Invested amount</th>
                      <th scope="col">bonus (TANNIT)</th>
                  </tr>
              </thead>
              <tbody className="tsp-body">
                  <tr>
                      <td scope="row">13/02/2023</td>
                      <td className="img-text-td"><span> <img src="assets/icons-2/img1.png"alt="" /></span> Guy Hawkins</td>
                      <td className="chart-td"></td>
                      <td>57£</td>
                      <td>24</td>
                  </tr>

                  <tr>
                      <td scope="row">15/02/2023</td>
                      <td className="img-text-td"><span> <img src="assets/icons-2/img2.png"alt="" /></span> Guy Hawkins</td>
                      <td className="chart-td"></td>
                      <td>233£</td>
                      <td>24</td>
                  </tr>

                  <tr>
                      <td scope="row">27/02/2023</td>
                      <td className="img-text-td"><span> <img src="assets/icons-2/img3.png"alt="" /></span> Guy Hawkins</td>
                      <td className="chart-td"></td>
                      <td>153£</td>
                      <td>24</td>
                  </tr>

                  <tr>
                      <td scope="row">29/02/2023</td>
                      <td className="img-text-td"><span> <img src="assets/icons-2/img4.png"alt="" /></span> Guy Hawkins</td>
                      <td className="chart-td"></td>
                      <td>33£</td>
                      <td>24</td>
                  </tr>
              </tbody>
          </table>
        </div>
        </div>

          </div>


          </div>

          <div className="tab-pane fade" id="My-favorites" role="tabpanel" aria-labelledby="My-favorites-tab">

            <div className="container-fluid">
              <div>
                <div className="result-text2 d-flex spb-btn">
                    <p>Showing<strong>115 property</strong> that match your search criteria</p>
                    <button className="mp-btn">Sort by (Date)<span><img src="assets/icons/updown.svg"
                                alt="" /></span></button>

                </div>
            </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 amj-ppage">
              {
        property.map((index,key) => { 
            return(
            <div key={key} className="col">
                <div className="card">
                    < Card ></Card>
                        {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                            <button className="global-ct-sec"><span> <img src="assets/icons/grn-tick.svg" alt="" /> </span> Contributed</button>
                        </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                        </div> */}
                    </div>
                </div>
                 )
                })
              }
                {/* <div className="col">
                    <div className="card2">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                          </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                </div>
                <div className="col">
                    <div className="card3">
                        <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                          </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                </div>
                <div className="col">
                    <div className="card4">
                        <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                          </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>  
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                </div>
                <div className="col">
                    <div className="card5">
                        <div id="carouselExampleIndicators5" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                            <button className="global-ct-sec"><span> <img src="assets/icons/grn-tick.svg" alt="" /> </span> Contributed</button>
                        </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                </div>
                <div className="col">
                    <div className="card6">
                        <div id="carouselExampleIndicators6" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                                        Friendly</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
  
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-2"><img src="assets/icons/clock.svg"
                                            alt="" />Greenification</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/Image1.png" className="d-block w-100" alt="..." />
                                    <button className="image-btn-3"><img src="assets/icons/stars.svg"
                                            alt="" />Featured</button>
                                    <button className="image-btn-4"><img src="assets/icons/hleaf.svg" alt="" />125 <img
                                            src="assets/icons/up.svg " alt="" />0.2% </button>
                                </div>
                            </div>
  
                        </div>
  
  
  
                        <div className="card-body">
                          <div className="2btn-grp">
                            <button className="global-ct">Without credit</button>
                            </div>
                            <h5 className="p-card-title">Standpoint Tower A Downtown</h5>
                            <p className="card-text"><span><img src="assets/icons/gb 1.svg" alt="" /></span>
                                Orange street, United Kingdom 5012
                            </p>
                            <div className="inline-svg-icons d-flex">
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag1.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag2.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag3.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag4.svg" alt="" /></button>
                              <button className="inline-svg-icons-btn1"><img src="assets/icons-2/Tag5.svg" alt="" /></button>
                            </div>
                            <div>
                                <div className="card-inner">
                                    <div className="amount">143K £</div>
                                    <div className="remain"> <img src="assets/icons/Tannit coin.svg" alt="" />40 remaining
                                    </div>
  
                                </div>
                                <div className="card-inner2">
                                    <div className="amount-text">Converted to: 1500 Tannits</div>
                                    <div className="investor"> <img src="assets/icons/Icon2.svg" alt="" />72 Investors</div>
  
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="card-inner3 my-4 d-flex flex-direction-column">
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
                </div> */}
  
            </div>
            </div>
            {/* <div className="row justify-content-center mb-5">
            <button onClick={() => handleloadmore(pagination)} className="bw-learn btn btn-show" type="search">Show more </button>
        </div> */}



          </div>

    </div>
    </section>
    </div>  
    );
  }
  
  export default Profile;