import React from 'react'
import dateformat from 'dateformat'

const VirementEnvoyer = (props) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

    
    return (     <div className="accordion-item mb-3" style={{display:"flex",flexDirection:"column",width:"50em"}}>
    <h5 className="accordion-header" id="headingOne">
      <button
        className="accordion-button border-bottom font-weight-bold collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne"
      >
        Virements envoyés
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
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionRental"
 
    >
      <div className="accordion-body text-sm opacity-8" style={{display:"flex" ,flexDirection:"column"}}>
        {props.stateVirementEnvoyer.map((his) => (
          <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
            <div className="d-flex flex-column">
              <span className="mb-2 text-xs">
                Date Opération :{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                { dateformat(his.date , "dd mmmm yyyy") }   
                </span>
              </span>
              <span className="mb-2 text-xs">
                Nom bénéficiaire:{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                  {his.nomBeneficiaire}
                </span>
              </span>
              <span className="mb-2 text-xs">
                RIB bénéficiaire :{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {his.ribBeneficiaire}
                </span>
              </span>
              <span className="text-xs">
                Montant:{" "}
                <span className="text-danger ms-sm-2 font-weight-bold">
                  -{his.montant} DT
                </span>
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  </div>   );
}
 
export default VirementEnvoyer;