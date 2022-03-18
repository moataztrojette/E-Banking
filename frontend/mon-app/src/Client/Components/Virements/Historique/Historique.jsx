import axios from "axios";
import React, { useEffect, useState } from "react";

const Historique = () => {

  const [listeHistorique,setListeHistorique] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:4000/api/virement/historique").then((his)=>{
      setListeHistorique(his.data)
    })
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
        <div className="card-body px-0 pt-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date Opération</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom Beneficiaire</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rib Beneficiaire</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Montant</th>
          
                </tr>
              </thead>
              {listeHistorique.map((his)=>(
              <tbody>
              <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                     
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{his.date}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">{his.nomBeneficiaire}</span>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-gradient-success">{his.ribBeneficiaire}</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold text-danger">-{his.montant} DT</span>
                      </td>
                  
                    </tr>
              
              
                
               
                 
              </tbody>
                        ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>  );
}
 
export default Historique;