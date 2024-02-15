import React from 'react'

export default function Pricerange() {
  return (
    <div class="container main-price-list">
        <h3 class="price-list-heading">Select price range</h3>
        <div class="radio-prce-list">
            
        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label rpl" for="flexRadioDefault1"> 1£ - 999£ <span>4</span> </label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault22"/>
        <label class="form-check-label rpl " for="flexRadioDefault22">1000£ - 1500£ <span>32</span></label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault23"/>
        <label class="form-check-label rpl" for="flexRadioDefault23">1501£ - 2999£ <span>5</span></label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault24"/>
        <label class="form-check-label rpl" for="flexRadioDefault24">3000£ + <span>12</span></label>
        </div>

        </div>
        <div class="two-btn-last-grp">
            <button class="norm-btn">Reset all</button>
            <button class="not-norm-btn">Apply</button>
        </div>
    </div>
    );
 }
 
