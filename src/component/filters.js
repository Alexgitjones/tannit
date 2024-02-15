import React from 'react'

export default function Filters() {
  return (
<div class="container main-filter-list">
        <h3 class="filter-list-heading">Advanced filter</h3>

        <h3 class="price-list-heading">Risk</h3>
        
        <div class="radio-prce-list">    
        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault25"/>
        <label class="form-check-label rpl" for="flexRadioDefault25"> No risk <span>4</span> </label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault26"/>
        <label class="form-check-label rpl " for="flexRadioDefault26">Individual risk <span>12</span></label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault27"/>
        <label class="form-check-label rpl" for="flexRadioDefault27">Environmental risk <span>5</span></label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault28"/>
        <label class="form-check-label rpl" for="flexRadioDefault28">Geopolitical risk<span>32</span></label>
        </div>
        </div>

         <h3 class="price-list-heading">Date</h3>

        <div class="radio-prce-list">    
        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault29"/>
        <label class="form-check-label rpl" for="flexRadioDefault29"> The most recent <span>4</span> </label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault30"/>
        <label class="form-check-label rpl" for="flexRadioDefault30">The least recent <span>4</span></label>
        </div>
        </div>

        <h3 class="price-list-heading">Land area</h3>

        <div class="radio-prce-list">    
        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault31"/>
        <label class="form-check-label rpl" for="flexRadioDefault31"> Maximum<span>4</span> </label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault32"/>
        <label class="form-check-label rpl" for="flexRadioDefault32">Minimum <span>4</span></label>
        </div>
        </div>
        <h3 class="price-list-heading">Habitable surface</h3>

        <div class="radio-prce-list">    
        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault33"/>
        <label class="form-check-label rpl" for="flexRadioDefault33"> Maximum m2<span>4</span> </label>
        </div>

        <div class="form-check main-lr">
        <input class="form-check-input square-input-check" type="radio" name="flexRadioDefault" id="flexRadioDefault34"/>
        <label class="form-check-label rpl" for="flexRadioDefault34">Minimum m2<span>4</span></label>
        </div>
        </div>

        <div class="two-btn-last-grp">
            <button class="norm-btn">Reset all</button>
            <button class="not-norm-btn">Show results</button>
        </div>
    </div>
    );
 }
 
