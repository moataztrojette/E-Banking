import React from 'react';
import { Link } from 'react-router-dom';

const Choix = (props) => {
    return ( <div className="col-12 col-xl-4">
    <div className="card h-100">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Informations</h6>
      </div>
      <div className="card-body p-3">
        <ul className="list-group">
          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
            <div className="avatar me-3">
            <img src="https://img.icons8.com/emoji/48/4a90e2/clipboard-emoji.png" alt="erreur_1" className='imgWM'/>
            </div>
            <div className="d-flex align-items-start flex-column justify-content-center ">
              <h6 className="mb-0 text-sm" style={{marginRight:"10em"}} >Consulter les comptes bancaires créés</h6>
              
            </div>
            <Link to={'/admin/cdc/liste/profil/compte_créés/'+props.id}> <a href={() => false} 
 className="btn btn-link pe-3 ps-0 mb-0 ms-auto" >Voir</a></Link>
          </li>

          <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
            <div className="avatar me-3">
            <img src="https://img.icons8.com/emoji/48/4a90e2/clipboard-emoji.png" alt="erreur_1" className='imgWM'/>
            </div>
            <div className="d-flex align-items-start flex-column justify-content-center ">
              <h6 className="mb-0 text-sm" style={{marginRight:"10em"}} >Consulter les carnet chéques validées</h6>
              
            </div>
            <Link to={'/admin/cdc/liste/profil/carnet_valider/'+props.id}> <a href={() => false} 
 className="btn btn-link pe-3 ps-0 mb-0 ms-auto" >Voir</a></Link>
          </li>

       
      
       
        </ul>
      </div>
    </div>
  </div>  );
}
 
export default Choix;