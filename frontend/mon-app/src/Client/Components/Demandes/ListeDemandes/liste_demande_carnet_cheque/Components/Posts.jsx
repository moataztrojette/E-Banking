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
          <h6>Liste de demandes de carnet de chéque</h6>
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
                   Format de carnet de chéque

                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  nombre de carnet de chéque
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
                      {c.format}
                    </span>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="text-secondary text-xs font-weight-bold">
                      {c.nb_carnet_cheque}
                    </span>
                  </td>
                
                  <td
                        class="align-middle text-center text-sm"
                        onClick={() => {
                          setModalIsOpen(true);
                          setStateIdDemande(c);
                        }}
                      >
                        <button class="btn btn-success">
                        Voir
                        </button>
                      </td>

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