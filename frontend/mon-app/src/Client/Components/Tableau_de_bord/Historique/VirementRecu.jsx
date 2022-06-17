import React from 'react'
import dateformat from 'dateformat'

const VirementRecu = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


    return (    <div className="accordion-item mb-3" style={{display:"flex",flexDirection:"column",width:"50em"}}>
    <h5 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button border-bottom font-weight-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Virements reçus
        <i
          className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
          aria-hidden="true"
        />
        <i
          className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
          aria-hidden="true"
        />
      </button>
    </h5>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionRental"
    >
      <div className="accordion-body text-sm opacity-8" style={{display:"flex" ,flexDirection:"column",width:"100%"}}>
        {props.virementRecu.map((his) => (
          <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
            <div className="d-flex flex-column">
              <span className="mb-2 text-xs">
                Date Opération :{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                { dateformat((his.date.année+"-"+his.date.mois+"-"+his.date.jour), "dd mmmm yyyy") }   

                </span>
              </span>
              <span className="mb-2 text-xs">
              Nom d'expéditeur:{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                {his.id_user.id_client.prenom} {his.id_user.id_client.nom}
                </span>
              </span>
              <span className="mb-2 text-xs">
                RIB d'expéditeur :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {his.id_user.rib}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Agence :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                {his.id_user.id_client.id_agence.nom}
                </span>
              </span>
              <span className="mb-2 text-xs">
                 Heure de virement :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                {his.heure}
                </span>
              </span>
              <span className="text-xs">
                Montant:{" "}
                <span className="text-success

ms-sm-2 font-weight-bold">
                  +{his.montant} DT
                </span>
              </span>
            </div>
          </li>
        ))}{" "}
      </div>
    </div>
  </div>  );
}
 
export default VirementRecu;