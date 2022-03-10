import React from 'react';

const Historique = () => {
    return ( <div className="row">
    <div className="col-md-12 mt-4">
      <div className="card">
        <div className="card-header pb-0 px-3" style={{display: 'flex', alignItems: 'center'}}>
          <h6 className="mb-0">Mon historique</h6>
          <img src="/img/icons8-payment-32.png" alt="" srcSet style={{width: '25px', marginLeft: '10px', marginBottom: '10px'}} />
        </div>
        <div className="card-body pt-4 p-3">
          <ul className="list-group">
            <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
              <div className="d-flex flex-column">
                <span className="mb-2 text-xs">Date Opération
                  : <span className="text-dark font-weight-bold ms-sm-2">
                    09/02/2022</span></span>
                <span className="mb-2 text-xs">Opération: <span className="text-dark font-weight-bold ms-sm-2">retrait espèces</span></span>
                <span className="mb-2 text-xs">Type d'opération
                  : <span className="text-dark ms-sm-2 font-weight-bold">RETRAIT ESPECES</span></span>
                <span className="text-xs">Montant: <span className="text-dark ms-sm-2 font-weight-bold">-450,000 DT</span></span>
              </div>
            </li>
            <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
              <div className="d-flex flex-column">
                <span className="mb-2 text-xs">Date Opération
                  : <span className="text-dark font-weight-bold ms-sm-2">
                    09/02/2022</span></span>
                <span className="mb-2 text-xs">Opération: <span className="text-dark font-weight-bold ms-sm-2">retrait espèces</span></span>
                <span className="mb-2 text-xs">Type d'opération
                  : <span className="text-dark ms-sm-2 font-weight-bold">RETRAIT ESPECES</span></span>
                <span className="text-xs">Montant: <span className="text-dark ms-sm-2 font-weight-bold">-450,000 DT</span></span>
              </div>
            </li>
            <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
              <div className="d-flex flex-column">
                <span className="mb-2 text-xs">Date Opération
                  : <span className="text-dark font-weight-bold ms-sm-2">
                    09/02/2022</span></span>
                <span className="mb-2 text-xs">Opération: <span className="text-dark font-weight-bold ms-sm-2">retrait espèces</span></span>
                <span className="mb-2 text-xs">Type d'opération
                  : <span className="text-dark ms-sm-2 font-weight-bold">RETRAIT ESPECES</span></span>
                <span className="text-xs">Montant: <span className="text-dark ms-sm-2 font-weight-bold">-450,000 DT</span></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  );
}
 
export default Historique;