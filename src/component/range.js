import React, { useEffect, useState } from 'react';

const Range = () => {
  const [rangeValue, setRangeValue] = useState(0); // State for range value

  useEffect(() => {
    const range = document.getElementById('range-km'); // Get range element
    const rangeV = document.getElementById('rangeV'); // Get range value element

    const setValue = () => {
      const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      );
      const newPosition = 10 - newValue * 0.2;
      rangeV.innerHTML = `<span>${range.value}£</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };

    setValue(); // Initial setup

    range.addEventListener('input', setValue); // Add event listener

    return () => {
      range.removeEventListener('input', setValue); // Clean up event listener
    };
  }, []); // Run once on component mount

  return (
    <div className="col-lg-12 amont-line">
      <label htmlFor="customRange3" className="form-label">
        Select your investment amount
      </label>
      <div id="search-bar">
        <form id="product-search-bar" action="" method="POST">
          <div className="input-group">
            <div className="input-group-append">
              <div className="range-wrap">
                <div className="range-value" id="rangeV"></div>
                <input
                  id="range-km"
                  name="range-km"
                  type="range"
                  min="0"
                  max="500"
                  value={rangeValue}
                  step="5"
                  onChange={(e) => setRangeValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Range;
