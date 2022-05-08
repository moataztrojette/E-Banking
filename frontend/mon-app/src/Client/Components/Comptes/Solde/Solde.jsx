import React from "react";
import { Link } from "react-router-dom";

const Solde = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
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
            <Link to={'/client/comptes/rib'}> <img src="/img/download-svgrepo-com (1).svg" alt="erreur_1" style={{width: '20px', marginLeft: '50px'}} />
              <h6>Télécharger RIB</h6></Link>
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