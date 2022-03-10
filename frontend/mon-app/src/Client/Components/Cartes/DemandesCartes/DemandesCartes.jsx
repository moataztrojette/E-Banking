import React from 'react'
const DemandesCartes = () => {
    return (
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xl-6 mb-xl-0 mb-4">
                  <div className="card bg-transparent shadow-xl">
                    <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
                      <span className="mask bg-gradient-dark" />
                      <div className="card-body position-relative z-index-1 p-3">
                        <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
                          <h6 className="text-white">COMPTE EN LIGNE </h6>
                        </div>
                        <h2 className="text-white">28 981,500 </h2>
                        <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 mb-xl-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header pb-0 p-3">
                      <div className="row">
                        <div className="col-md-8 d-flex align-items-center">
                          <h6 className="mb-0">Type de carte</h6>
                        </div>
                        <div className="col-md-4 text-end">
                          <a href="javascript:;">
                            <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-3">
                      <img className="w-60 mt-2" src="/img/cartes9.jpg" alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-lg-0 mb-4">
                  <div className="row mt-4">
                    <div>
                      <div className="card z-index-2">
                        <div className="card-header pb-0">
                          <div className="chart">
                            <canvas id="chart-bars" className="chart-canvas" style={{height: '10px'}} />
                          </div>
                          <h6>CARTE  TECHNOLOGIQUE </h6>
                          <p className="text-sm">
                            <span className="font-weight-bold">Une carte exceptionnelle pour des dépenses occasionnelles</span>
                          </p>
                        </div>
                        <div className="card-body p-3">
                          <div>
                            <div className="card-body pt-4 p-3">
                              <ul className="list-group">
                                <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                                    <span className="mb-2 text-xs">Plafond Global de la carte</span>
                                    <span className="text-dark font-weight-bold" style={{border: '1px solid', borderRadius: '10px', padding: '10px'}}>500,000 DT</span>                                  </div>
                                </li>
                                <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                                    <span className="mb-2 text-xs">Plafond retrait</span>
                                    <span className="text-dark font-weight-bold" style={{border: '1px solid', borderRadius: '10px', padding: '10px'}}>500,000 DT</span>
                                  </div>
                                </li>
                                <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                                    <span className="mb-2 text-xs">Plafond paiement</span>
                                    <span className="text-dark font-weight-bold" style={{border: '1px solid', borderRadius: '10px', padding: '10px'}}>0,000 DT</span>                              </div>
                                </li>
                                <li style={{listStyle: 'none'}}>
                                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                                    <button type="button" className="btn btn-success" style={{width: '100%'}}>Valider</button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  );
}
 
export default DemandesCartes;