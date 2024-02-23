import Header from "../../component/authanticationheader";
function success() {
    return (
      <div className="App">
       <Header /> 
      <div>
    
    <section className="main-grid2 d-flex s-p-am">
        <div className="container">
            <div className="row s-p-ar">
                <div className="middle-sec2">
                    <img src="assets/images/flowers.png" alt="" />
                    <h2>Profile created!</h2>
                    <p>You have successfully created your Tannit account. </p>
                    <p className="mt-1">To be able to start investing, information is strongly required. You can access your
                        profile at any time to provide the necessary information.</p>
                   
                    
                </div>
                <div className="custom-checkbox">
                    <label className="container">Profile<p>
                            Done</p>
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Wealth and income<p>
                        Only 2 minutes to complete it  <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Investment<p>
                        Only 4 minutes to complete it  <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Documents<p>
                        Only 3 minutes to complete it  <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark"></span>
                    </label>

                </div>
                <div className="claim-last-sec2">
                    
                    <button className="btn grn-btn3 nd-sp-btn">Profile settings<i className="fa-solid fa-arrow-right"></i></button>
                    <button className="btn grn-btn4 nd-sp-btn">Do it later</button>
                </div>
            </div>
        </div>
    </section>
</div>
      </div>
    );
  }
  
  export default success;