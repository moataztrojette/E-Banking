import React from 'react'
import NavPage from '../../Interface/NavPage/NavPage';

const Demandes = () => {
    return (
      <>
      <NavPage name="Demandes"/>
      <div className="container-fluid py-4">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-md-12 mb-lg-0 mb-4">
            <div className="row mt-4">
              <div>
                <div className="card z-index-2">
                  <div className="card-header pb-0">
                    <div className="chart">
                      <canvas id="chart-bars" className="chart-canvas" style={{height: '10px'}} />
                    </div>
                    <h6>Demandes </h6>
                    <p className="text-sm">
                      <span className="font-weight-bold">Veuillez trouver ici  les Demandes
                      </span>
                    </p>  
                  </div>
                  <div className="card-body p-3">
                    <div>
                      <div className="card-body pt-4 p-3">
                        <ul className="list-group">
                          <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                          <div className='bloc1'>
                                <div className='bloc2'>
                                <img src="https://img.icons8.com/external-others-iconmarket/64/4a90e2/external-calander-healthcare-and-medical-others-iconmarket.png" className='bloc3' />
                                <span>Demande de rendez-vous</span>
                              </div>
                              <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                            </div></li>
                          <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                          <div className='bloc1'>
                                <div className='bloc2'>
                                <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/4a90e2/external-hand-online-shopping-vitaliy-gorbachev-blue-vitaly-gorbachev.png" className='bloc3' />
                                <span>Demandes de fonds et de devis</span>
                              </div>
                              <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                            </div></li>
                          <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg">
                          <div className='bloc1'>
                                <div className='bloc2'>
                                <img src="https://img.icons8.com/ultraviolet/40/000000/check.png" className='bloc3' />
                                <span>Suivi des demandes</span>
                              </div>
                              <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                            </div></li>
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
  </div>
  </>
);
}
 
export default Demandes;