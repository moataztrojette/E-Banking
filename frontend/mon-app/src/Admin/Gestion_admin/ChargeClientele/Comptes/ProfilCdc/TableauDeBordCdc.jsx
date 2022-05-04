import React, { useEffect, useState } from "react";
import Profil from "./Profil/Profil";
import axios from "axios";
import NavPage from "../../../../Interface/NavPage/NavPage";
import Choix from "./Choix/Choix";

const TableauDeBordCdc = (props) => {

  const [sateProfil, setProfil] = useState([]);
 

  useEffect(()=>{
      
    axios.get("http://localhost:4000/api/cdc/find/"+props.match.params.id).then((compte) => {
      setProfil(compte.data);
    });
 
  },[])


  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4" style={{backgroundColor:"#EFF1F5"}}>
      <Choix  id={props.match.params.id} />

              <Profil sateProfil={sateProfil} setProfil={setProfil}  />
         

  
      </div>
    </>
  );
};

export default TableauDeBordCdc;
