import React from 'react';
import { Link } from 'react-router-dom';

const Choix = (props) => {
    return (   <div className="List_information_cdc">
    <div className="info_cdc">
      <div className="img_text_cdc">
        <img src="/img/icons8-web-account-64.png" className="icons" alt="" />
        <h6 className="mb-0 text-sm" style={{marginRight:"10em"}} >Consulter les comptes bancaires créés</h6>
      </div>
      <Link to={'/admin/cdc/liste/profil/compte_créés/'+props.id}> <a href={() => false} 
 className="btn btn-link pe-3 ps-0 mb-0 ms-auto" >Voir</a></Link>    </div>
    <div className="info_cdc">
      <div className="img_text_cdc">
        <img src="/img/icons8-cheque-64.png" className="icons" alt="" />
        <h6 className="mb-0 text-sm" style={{marginRight:"10em"}} >Consulter les carnet de chéques validées</h6>
      </div>
      <Link to={'/admin/cdc/liste/profil/carnet_valider/'+props.id}> <a href={() => false} 
 className="btn btn-link pe-3 ps-0 mb-0 ms-auto" >Voir</a></Link>    </div>
    <div className="info_cdc">
      <div className="img_text_cdc">
        <img src="/img/icons8-bank-cards-100.png" className="icons" alt="" />
        <h6 className="mb-0 text-sm" style={{marginRight:"10em"}} >Consulter les cartes bancaires validées</h6>
      </div>
      <Link to={'/admin/cdc/liste/profil/carte_valider/'+props.id}> <a href={() => false} 
 className="btn btn-link pe-3 ps-0 mb-0 ms-auto" >Voir</a></Link>    </div>
  </div> );
}
 
export default Choix;