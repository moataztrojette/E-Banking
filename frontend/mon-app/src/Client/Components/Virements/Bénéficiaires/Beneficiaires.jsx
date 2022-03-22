import axios from "axios";
import React, { useEffect, useState } from "react";
import AjouterBeneficiaires from "./AjouterBénéficiaires/AjouterBeneficiaires";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";


const Beneficiaires  = () => {
    const [Listebeneficiaires,setListeBeneficiaires] = useState([]);
    const[modalIsOpen,setModalIsOpen] = useState(false);
    const [valuesInput,setValues] = useState({});

  useEffect(()=>{

    axios.get("http://localhost:4000/api/beneficiaire/find").then((data)=>{
        setListeBeneficiaires(data.data)
    })
  },[])

  const deleteBeneficiaire = async (id) => {
    await axios
      .delete("http://localhost:4000/api/beneficiaire/delete/" + id)
      .then((verife) => {
        if (verife.status != 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } else {
          const preventStatu = Listebeneficiaires;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setListeBeneficiaires(newState);
          Swal.fire("Beneficiaire", "Beneficiaire has been deleted", "success");
        }
      });
  };



    return (
        
        <div className="row">
                {modalIsOpen === true ? (<AjouterBeneficiaires  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} valuesInput={valuesInput} setValues={setValues} Listebeneficiaires={Listebeneficiaires} setListeBeneficiaires={setListeBeneficiaires} />) : (<div></div>)  } 

            <button type="button" class="btn_add_beneficiares"  onClick={()=>setModalIsOpen(true)}>Ajouter un bénéficiaire </button>
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
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom Prénom Beneficiaire</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rib Beneficiaire</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>

                    </tr>
                  </thead>
                  {Listebeneficiaires.map((data)=>(
                  <tbody>
                  <tr>
                          
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">{data.nom}</span>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success">{data.rib}</span>
                          </td>
                        <td class="align-middle text-center text-sm">
                       <img src="/img/icons8-trash.gif" className="icon_trash"  onClick={() => {
                      Swal.fire({
                        title: "Êtes - vous sûr ?",
                        text: "",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Oui, supprimez-le!",
                      }).then((result) => {
                        if (result.value) {
                          deleteBeneficiaire(data._id);
                        }
                      });
                    }}/>
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