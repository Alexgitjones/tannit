import React from 'react'

export default function Donecard() {
  return (
    <body>
    <div className="container" style={{'max-width': '477px'}} >
    <div className="row main-card-row ">
       <div className="col-12 done-col d-flex align-item-center m-0">
           <img src="assets/images/flowers2.png" alt=""/>
           <h4>Well done</h4>
           <p>You have successfuly made your first investment, make sure you follow the progress in your investments page</p>
           <button className="done-card-btn1">My investments</button>
           <button className="done-card-btn2">All properties</button>
       </div>
   </div>
   </div>   
   </body>
    );
 }
 
