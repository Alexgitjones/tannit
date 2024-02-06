import Header from "../../component/header";
import Footer from "../../component/footer";

function blog() {
    return (
      <div className="App">
         <Header />
        
        <div className="main-container fluid-container">
        <div className="top-banner d-flex justify-content-center flex-wrap align-content-center">
          <h1 className="banner-hd">Welcome to our blog</h1>
        </div>
        <div className="container">
          <div className="row  mt-3 mb-2">
            <div className="top-tabs d-flex flex-direction-column">
                <a className="active" href="#All">All</a>
                <a href="#Finance">Finance</a>
                <a href="#Eco Friendly">Eco Friendly</a>
                <a href="#Non-profits">Non-profits</a>
                <a href="#Real estate">Real estate</a>
                <a href="#Non-profits">Technology</a>
              </div>
              <div className="s-f2 d-flex">
                <i className="fa-solid fa-magnifying-glass"></i>
           <input type="text"  placeholder= "Try &quot;Investment rate&quot;" />
          </div>
        </div>
          
    
      </div>
      <div className="sixth-row mt-lg-5 mt-sm-1 mb-5 custom-section-ind">
        <div className="container">
        
          <div className="d-flex post-section">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post one.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post two.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/icons-2/post three.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          <div className="d-flex post-section spacer">
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post four.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post five.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rounded-4 shadow-lg">
              <img className='rounded-top-4' src="assets/images/post six.png" alt="img" />
              <div className="post-detail p-4">
                <h3>It’s live now</h3>
                <p>Investing in eco-friendly properties is one of the strategies that can provide profitable returns on investment.</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="btn btn-primary post-btn">Load more </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
    );
  }
  
  export default blog;
  