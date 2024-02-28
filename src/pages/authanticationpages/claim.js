import Header from "../../component/authanticationheader";
function claim() {
    return (
      <div className="App">
                 <Header />
      <div>
    
    <section className="main-grid2 d-flex">
        <div className="container m-wrapper-c-a-p">
            <div className="row c-a-p">
                <div className="middle-sec">
                    <img src="assets/images/flowers.png" alt="" />
                    <h2>Profile created!</h2>
                    <p>You have successfully created your Tannit account. </p>
                    <p className="mt-1">To be able to start investing, information is strongly required. You can access your profile at any time to provide the necessary information.</p>
                    <p className="mt-2">Here are some Tannits for you, Claim now to add them to your balance</p>
                    <div className="claim-last-sec">
                    <img src="assets/images/coin-Group.png" alt="" />
                    <h2>40 TANNIT</h2>
                    <button className="btn grn-btn nd-sp-btn">Claim now</button>
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