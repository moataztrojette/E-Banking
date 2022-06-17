import React from 'react'
import { Link } from 'react-router-dom';
import NavPage from '../Interface/NavPage/NavPage';

const Demandes = () => {
    return (<>
    <NavPage name="Demandes"/>
    <div className="container-fluid py-7" style={{marginTop:'-60px'}}>
      <div className="row" style={{marginLeft: '3em'}}>

          <div className="row_demande" >
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                
                <div style={{width:"20em",padding:"2em"}}>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                      <img src="/img/icons8-cards-64.png" alt="erreur_1" style={{width: '5em'}} />
                      </div>
                   
                  </div>
                      <h5>Cartes</h5>
                      <p>Voici les demandes des cartes bancaires</p>
                      <br />
                      <br />
                      <br />
                      
                </div>
              </div>
              <Link to={'/cdc/demandes/cartes/choix'}><button  type="button"  className="btn-voir">Voir</button></Link>

            </div>
           
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
              <div style={{width:"20em",padding:"2em"}}>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                    <img src="/img/check-svgrepo-com (1).svg"   alt="erreur_1" style={{width: '5em'}}  />

                     </div>
                   
                  </div>
                  <h5>Carnet de chèques</h5>
                  <p>Voici les demandes des carnet de chèques</p>
                      <br />
                      <br />
                      <br />
                      
                </div>
              </div>
              <Link to={'/cdc/demandes/carnet'}><button  type="button"  className="btn-voir">Voir</button></Link>

            </div>

            <div className="col_cheque">
            <div className="card card-background " id="sidenavCard" >
              <div style={{width:"20em",padding:"2em"}}>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                    <img src="/img/RDV-Online.png"   alt="erreur_1" style={{width: '10em'}}  />

                     </div>
                   
                  </div>
                  <h5>Les rendez vous en ligne</h5>
                  <p>Voici les demandes des rendez-vous en ligne</p>
                      <br />
                      <br />
                      <br />
                      
                </div>
              </div>

              <Link to={'/cdc/demandes/rdv'}><button  type="button"  className="btn-voir">Voir</button></Link>
           
            </div>

            <div className="col_cheque">
            <div className="card card-background " id="sidenavCard" >
              <div style={{width:"20em",padding:"2em"}}>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                    <img src="/img/icons8-close-58.png"   alt="erreur_1" style={{width: '6em'}}  />

                     </div>
                   
                  </div>
                  <h5>Demande de désactivation/d'activation de comptes bancaire</h5>
                  <p>Voici les demandes de désactivation/d'activation des comptes bancaires</p>
                      <br />
                      <br />
                      <br />
                 
                </div>
              </div>

              <Link to={'/cdc/demandes/fermeture'}><button  type="button"  className="btn-voir">Voir</button></Link>
           
            </div>

           


           

         

          </div>
      </div>
    </div>
    
    </>  );
}
 
export default Demandes;