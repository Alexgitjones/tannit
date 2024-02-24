import React, { useState } from 'react';

export default function Completeprofile() {
  // State to track the checked status of each checkbox
  const [checkboxes, setCheckboxes] = useState({
    profile: true,
    patrimoine: true,
    personalInfo: true,
    documents: true
  });

  // Function to toggle the checked status of a checkbox
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes(prevState => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName]
    }));
  };

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
            <label className="container">
              Profile
              <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.</p>
              <input
                type="checkbox"
                checked={checkboxes.profile} // Use state to determine checked status
                onChange={() => handleCheckboxChange('profile')} // Call function to toggle checked status
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Patrimoine et revenus
              <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.</p>
              <input
                type="checkbox"
                checked={checkboxes.patrimoine}
                onChange={() => handleCheckboxChange('patrimoine')}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Personal information
              <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.</p>
              <input
                type="checkbox"
                checked={checkboxes.personalInfo}
                onChange={() => handleCheckboxChange('personalInfo')}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Documents
              <p>A primary residence is the dwelling where you reside on a habitual, permanent, and principal basis.</p>
              <input
                type="checkbox"
                checked={checkboxes.documents}
                onChange={() => handleCheckboxChange('documents')}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
