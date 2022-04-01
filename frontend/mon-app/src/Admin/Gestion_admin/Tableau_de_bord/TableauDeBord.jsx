import React, { useEffect, useState } from "react";
import Profil from "./Profil/Profil";
import NavPage from "../../Interface/NavPage/NavPage";


const TableauDeBord = () => {


  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Profil  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableauDeBord;
