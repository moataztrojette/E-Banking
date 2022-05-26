import React, { useEffect, useState } from "react";
import Profil from "./Profil/Profil";
import Statistique from "./Statistique/Statistque";
import VirementRecu  from "./Historique/DernierVirements/VirementRecu";
import VirementEnvoyer  from "./Historique/DernierVirements/VirementEnvoyer";
import NavPage from "../../../Interface/NavPage/NavPage";
import axios from "axios";
import dateformat from 'dateformat'
import ChargesClienteles from "./Historique/ChargesClienteles";

const TableauDeBordClient = (props) => {

  const [sateProfil, setProfil] = useState([]);
  const [stateVirementEnvoyer, setVirementEnvoyer] = useState([]);
  const [stateVirementRecu, setVirementRecu] = useState([]);
  const [stateDate,setDate] = useState([])
  const [stateMontant,setMontant] = useState([])    
  const [dateValues,setDateValues] = useState([]);  

  useEffect(()=>{
      
    let  date = [];
    let montant = [];
  

    axios.get("http://localhost:4000/api/compte/user/"+props.match.params.id).then((compte) => {
      setProfil(compte.data);
      console.log(sateProfil)
    });
    axios
      .get("http://localhost:4000/api/virement/dernier/envoyer/"+props.match.params.id)
      .then((his) => {
        setVirementEnvoyer(his.data);
      });

    axios.get("http://localhost:4000/api/virement/dernier/recu/"+props.match.params.id).then((his) => {
      setVirementRecu(his.data);
    });

    axios.get("http://localhost:4000/api/historique/user/stat/"+props.match.params.id).then((fact)=>{

      for(const dataObj of fact.data){

       
          date.push(dateformat(dataObj.date , "mmmm"))
          montant.push(dataObj.montant)
         
      }
  
      
      let uniqueArray = {}
      date.forEach(function(item, pos) {
          if(date.indexOf(item) == pos){
           uniqueArray[item] = {shown:false,pos} ;
          }
      });
      setDateValues(uniqueArray)
      setDate(date)
      setMontant(montant)
  })

    //console.log(props.match.params.id)

  },[])


 
  


  return (
    <>
      <NavPage name="Tableau de bord" />

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <Profil sateProfil={sateProfil} setProfil={setProfil}  />
              <Statistique stateDate={stateDate}  stateMontant={stateMontant} dateValues={dateValues} setDateValues={setDateValues} />
            </div>
          </div>
          <ChargesClienteles id={props.match.params.id} />
        </div>

        <div className="accordion-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="accordion" id="accordionRental" style={{display:"flex" ,marginTop:"4em",marginLeft:"-30px"}}>
                 <VirementEnvoyer  stateVirementEnvoyer={stateVirementEnvoyer} setVirementEnvoyer={setVirementEnvoyer} />
                  <VirementRecu stateVirementRecu={stateVirementRecu} setVirementRecu={setVirementRecu} />
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableauDeBordClient;
