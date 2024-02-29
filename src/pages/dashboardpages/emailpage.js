function emailpage() {
    return (
      <div className="App">
    <body>
    <div className="container p-0 main-wraper-mail d-flex " style={{'maxWidth': '620px'}}>
        <img src="assets/images/email-Logo.png" alt="" />
        <div className="row mail-row1">
            
            <div className="col-6 col-sm-12 email-sec1l" >
                <h2>Summary</h2>
            <div className="head-w-text">
                <h4>Charge Amount</h4>
                <p>$1.00 USD</p>
            </div>
            <div className="head-w-text">
                <h4>Payment Method</h4>
                <p>Mastercard**8802</p>
            </div>
            <div className="head-w-text">
                <h4>Amazon pay payment ID</h4>
                <p className="bl-text">P01-4834102-7982</p>
            </div>
            <div className="head-w-text">
                <h4>payment date </h4>
                <p className="gray-text">Sunday,july 31,2022 2:27:25 PM CET</p>
            </div>
            </div>
            <div className="col col-sm-12 email-sec12" >
                <h2>Merchant Information</h2>
            <div className="head-w-text">
                <h4>Xsolla</h4>
                <p  className="blue-text">amazon-all@Xsolla.com</p>
            </div>
            <div className="head-w-text">
                <h4>Merchant Order ID</h4>
                <p>9937708802</p>
            </div>
            <div className="head-w-text">
                <h4>Note from Xsolla</h4>
                <p>Nosoxsolla-mn.1000 Cash Invoice for help go to</p>
                <p className="bl-text">Demo@Xsolla.xom</p>
            </div>
        </div>
        </div>
        <div className="row2 d-flex">
            <div className="col-6 col-sm-12 cont-area">
                <h2>Customize this<br /> email title!</h2>
                <p>Boost your emails with Blush! Create dope emails easy and fast!</p>
                <button>Discover </button>
                
            </div>
            <div className="col-6 col-sm-12 image-div-mail">
                <img src="assets/images/Città Coffee Shop.png" alt="" />
            </div>
        </div>
        <div className="row2 d-flex sec-r2df">
            
            <div className="col-6 col-sm-12 image-div-mail">
                <img src="assets/images/Città Party Time.png" alt="" />
            </div>
            <div className="col-6 col-sm-12 cont-area">
                <h2>Customize this<br /> email title!</h2>
                <p>Boost your emails with Blush! Create dope emails easy and fast!</p>
                <button>Discover </button>
                
            </div>
        </div>
        <div className="row2 d-flex">
            <div className="col-6 cont-area">
                <h2>Customize this<br /> email title!</h2>
                <p>Boost your emails with Blush! Create dope emails easy and fast!</p>
                <button>Discover </button>
                
            </div>
            <div className="col-6 image-div-mail">
                <img src="assets/images/Città Living Room.png" alt="" />
            </div>
        </div>
        <div className="row r4-text">
            <div className="col">
                <p className="solo-text">Boost your emails with Blush! Create dope emails easy and fast!<br /> 
                    Install the Blush plugin to customize all the illustrations!<br />
                    <br />
                    <br />
                    
                    Create the coolest emails!</p>
                    
            </div>
        </div>
        <div className="row r5-foot">
            <p>Lorem ipsum dolor sit amet consectetur. Viverra suscipit senectus<br /> lorem facilisi iaculis potenti massa euismod accumsan. </p>
            <div mail-foot-inner>
                <div className="social-icons">
                    <ul>
                        <li><a href="#"> <img src="assets/icons/t1.svg" alt="" /></a></li>
                        <li><a href="#"> <img src="assets/icons/t2.svg" alt="" /></a></li>
                        <li><a href="#"> <img src="assets/icons/t3.svg" alt="" /></a></li>
                        <li><a href="#"> <img src="assets/icons/t4.svg" alt="" /></a></li>
                        <li><a href="#"> <img src="assets/icons/t5.svg" alt="" /></a></li>
                        
                    </ul>
                </div>
                <p className="address-mail text-center">2035, Sousse , Sousse</p>
                <button className="unsub-btn">Unsubscribe</button>
            </div>

        </div>
        <div className="page-end d-flex align-items-center">
            <img src="assets/images/email-Logo.png" alt="" />
        </div>
    </div>
</body>
    </div>

    
   
    );
  }
  
  export default emailpage;