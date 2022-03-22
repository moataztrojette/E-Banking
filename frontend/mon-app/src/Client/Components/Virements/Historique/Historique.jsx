import axios from "axios";
import React, { useEffect, useState } from "react";

const Historique = () => {

  const [virementEnvoyer, setVirementEnvoyer] = useState([]);
  const [virementRecu, setVirementRecu] = useState([]);
  useEffect(()=>{


    axios
    .get("http://localhost:4000/api/virement/envoyer")
    .then((his) => {
      setVirementEnvoyer(his.data);
    });

  axios.get("http://localhost:4000/api/virement/recu").then((his) => {
    setVirementRecu(his.data);
  });


  },[])

    return (
  


    <div className="row">
        <div className='filter_historique'>
    <select class="form-select_annee" aria-label="Default select example">
  <option selected>Année</option>
  <option value="1">2020</option>
  <option value="2">2021</option>
</select>
<select class="form-select_date_deb" aria-label="Default select example">
  <option selected>Date de début</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<select class="form-select_date_fin" aria-label="Default select example">
  <option selected>Date de Fin</option>
  <option value="1">15</option>
  <option value="2">16</option>
  <option value="3">17</option>
</select>
<div class="input-group">
 
  <button type="button" class="btn btn-primary" >
    <i class="fas fa-search"></i>
  </button>
</div>

</div>
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Historique</h6>
        </div>
        <div class="slider_his">
  <div className='silder_btn'>
  <a href="#slide-1" className='btn_virement_2'>Virement envoyer </a>
  
  <a href="#slide-2" className='btn_virement_1'>Virement reçu</a>
  </div>

  <div class="slides_his">
    <div id="slide-1">
    <div className="card-body pt-4 p-3">
          <ul className="list-group">
          {virementEnvoyer.map((his) => (

<li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
<div className="d-flex flex-column">
  <span className="mb-2 text-xs">
    Date Opération :{" "}
    <span className="text-dark font-weight-bold ms-sm-2">
      {his.date}
    </span>
  </span>
  <span className="mb-2 text-xs">
    Nom bénéficiaire:{" "}
    <span className="text-dark font-weight-bold ms-sm-2">
      {his.nomBeneficiaire}
    </span>
  </span>
  <span className="mb-2 text-xs">
    RIB bénéficiaire :{" "}
    <span className="text-dark ms-sm-2 font-weight-bold">
      {his.ribBeneficiaire}
    </span>
  </span>
  <span className="text-xs">
    Montant:{" "}
    <span className="text-danger ms-sm-2 font-weight-bold">
      -{his.montant} DT
    </span>
  </span>
</div>
</li>
               ))}
       
          </ul>
        </div>
    </div>
    <div id="slide-2">
    <div className="card-body pt-4 p-3">
          <ul className="list-group">
          {virementRecu.map((his) => (
           <li className="bloc4 border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
           <div className="d-flex flex-column">
             <span className="mb-2 text-xs">
               Date Opération :{" "}
               <span className="text-dark font-weight-bold ms-sm-2">
                 {his.date}
               </span>
             </span>
             <span className="mb-2 text-xs">
               Nom bénéficiaire:{" "}
               <span className="text-dark font-weight-bold ms-sm-2">
                 {his.id_user.nom}
               </span>
             </span>
             <span className="mb-2 text-xs">
               RIB bénéficiaire :{" "}
               <span className="text-dark ms-sm-2 font-weight-bold">
                 {his.id_user.rib}
               </span>
             </span>
             <span className="text-xs">
               Montant:{" "}
               <span className="text-success ms-sm-2 font-weight-bold">
                 + {his.montant} DT
               </span>
             </span>
           </div>
           </li>
         
         ))}
          </ul>
        </div>
    </div>
 
  </div>
</div>
      </div>
    </div>
  </div>  );
}
 
export default Historique;