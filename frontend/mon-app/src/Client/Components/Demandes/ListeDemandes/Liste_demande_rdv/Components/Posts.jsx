import React, {useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import dateformat from 'dateformat'
import ModalResultat from "./ModalResultat";
import ModalPropositionRDV from "./ModalPropositionRDV";


const Posts = ({ posts, loading,setPosts}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stateIdDemande, setStateIdDemande] = useState({});
  const [modalIsOpenProposition, setModalIsOpenProposition] = useState(false);

  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const AnnulerR = async (id) => {
    await axios
      .delete("http://localhost:4000/api/rdv/delete/" + id)
      .then((verife) => {
        if (verife.status != 200)
        {
          Swal.fire("Deleted!", "Your file has been deleted.", "error");
        } 
        else
         {
          const preventStatu = posts;
          const newState = preventStatu.filter((dev) => dev._id != id);
          setPosts(newState);
          Swal.fire("Rendez-vous", "Le rendez vous a été annulé ", "success");
        }
      });
  };


  return (
    <div className="row">

{modalIsOpen === true ? (
        <ModalResultat
        
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          stateIdDemande={stateIdDemande}
          setStateIdDemande={setStateIdDemande}
  
        />
      ) : (
        <div></div>
      )}

{modalIsOpenProposition === true ? (
        <ModalPropositionRDV
        
        modalIsOpenProposition={modalIsOpenProposition}
        setModalIsOpenProposition={setModalIsOpenProposition}
          stateIdDemande={stateIdDemande}
          setStateIdDemande={setStateIdDemande}
  
        />
      ) : (
        <div></div>
      )}


    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des rendez-vous</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                   La Date de rendez-vous{" "}
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  L'heure de rendez-vous

                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Motif
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Resultat
                  </th>

                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Proposition RDV
                  </th>

                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Annulation de réunion

                  </th>
                  
                  
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
                  
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">                { dateformat(c.date , "dd mmmm yyyy") }   
</h6>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.heure}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.motif}
                    </span>
                  </td>

    
 {c.etat_demande=="valider" ? (   <td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateIdDemande(c);
                        }}
                      >
                        <button class="btn btn-success">
                        Voir
                        </button>
                      </td>) : (<><td></td></>)}
               
{c.etat_demande =="refuser" ? ( <td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpenProposition(true);
                          setStateIdDemande(c);
                        }}
                      >
                        <button class="btn btn-success">
                        Voir
                        </button>
                      </td>) : (<td></td>)}
                     



{c.etat_demande == "en attente" ? (<td class="align-middle text-center text-sm">
     <img src="/img/icons8-close-64.png" className="link_meet" onClick={() => {
                      Swal.fire({
                        title: "Êtes - vous sûr  ?",
                        text: "",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Oui, Annuler le rendez-vous!",
                      }).then((result) => {
                        if (result.value) {
                          AnnulerR(c._id);
                        }
                      });
                    }} ></img>
      </td>
                   ) : (<td class="align-middle text-center text-sm"></td>)}
         
               
            {c.etat_demande=="valider" ? (<>
                <img src="/img/icons8-check-mark-48.png" style={{width:"3em"}}/>
            </>) :(<></>)}


            {c.etat_demande=="refuser" ? (<>
                <img src="/img/icons8-close-64.png" style={{width:"3em"}}/>
            </>) :(<></>)}

               
                </tr>
              </tbody>
               ))}
            </table>
          </div>
         
          </div>
     
      </div>
    </div>
  </div>
  );
  
};

export default Posts;