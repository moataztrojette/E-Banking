import React, { useEffect } from "react";
import axios from "axios";

const Carte = (props) => {
    return (
     <>
         {props.infoProfil.map((cl)=>(
      <div className="col-xl-6 mb-xl-0 mb-4">
    <div className="card bg-transparent shadow-xl">
      <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
        <span className="mask bg-gradient-dark" />
        <div className="card-body position-relative z-index-1 p-3">
          <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
            <h2 className="text-white">{cl.montant} </h2>
            <h3 className="text-white" style={{marginleft: '1px'}} > DT</h3>
          </div>
          <h5 className="text-white mt-4 mb-5 pb-2">RIB : {cl.rib}</h5>
        </div>
      </div>
    </div>
  </div> 
   ))}
   </>);
}
 
export default Carte;