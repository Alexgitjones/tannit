import React from 'react'

export default function Completeprofile() {
  return (
    <section className="main-grid2 d-flex comp-profile">
        <div className="container">
            <div className="row comp-profile-main-row">
                <div className="middle-sec2 p-c-s">
                    <img src="assets/images/progress-comp.png" alt="" />
                    <h2>90% Complete</h2>
                    <p>Profile settings {'>'} </p>
                    
                    </div>
                <div className="custom-checkbox component-sec">
                    <label className="container">Profile<p>
                            A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.</p>
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Patrimoine et revenus<p>
                        A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis. <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Personal information<p>
                        A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.  <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" checked="checked" /> 
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Documents<p>
                        A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.  <i className="fa-solid fa-angle-right"></i></p>
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                    </label>

                </div>
                
            </div>
        </div>
    </section>
    );
 }
 
