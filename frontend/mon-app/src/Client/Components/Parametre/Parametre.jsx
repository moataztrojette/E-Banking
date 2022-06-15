import React from 'react'
import NavPage from '../../Interface/NavPage/NavPage';
import { Link } from 'react-router-dom';


const Parametre  = () => {
    return (   <>
        <NavPage name="Parametres"/>
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
                      <h6>Paramètres </h6>
                      <p className="text-sm">
                        <span className="font-weight-bold">Veuillez trouver ici  les paramètres
                        </span>
                      </p>  
                    </div>
                    <div className="card-body p-3">
                      <div>
                        <div className="card-body pt-4 p-3">
                          <ul className="list-group">
                          <Link to ={'/client/parametre/changepassword'}><li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                            <div className='bloc1'>
                                  <div className='bloc2'>
                                  <img src="/img/icons8-password-64.png" alt="erreur_1" style={{width: '40px'}} />                                
                                  <span>Modification du mot de passe</span>
                                </div>
                              </div></li></Link>
            
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
    </>  );
}
 
export default Parametre ;