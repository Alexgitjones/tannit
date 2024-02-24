import Header from "../../component/dashheader";
function Propertycompare() {
    return (
      <div className="App">
        <Header /> 
    <section className="prop-comp-wrap">


<div className="container-fluid artical-cont "  style={{'maxWidth': '1440px'}}>
    <div className="row artical-compare">
        <div className="first-head mb-3">
            <h6><i className="fa-solid fa-arrow-left"></i>Properties</h6> 
        </div>
      <div>
            <h1 className="head-comp">
                Property comparables
            </h1>
        </div>
    </div>
    <div className="row  com-img mb-5">
        <div className="card-group">
            <div className="card comp">
              <img src="assets/images/comp-main.png" className="card-img-top" alt="..." />
              <button className="image-btn"><img src="assets/icons/leaf.svg" alt="" />Eco
                Friendly</button>
              <div className="card-body comp-body">
                <button className="view-btn">View details <i className="fa-solid fa-arrow-right"></i> </button>
              </div>
             
            </div>
            <div className="card comp">
              <img src="assets/images/comp-main.png" className="card-img-top" alt="..." />
              <button className="image-btn-2"><img src="assets/icons/clock.svg"
                alt="" />Greenification</button>
              <div className="card-body comp-body">
                <button className="view-btn">View details <i className="fa-solid fa-arrow-right"></i> </button>
              </div>
              
            </div>
            <div className="card comp">
              <img src="assets/images/comp-main.png" className="card-img-top" alt="..." />
              <button className="image-btn-3"><img src="assets/icons/stars.svg"
                alt="" />Featured</button>
              <div className="card-body comp-body">
                <button className="view-btn">View details <i className="fa-solid fa-arrow-right"></i> </button>
              </div>
              
            </div>
          </div>
    </div>
    </div>
    </section>
    <div className="container-fluid">
        <table className="table mb-5 borderless">
            <thead className="f-sec">
              <tr className="borderless">
                <th scope="col" className="rows"><strong>Address</strong></th>
                <th scope="col">Orange street, United Kingdom 5012</th>
                <th scope="col">Orange street, United Kingdom 5012</th>
                <th scope="col">Orange street, United Kingdom 5012</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="rows">Price</th>
                <td><span>143K £</span></td>
                <td><span>143K £</span></td>
                <td><span>143K £</span></td>
              </tr>
              <tr>
                <th scope="row" className="rows">Profitability</th>
                <td>8%</td>
                <td>8%</td>
                <td>8%</td>
              </tr>
              <tr>
                <th scope="row" className="rows">Return</th>
                <td>8%</td>
                <td>8%</td>
                <td>8%</td>
              </tr>
              <tr>
                <th scope="row"className="rows">Sustainability risk</th>
                <td>8%</td>
                <td>8%</td>
                <td>8%</td>
              </tr>
              <tr>
                <th scope="row"className="rows">Added value</th>
                <td>8%</td>
                <td>8%</td>
                <td>8%</td>
              </tr>
              <tr>
                <th scope="row"className="rows">Estate area</th>
                <td>128 sqft</td>
                <td>140 sqft</td>
                <td>169 sqft</td>
              </tr>
              <tr>
                <th scope="row"className="rows">Targeted return</th>
                <td>128 sqft</td>
                <td>140 sqft</td>
                <td>169 sqft</td>
              </tr>
              <tr>
                <th scope="row"className="rows">Energy Level</th>
                <td>A</td>
                <td>A</td>
                <td>A+</td>
              </tr>                      
            </tbody>
          </table>
    </div>
    





    </div>

    
   
    );
  }
  
  export default Propertycompare;