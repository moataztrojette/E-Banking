import React from 'react';
import NavPage from '../../Interface/NavPage/NavPage';
import Carte from './Carte/Cartes';
import Historique from './Historique/Historique';
import Solde from './Solde/Solde';

const Comptes = () => {

    return (
      <>
      <NavPage name="Comptes"/>
      <div className="container-fluid py-4">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
        <Carte/>
        <Solde/>    
        </div>
      </div>
      <Historique/>
    </div>
 
  </div> </> );
}
 
export default Comptes;