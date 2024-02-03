

function Author() {
  return (
    <div className="App">
      <section className="main-grid">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 form-sec">
                    <h4>Register</h4>
                    <h2>Create your account</h2>
                    <button><img src="assets/icons/Google.svg" alt="" /> Continue with Google</button>
                    <button><img src="assets/icons/Facebook.svg" alt="" /> Continue with Facebook</button>
                    <button><img src="assets/icons/Linkedin.svg" alt="" /> Continue with Linkedin</button>


                    <hr className="hr-text gradient" data-content="OR" />
                        <form action="/action_page.php" className="m-f">
                            
                            
                        <label htmlFor="fname">Email/ Mobile Number</label><br />
                        <div className="img-form">
                                <span><img src="assets/icons/before Icon.svg" alt="" /></span>
                            <input type="text" id="fname" name="fname" defaultValue= "Enter your email address or mobile number..." /><br />
                        </div>
                            <input type="submit" defaultValue="Proceed" />
                    </form>   
                    <p className="form-bottom">
                        By continuing, you agree to Tannit's<span>Terms of Use</span>.<br />
                            Read our <span> Privacy Policy</span>.
                    </p> 
                    <p className="form-bottom2">
                        Already have an account?<span>Login</span></p> 

                </div>
                <div className="col-lg-5 img-sec p-0 m-0">
                    <img src="assets/images/rightbanner.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Author;
