import React, { useEffect, useState } from "react";
import Profil from "./Profil/Profil";
import axios from "axios";
import NavPage from "../Interface/NavPage/NavPage";
import Calendrier from "./Calendrier/Calendrier";


const TableauDeBord = () => {
  const [infoProfil, setInfoProfil] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:4000/api/cdc/profil").then((data) => {
      setInfoProfil(data.data);
    });

  }, []);

  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
            <Calendrier />
            </div>
          </div>
          <Profil infoProfil={infoProfil} setInfoProfil={setInfoProfil} />

        </div>
      </div>
    </>
  );
};

export default TableauDeBord;
