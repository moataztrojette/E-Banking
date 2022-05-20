import React, { useEffect, useState } from "react";

import Profil from "./Profil/Profil";
import NavPage from "../../Interface/NavPage/NavPage";
import axios from "axios";
import Stat_agences from "./Statistiques/Components/Stat_agences";
import Stat_nb_compte_selon_agence from "./Statistiques/Components/Stat_nb_compte_selon_agence";

const TableauDeBord = () => {
  const [taux, setTaux] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:4000/api/taux").then((data) => {
      setTaux(data.data);
    });
  }, []);


 


  

 
  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4">

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Profil taux={taux} />
            <div className="bloc_stat" >
              <div>
              <Stat_agences/>

              </div>
              <div>            
              <Stat_nb_compte_selon_agence/>

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
