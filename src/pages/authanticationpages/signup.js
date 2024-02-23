import Header from "../../component/authanticationheader";
function signup() {
    return (
      <div className="App">
            <Header />          
      <section className="main-grid">
        <div className="container">
            <div className="row s-u-a">
                <div className="col-lg-7 form-sec">
                    <h4><span><img src="assets/icons/left.svg" alt="img" /></span> Go back</h4>
                    <h2>Sign up with your e-mail</h2>
                    

                    
                        <form action="/action_page.php" className="m-f">
                            
                            
                        <label for="email">Email</label><br />
                        <div className="img-form">
                        <span><img src="assets/icons/mail.svg" alt="" /></span>
                        <input type="email" id="email" name="email" placeholder="demo@moon.tn" defaultValue= "" /><br />
                        </div>
                        <label for="password">Choose password</label><br />
                        <div className="img-form2">
                               <span><img src="assets/icons/lock.svg" alt="" /></span>
                            <input type="text" id="password" name="password" placeholder="Minimum 8 characters..." defaultValue= ""  /><br />
                        </div>
                            <input type="submit" value="Send verification code" />
                    </form>   
                     

                </div>
                <div className="col-lg-5 img-sec p-0 m-0">
                    <img src="assets/images/rightbanner2.png" alt="img" />
                </div>
            </div>
        </div>
    </section>  
      </div>
    );
  }
  
  export default signup;