import React from 'react'
import NavPage from '../Interface/NavPage/NavPage';
const Demandes = () => {
    return (<>
    <NavPage name="Demandes"/>
    <div className="container-fluid py-7" style={{marginTop:'-60px'}}>
      <div className="row" style={{marginLeft: '3em'}}>
        <div className="col-lg-11">
          <div className="row_type_cheque">
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                <div className="full-background" />
                <div className="card-body text-start p-4 w-100">
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                      <img src="/img/icons8-cards-64.png" alt="erreur_1" style={{width: '8em'}} />
                      </div>
                   
                  </div>
                      <h5>CARTES</h5>
                      <p>Le chèque fait partie des effets de commerce. Il est tiré sur une banque ou un établissement financier constituant pour la personne à laquelle il est remis</p>
                  <div className="docs-info" style={{marginTop: '5em'}}>
                    <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" rel="noopener noreferrer" className="btn btn-white btn-sm w-100 mb-0">Voir</a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                <div className="full-background" />
                <div className="card-body text-start p-4 w-100">
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                    <img src="/img/check-svgrepo-com (1).svg"   alt="erreur_1" style={{width: '8em'}}  />

                     </div>
                   
                  </div>
                  <h5>CHÈQUES</h5>
                      <p>Le chèque fait partie des effets de commerce. Il est tiré sur une banque ou un établissement financier constituant pour la personne à laquelle il est remis</p>
                  <div className="docs-info" style={{marginTop: '5em'}}>
                  <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" rel="noreferrer" className="btn btn-white btn-sm w-100 mb-0">Voir</a>
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
 
export default Demandes;