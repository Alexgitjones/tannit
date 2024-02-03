function signup() {
    return (
      <div className="App">
      <section className="main-grid">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 form-sec">
                    <h4><span><img src="assets/icons/left.svg" alt="img" /></span> Go back</h4>
                    <h2>Sign up with your e-mail</h2>
                    

                    
                        <form action="/action_page.php" className="m-f">
                            
                            
                        <label for="email">Email</label><br />
                        <div className="img-form">
                        <span><img src="assets/icons/mail.svg" alt="" /></span>
                        <input type="email" id="email" name="email" value= "demo@moon.tn" /><br />
                        </div>
                        <label for="password">Choose password</label><br />
                        <div className="img-form2">
                               <span><img src="assets/icons/lock.svg" alt="" /></span>
                            <input type="text" id="password" name="password" value= "Minimum 8 characters..." /><br />
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