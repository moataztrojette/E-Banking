import React, { useEffect,useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import "react-datepicker/dist/react-datepicker.css";
import Modal_valider_demande_carte from "./Modal_valider_demande_carte";
import Modal_refuser_demande_carte from "./Modal_refuser_demande_carte";

import dateformat from 'dateformat'


const Posts = ({ posts, loading,setPosts }) => {
  const [modalIsOpenAccepterDemande, setModalIsOpenAccepterDemande] = useState(false);
  const [modalIsOpenRefusDemande, setModalIsOpenRefusDemande] = useState(false);

  const [stateUserId, setStateUserId] = useState({});






  if (loading) {
    return <h2>Loading...</h2>;
  }


  
  

  return (
    <div className="row">

{modalIsOpenAccepterDemande === true ? (
        <Modal_valider_demande_carte
          modalIsOpenAccepterDemande={modalIsOpenAccepterDemande}
          setModalIsOpenAccepterDemande={setModalIsOpenAccepterDemande}
          stateUserId={stateUserId}
          setStateUserId={setStateUserId}
        />
      ) : (
        <div></div>
      )}
    

    {modalIsOpenRefusDemande === true ? (
        <Modal_refuser_demande_carte
        modalIsOpenRefusDemande={modalIsOpenRefusDemande}
        setModalIsOpenRefusDemande={setModalIsOpenRefusDemande}
          stateUserId={stateUserId}
          setStateUserId={setStateUserId}
        />
      ) : (
        <div></div>
      )}


    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des demandes</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                   Date de demande{" "}
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Nom de carte
                  </th>

                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Nom et prénom
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Action
                  </th>
               
              

                  
              
                </tr>
              </thead>
              {posts.map((c)=>(
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">                    { dateformat(c.date , "dd mmmm yyyy") }   
 </h6>
                      </div>
                    </div>
                  </td>
                  
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{c.id_type_carte.nom_carte} </h6>
                      </div>
                    </div>
                  </td>

                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">
                    <h6 class="mb-0 text-sm">{c.id_user.id_client.nom} {c.id_user.id_client.prenom}</h6>
                    <h6 class="mb-0 text-sm">{c.id_user.id_client.cin}</h6>
                    </span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">
                    <h6 class="mb-0 text-sm"> </h6>
                    </span>
                  </td>

                  {c.etat_demande =="en attente" ? (<td class="align-middle text-center">
                  <button type="button" class="btn btn-success"   onClick={() => {
                          setModalIsOpenAccepterDemande(true);
                          setStateUserId(c);
                        }}>Valider demande</button>

                  </td>) : (<>
                  </>) }
                  
                  {c.etat_demande == "en attente" ? (     <td class="align-middle text-center">
                  <button type="button" class="btn btn-danger"  onClick={() => {
                          setModalIsOpenRefusDemande(true);
                          setStateUserId(c);
                        }} >Refuser demande</button>

                  </td>) : (<>
                  
                  </>)}
             
             {c.etat_demande == "refuser" ? ( <img src="/img/icons8-close-64.png" style={{width:"3em"}}/>) :(<></>)}
             {c.etat_demande == "valider" ? (   <td
                   
                      >
                      <img src="/img/icons8-check-mark-48.png" style={{width:"2em"}}/>

                      </td>) :(<></>)}



            

                 
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