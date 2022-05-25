import axios from "axios";
import React, { useEffect, useState } from "react";
import AjouterBeneficiaires from "./AjouterBénéficiaires/AjouterBeneficiaires";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Beneficiaires  = () => {
    const [Listebeneficiaires,setListeBeneficiaires] = useState([]);
    const[modalIsOpen,setModalIsOpen] = useState(false);
    const [valuesInput,setValues] = useState({});

  useEffect(()=>{


    axios.get("http://localhost:4000/api/virement/beneficiaires").then((data)=>{
    
     
        setListeBeneficiaires(data.data)
    })
  },[])

  


    return (
        
        <div className="row">

        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Bénéficiaires</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom Prénom bénéficiaire</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rib bénéficiaire</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                    </tr>
                  </thead>
                  {Listebeneficiaires.map((data)=>(
                  <tbody>
                  <tr>
                          
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">{data.id_compte_beneficiaire.id_client.nom} {data.id_compte_beneficiaire.id_client.prenom }</span>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-secondary text-xs font-weight-bold">{data.id_compte_beneficiaire.rib}</span>
                          </td>
                        <td class="align-middle text-center text-sm">
                      
                        </td>
                        <td  class="align-middle text-center text-sm">
                        <Link to ={'/client/virements/beneficiaires/'+data.id_compte_beneficiaire._id}><img
                          src="/img/icons8-view-64.png"
                          className="icon_trash"
                        /></Link>
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
 
export default Beneficiaires ;