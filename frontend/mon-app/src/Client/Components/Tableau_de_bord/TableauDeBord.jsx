import React from "react";
import NavPage from "../../Interface/NavPage/NavPage";
import ChargesClienteles from "./ChargesClienteles/ChargesClienteles";
import Historique from "./Historique/Historique";
import Profil from "./Profil/Profil";
import Statistique from "./Statistique/Statistque";

const TableauDeBord = () => {
    return (
      <>
      <NavPage name="Tableau de bord"/>

          <div className="container-fluid py-4">

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
            <Profil/>
            <Statistique/> 
            </div>
          </div>
         <ChargesClienteles/>
        </div>
       <Historique/>
      </div>
      </>
     );
}
 
export default TableauDeBord;