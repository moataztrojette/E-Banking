import React, { useEffect } from "react";
import axios from "axios";

const Solde = (props) => {
    return (<>
    {props.infoProfil.map((cl)=>(
      <div className="col-md-12 mt-4">
    <div className="row mt-4">
      <div>
        <div className="card z-index-2">
          <div className="card-header pb-0" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <h5>Solde : </h5>
              <div>
                <h5 className="font-weight-bold">{cl.montant}  DT </h5> 
              </div>
            </div>
            <div>
              <img src="/img/download-svgrepo-com (1).svg" style={{width: '20px', marginLeft: '50px'}} />
              <h6>Télécharger RIB</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   ))}
  </>  );
}
 
export default Solde;