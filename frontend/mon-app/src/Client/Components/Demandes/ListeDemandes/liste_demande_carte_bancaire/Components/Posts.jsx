import React, {useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import dateformat from 'dateformat'
import ModalResultat from "./ModalResultat";


const Posts = ({ posts, loading,setPosts}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [stateIdDemande, setStateIdDemande] = useState({});

 

  if (loading) {
    return <h2>Loading...</h2>;
  }

  


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
    
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Liste des demandes de carte bancaire</h6>
        </div>
       
        <div className="card-body px-0 pt-0 pb-2">
   

          <div className="table-responsive p-0">

         
            <table className="table align-items-center mb-0">     
           
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                   La Date de demande {" "}
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                   Nom de carte 

                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Resultat 
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
                      {c.id_type_carte.nom_carte}
                    </span>
                  </td>
            
                {c.etat_demande=="valider" ? ( <td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateIdDemande(c);
                        }}
                      >
                        <button class="btn btn-success">
                        Voir
                        </button>
                      </td>) : (<></>)}
                 
                      {c.etat_demande == "valider" ? (   <td
                      
                   
                   >
                   <img src="/img/icons8-check-mark-48.png" style={{width:"2em"}}/>

                   </td>) :(<></>)}

                   {c.etat_demande == "refuser" ? (   <td
                    style={{width:"10px"}}
                   
                   >
                     <div className="demande_refuser">
                     <h6>Demande refusée</h6>
                   <img src="/img/icons8-close-64.png" style={{width:"30px"}}/>
                   {c.raison}
                   </div>

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