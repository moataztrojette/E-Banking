import React, { useEffect, useState } from "react";
import NavPage from '../../Interface/NavPage/NavPage';
import Carte from './Carte/Cartes';
import Historique from './Historique/Historique';
import Solde from './Solde/Solde';
import axios from "axios";

const Comptes = () => {
  const [infoProfil, setInfoProfil] = useState([]);
  const [virementEnvoyer, setVirementEnvoyer] = useState([]);
  const [virementRecu, setVirementRecu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/compte/profil").then((compte) => {
      setInfoProfil(compte.data);
    });

    axios
    .get("http://localhost:4000/api/virement/envoyer")
    .then((his) => {
      setVirementEnvoyer(his.data);
    });

  axios.get("http://localhost:4000/api/virement/recu").then((his) => {
    setVirementRecu(his.data);
  });


  }, []);
    return (
      <>
      <NavPage name="Comptes"/>
      <div className="container-fluid py-4">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
        <Carte infoProfil={infoProfil} setInfoProfil={setInfoProfil} />
        <Solde infoProfil={infoProfil} setInfoProfil={setInfoProfil}/>    
        </div>
      </div>
      <Historique virementEnvoyer={virementEnvoyer} setVirementEnvoyer={setVirementEnvoyer} virementRecu={virementRecu} setVirementRecu={setVirementRecu} />
    

    </div>
 
  </div> </> );
}
 
export default Comptes;