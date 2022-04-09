import React, { useEffect, useState } from "react";
import NavPage from "../../Interface/NavPage/NavPage";
import ChargesClienteles from "./ChargesClienteles/ChargesClienteles";

import Profil from "./Profil/Profil";
import Statistique from "./Statistique/Statistque";
import axios from "axios";
import Historique from "./Historique/Historique";
import VirementRecu  from "./Historique/VirementRecu";

const TableauDeBord = () => {
  const [infoProfil, setInfoProfil] = useState([]);
  const [client, setClient] = useState([]);
  const [historique, setHistorique] = useState([]);
  const [virementRecu, setVirementRecu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/compte/profil").then((compte) => {
      setInfoProfil(compte.data);
     
    });
    axios.get("http://localhost:4000/api/client/find").then((client) => {
      setClient(client.data);
     
    });

    axios
      .get("http://localhost:4000/api/virement/dernier/envoyer")
      .then((his) => {
        setHistorique(his.data);
      });

    axios.get("http://localhost:4000/api/virement/dernier/recu").then((his) => {
      setVirementRecu(his.data);
    });
  }, []);

  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Profil infoProfil={infoProfil} setInfoProfil={setInfoProfil} client={client} setClient={setClient}/>
              <Statistique />
            </div>
          </div>
          <ChargesClienteles />
        </div>

        <div className="accordion-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="accordion" id="accordionRental" style={{display:"flex" ,marginTop:"4em",marginLeft:"-30px"}}>
                 <Historique historique={historique} setHistorique={setHistorique} />
                  <VirementRecu virementRecu={virementRecu} setVirementRecu={setVirementRecu}/>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableauDeBord;
